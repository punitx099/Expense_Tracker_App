import { CategoryType, ExpenseCategoriesType } from "@/types";
import { Ionicons } from "@expo/vector-icons";

export const expenseCategories: ExpenseCategoriesType = {
  groceries: {
    label: "Groceries",
    value: "groceries",
    icon: { component: Ionicons, name: "cart" },
    bgColor: "#4B5563",
  },
  rent: {
    label: "Rent",
    value: "rent",
    icon: { component: Ionicons, name: "home" },
    bgColor: "#075985",
  },
  utilities: {
    label: "Utilities",
    value: "utilities",
    icon: { component: Ionicons, name: "bulb" },
    bgColor: "#ca8a04",
  },
  transportation: {
    label: "Transportation",
    value: "transportation",
    icon: { component: Ionicons, name: "car" },
    bgColor: "#b45309",
  },
  entertainment: {
    label: "Entertainment",
    value: "entertainment",
    icon: { component: Ionicons, name: "tv" },
    bgColor: "#0f766e",
  },
  dining: {
    label: "Dining",
    value: "dining",
    icon: { component: Ionicons, name: "restaurant" },
    bgColor: "#be185d",
  },

  health: {
    label: "Health",
    value: "health",
    icon: { component: Ionicons, name: "heart" },
    bgColor: "#e11d48",
  },

  insurance: {
    label: "Insurance",
    value: "insurance",
    icon: { component: Ionicons, name: "medkit" },
    bgColor: "#404040",
  },
  savings: {
    label: "Savings",
    value: "savings",
    icon: { component: Ionicons, name: "cash" },
    bgColor: "#065F46",
  },
  clothing: {
    label: "Clothing",
    value: "clothing",
    icon: { component: Ionicons, name: "shirt" },
    bgColor: "#7c3aed",
  },
  personals: {
    label: "Personals",
    value: "personals",
    icon: { component: Ionicons, name: "person" },
    bgColor: "#a21caf",
  },
  others: {
    label: "Others",
    value: "others",
    icon: { component: Ionicons, name: "ellipsis-horizontal-circle" },
    bgColor: "#525252",
  },
};

export const incomeCategory: CategoryType = {
  label: "Income",
  value: "income",
  icon: { component: Ionicons, name: "cash" },
  bgColor: "#16a34a",
};

export const transactionTypes = [
  { label: "Expense", value: "expense" },
  { label: "Income", value: "income" },
];
