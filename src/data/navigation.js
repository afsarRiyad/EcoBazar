import {
  Apple,
  Soup,
  Shrimp,
  Drumstick,
  CupSoda,
  IceCreamCone,
  Dessert,
  Cuboid,
  CookingPot,
  LayoutGrid,
  Layers,
  Heart,
  CircleHelp,
  ShoppingCart,
  CreditCard,
  Phone,
  Citrus,
  Coffee,
  Salad,
} from "lucide-react";
import { blogPosts } from "./blogPosts";

export const categories = [
  { name: "Fresh Fruits", icon: Apple },
  { name: "Vegetables", icon: Soup },
  { name: "River Fish", icon: Shrimp },
  { name: "Chicken & Meat", icon: Drumstick },
  { name: "Drinks & Water", icon: CupSoda },
  { name: "Yogurt & Ice Cream", icon: IceCreamCone },
  { name: "Cake & Bread", icon: Dessert },
  { name: "Butter & Cream", icon: Cuboid },
  { name: "Cooking", icon: CookingPot },
];

const blogDropdownIcons = [Citrus, Coffee, Salad];

export const menu = [
  { name: "Home", to: "/" },
  {
    name: "Shop",
    to: "/shop",
    footer: { label: "View All Products", to: "/shop" },
    children: [
      { name: "All Products", to: "/all-products", icon: LayoutGrid },
      { name: "Categories", to: "/categories", icon: Layers },
      { name: "Wishlist", to: "/wishlist", icon: Heart },
    ],
  },
  {
    name: "Pages",
    children: [
      { name: "FAQ", to: "/faq", icon: CircleHelp },
      { name: "Cart", to: "/cart", icon: ShoppingCart },
      { name: "Checkout", to: "/checkout", icon: CreditCard },
      { name: "Contact Us", to: "/contact", icon: Phone },
    ],
  },
  {
    name: "Blog",
    to: "/blog",
    footer: { label: "View All Articles", to: "/blog" },
    children: [
      ...blogPosts.slice(0, 3).map((post, index) => ({
        name: post.title,
        to: `/blog/${post.slug}`,
        icon: blogDropdownIcons[index],
      })),
    ],
  },
  { name: "About" },
  { name: "Contact Us", to: "/contact" },
];

export const allCategories = [
  {
    name: "Fresh Foods",
    children: [
      { name: "Fresh Fruits" },
      { name: "Fresh Vegetables" },
      { name: "Herbs & Leafy Greens" },
    ],
    hasIcon: true
  },
  {
    name: "Meat & Fish",
    children: [
      { name: "River Fish" },
      { name: "Sea Fish" },
      { name: "Chicken" },
      { name: "Beef" },
      { name: "Mutton" },
    ],
    hasIcon: true
  },
  {
    name: "Dairy & Ice-cream",
    children: [
      { name: "Milk" },
      { name: "Yogurt" },
      { name: "Butter" },
      { name: "Cream" },
      { name: "Ice Cream" },
      { name: "Frozen Snacks" },
    ],
    hasIcon: true
  },
  {
    name: "Bakery",
    children: [
      { name: "Bread" },
      { name: "Cake" },
      { name: "Biscuits" },
      { name: "Pastries" },
    ],
    hasIcon: true
  },
  {
    name: "Beverages",
    children: [
      { name: "Soft Drinks" },
      { name: "Juice" },
      { name: "Mineral Water" },
      { name: "Energy Drinks" },
    ],
    hasIcon: true
  },
  {
    name: "Cooking Essentials",
    children: [
      { name: "Cooking Oil" },
      { name: "Spices" },
      { name: "Rice" },
      { name: "Lentils (Dal)" },
    ],
    hasIcon: true
  },
];
