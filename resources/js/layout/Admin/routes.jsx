import { Home, About, Contact, Login, Register } from "@/pages";
import { FaHome, FaRegQuestionCircle, FaPhoneAlt, FaCoins, FaWallet, FaHistory } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { IoPersonAdd, IoPeople } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiHome, BiShoppingBag, BiSolidBox, BiSolidGridAlt } from "react-icons/bi";
import { RiAccountCircleFill } from "react-icons/ri";

export const routes = [
  {
    icon: FaHome,
    name: "home",
    path: "/",
    element: <Home />,
  },
  {
    icon: FaRegQuestionCircle,
    name: "about",
    path: "/about",
    element: <About />,
  },
  {
    icon: FaPhoneAlt,
    name: "contact",
    path: "/contact",
    element: <Contact />,
  },
  {
    icon: FiLogIn,
    name: "login",
    path: "/login",
    element: <Login />,
  },
  {
    icon: IoPersonAdd,
    name: "Sign Up",
    path: "/register",
    element: <Register />,
  },
];

export default routes;
