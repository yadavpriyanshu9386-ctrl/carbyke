
import {
  Home,
  CarFront,
  Bike,
  Zap,
  KeyRound,
  Wallet,
  Heart,
  ClipboardList,
  Star,
  Newspaper,
  Calculator,
  Info,
  Phone,
} from "lucide-react";

export const menuSections = [
  {
    title: "Explore CARBYKE",
    items: [
      { name: "Home", icon: Home, target: "Home" },
      { name: "Buy Cars", icon: CarFront, target: "Buy" },
      { name: "Buy Bikes", icon: Bike, target: "Buy" },
      { name: "Electric Vehicles", icon: Zap, comingSoon: true },
    ],
  },
  {
    title: "Our Services",
    items: [
      { name: "Rent Vehicles", icon: KeyRound, target: "Rent" },
      { name: "Vehicle Loan", icon: Wallet, comingSoon: true },
      { name: "Sell Vehicle", icon: CarFront, target: "Sell" },
      { name: "Wishlist", icon: Heart, target: "Wishlist", loginRequired: true },
      { name: "My Listings", icon: ClipboardList, target: "My Listings", loginRequired: true },
    ],
  },
  {
    title: "More",
    items: [
      { name: "Reviews", icon: Star, target: "Reviews" },
      { name: "News, Videos & Tips", icon: Newspaper, comingSoon: true },
      { name: "EMI Calculator", icon: Calculator, comingSoon: true },
      { name: "About Us", icon: Info, target: "About Us" },
      { name: "Contact Us", icon: Phone, target: "Contact Us" },
    ],
  },
];
