import { useState } from "react";
import { Minus, Plus, X } from "lucide-react";
import Container from "../components/Container";
import { Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQty, selectCartItems, selectCartTotal } from "../slices/cartSlice";
import Tooltip from '../components/ui/Tooltip';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const [coupon, setCoupon] = useState("");
  const subtotal = total;
  const shipping = 0;

  return (
    <section className="py-10 sm:py-16">
      <Container>
        <h1 className="dheading text-center mb-8 sm:mb-12">
          My Shopping Cart
        </h1>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Cart table */}
          <div className="flex-1 border border-gray-100 rounded-md p-4 sm:p-6">
            {/* Table head - hidden on mobile */}
            <div className="hidden sm:grid grid-cols-[2fr_1fr_1.4fr_1fr_32px] items-center pb-4 border-b border-gray-100">
              <span className="default text-gray-400 text-xs tracking-wider uppercase">
                Product
              </span>
              <span className="default text-gray-400 text-xs tracking-wider uppercase">
                Price
              </span>
              <span className="default text-gray-400 text-xs tracking-wider uppercase">
                Quantity
              </span>
              <span className="default text-gray-400 text-xs tracking-wider uppercase">
                Subtotal
              </span>
              <span />
            </div>

            {cart.map((item) => (
              <div
                key={item.id}
                className="flex flex-col sm:grid sm:grid-cols-[2fr_1fr_1.4fr_1fr_32px] items-start sm:items-center gap-3 sm:gap-0 py-5 border-b border-gray-100 last:border-b-0"
              >
                {/* Product row - always visible */}
                <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 object-contain shrink-0"
                  />
                  <p className="dfont text-gray-800 font-medium flex-1 min-w-0 truncate">
                    {item.name}
                  </p>
                  {/* Remove button - top right on mobile */}
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="sm:hidden w-7 h-7 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gry hover:border-gray-300 transition-colors duration-150 shrink-0"
                  >
                    <X size={14} className="text-gray-400" />
                  </button>
                </div>

                {/* Mobile: details row */}
                <div className="flex items-center justify-between w-full sm:hidden pl-15">
                  <p className="dfont text-gray-800">${item.price.toFixed(2)}</p>

                  {/* Quantity */}
                  <div className="flex items-center gap-2 border border-gray-200 rounded-full px-1 py-1">
                    <button
                      onClick={() => dispatch(updateQty({ id: item.id, qty: item.qty - 1 }))}
                      className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gry transition-colors duration-150"
                    >
                      <Minus size={12} className="text-gray-500" />
                    </button>
                    <span className="dfont text-gray-800 w-5 text-center">
                      {item.qty}
                    </span>
                    <button
                      onClick={() => dispatch(updateQty({ id: item.id, qty: item.qty + 1 }))}
                      className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-gry transition-colors duration-150"
                    >
                      <Plus size={12} className="text-gray-500" />
                    </button>
                  </div>

                  <p className="dfont text-gray-800 font-medium">
                    ${(item.price * item.qty).toFixed(2)}
                  </p>
                </div>

                {/* Desktop: all columns */}
                <p className="dfont text-gray-800 hidden sm:block">${item.price.toFixed(2)}</p>
                <div className="hidden sm:flex items-center gap-2 border border-gray-200 rounded-full w-fit px-1 py-1">
                  <Tooltip text="Decrease" position="top">
                    <button
                      onClick={() => dispatch(updateQty({ id: item.id, qty: item.qty - 1 }))}
                      className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gry transition-colors duration-150"
                    >
                      <Minus size={12} className="text-gray-500" />
                    </button>
                  </Tooltip>
                  <span className="dfont text-gray-800 w-4 text-center">
                    {item.qty}
                  </span>
                  <Tooltip text="Increase" position="top">
                    <button
                      onClick={() => dispatch(updateQty({ id: item.id, qty: item.qty + 1 }))}
                      className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-gry transition-colors duration-150"
                    >
                      <Plus size={12} className="text-gray-500" />
                    </button>
                  </Tooltip>
                </div>
                <p className="dfont text-gray-800 font-medium hidden sm:block">
                  ${(item.price * item.qty).toFixed(2)}
                </p>
                <Tooltip text="Remove" position="top" wrapperClassName="hidden sm:flex">
                  <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gry hover:border-gray-300 transition-colors duration-150 justify-self-center"
                  >
                    <X size={12} className="text-gray-400" />
                  </button>
                </Tooltip>
              </div>
            ))}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-6">
              <Tooltip text="Back to shop" position="left" wrapperClassName="w-full sm:w-auto">
                <Link to='/' className="dfont text-gray-600 bg-gry text-center px-5 py-2.5 rounded-full hover:bg-gray-200 transition-colors duration-150 block">
                  Return to shop
                </Link>
              </Tooltip>
              <Tooltip text="Refresh cart" position="left" wrapperClassName="w-full sm:w-auto">
                <button className="dfont text-gray-600 bg-gry w-full sm:w-auto px-5 py-2.5 rounded-full hover:bg-gray-200 transition-colors duration-150">
                  Update Cart
                </button>
              </Tooltip>
            </div>
          </div>

          {/* Cart total */}
          <div className="w-full lg:w-[320px] border border-gray-100 rounded-md p-5 sm:p-6 h-fit">
            <h3 className="dfont text-gray-900 font-semibold text-base pb-4">
              Cart Total
            </h3>

            <div className="flex items-center justify-between py-3 border-t border-gray-100">
              <span className="default">Subtotal:</span>
              <span className="dfont text-gray-900 font-medium">
                ${subtotal.toFixed(2)}
              </span>
            </div>

            <div className="flex items-center justify-between py-3 border-t border-gray-100">
              <span className="default">Shipping:</span>
              <span className="dfont text-gray-900 font-medium">Free</span>
            </div>

            <div className="flex items-center justify-between py-3 border-t border-gray-100">
              <span className="default">Total:</span>
              <span className="dfont text-gray-900 font-semibold">
                ${total.toFixed(2)}
              </span>
            </div>

            <Tooltip text="Continue to payment" position="left" wrapperClassName="w-full">
              <button className="w-full bg-primary text-white dfont font-semibold py-3 rounded-full mt-4 hover:brightness-95 transition-all duration-150">
                Proceed to checkout
              </button>
            </Tooltip>
          </div>
        </div>

        {/* Coupon */}
        <div className="border w-full max-w-[820px] border-gray-100 rounded-md p-5 sm:p-6 mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
          <h3 className="dfont text-gray-900 font-semibold text-base shrink-0">
            Coupon Code
          </h3>
          <div className="flex flex-1 w-full gap-3">
            <input
              type="text"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              placeholder="Enter code"
              className="dfont flex-1 border border-gray-200 rounded-full px-5 py-2.5 outline-none focus:border-primary transition-colors duration-150"
            />
            <Tooltip text="Apply discount code" position="left">
              <button className="dfont text-white bg-gray-900 px-6 py-2.5 rounded-full hover:bg-gray-800 transition-colors duration-150 whitespace-nowrap cursor-pointer">
                Apply Coupon
              </button>
            </Tooltip>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cart;