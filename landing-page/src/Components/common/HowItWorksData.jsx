import {
  FaUserPlus,
  FaSearch,
  FaUsers,
  FaCalendarAlt,
  FaPlayCircle,
} from "react-icons/fa";

const howItWorksData = [
  {
    id: 1,
    title: "Create Account",
    description: "Sign up and create your profile in minutes.",
    icon: FaUserPlus,
  },
  {
    id: 2,
    title: "Add Your Skills",
    description: "Tell us what you know and what you want to learn.",
    icon: FaSearch,
  },
  {
    id: 3,
    title: "Get Matched",
    description: "AI finds the best learning partner for you.",
    icon: FaUsers,
  },
  {
    id: 4,
    title: "Schedule Session",
    description: "Pick a time and connect with your match.",
    icon: FaCalendarAlt,
  },
  {
    id: 5,
    title: "Start Learning",
    description: "Join sessions, share knowledge and grow together.",
    icon: FaPlayCircle,
    last: true,
  },
];

export default howItWorksData;