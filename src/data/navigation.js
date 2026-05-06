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
} from "lucide-react";

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

export const menu = [
  { name: "Home", hasIcon: true },
  { name: "Shop", hasIcon: true },
  { name: "Pages", hasIcon: true },
  { name: "Blog", hasIcon: true },
  { name: "About", hasIcon: false },
  { name: "Contact Us", hasIcon: false },
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
