import Home from './dashboardPages/Home';
import AccountVerification from './dashboardPages/AccountVerification';
import Deposit from './dashboardPages/Deposit';
import InvestmentPackages from './dashboardPages/InvestmentPackages';
import Messages from './dashboardPages/Messages';
import MyPackages from './dashboardPages/MyPackages';
import Package from './dashboardPages/Package';
import Security from './dashboardPages/Security';
import TransactionLogs from './dashboardPages/TransactionLogs';
import UpdateAccount from './dashboardPages/UpdateAccount';
import WalletDetails from './dashboardPages/WalletDetails';
import Withdrawal from './dashboardPages/Withdrawal';
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
    name: "Verify Account",
    path: "/dashboard/AccountVerification",
    element: <AccountVerification />,
  },
  {
    icon: FaPhoneAlt,
    name: "Deposit",
    path: "/dashboard/Deposit",
    element: <Deposit />,
  },
  {
    icon: FiLogIn,
    name: "Investment Packages",
    path: "/dashboard/InvestmentPackages",
    element: <InvestmentPackages />,
  },
  {
    icon: IoPersonAdd,
    name: "Messages",
    path: "/dashboard/Messages",
    element: <Messages />,
  },
  {
    icon: FaHome,
    name: "My Packages",
    path: "/dashboard/MyPackages",
    element: <MyPackages />,
  },
  {
    icon: FaRegQuestionCircle,
    name: "Package",
    path: "/dashboard/Package",
    element: <Package />,
  },
  {
    icon: FaPhoneAlt,
    name: "Security",
    path: "/dashboard/Security",
    element: <Security />,
  },
  {
    icon: FiLogIn,
    name: "Transaction Logs",
    path: "/dashboard/TransactionLogs",
    element: <TransactionLogs />,
  },
  {
    icon: IoPersonAdd,
    name: "Account Update",
    path: "/dashboard/UpdateAccount",
    element: <UpdateAccount />,
  },
  {
    icon: FiLogIn,
    name: "Wallet Details",
    path: "/dashboard/WalletDetails",
    element: <WalletDetails />,
  },
  {
    icon: IoPersonAdd,
    name: "Withdrawal",
    path: "/dashboard/Withdrawal",
    element: <Withdrawal />,
  },
];

export default routes;
