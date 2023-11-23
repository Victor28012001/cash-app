import { FaHome, FaRegQuestionCircle, FaPhoneAlt, FaCoins, FaWallet, FaHistory } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { IoPersonAdd, IoPeople } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiHome, BiShoppingBag, BiSolidBox, BiSolidGridAlt } from "react-icons/bi";
import { RiAccountCircleFill } from "react-icons/ri";



const UserSidebar = [
    {
        icon: <FaHome size={20} />,
        name: "Dashboard",
        path: "/dashboard",
        active: true,
        alert: false,
      },
      {
        icon: <FaRegQuestionCircle size={20} />,
        name: "Verify Account",
        path: "/dashboard/AccountVerification",
        active: false,
        alert: false,
      },
      {
        icon: <FaPhoneAlt size={20} />,
        name: "Deposit",
        path: "/dashboard/Deposit",
        active: false,
        alert: false,
      },
      {
        icon: <FiLogIn size={20} />,
        name: "Investment Packages",
        path: "/dashboard/InvestmentPackages",
        active: false,
        alert: false,
      },
      {
        icon: <IoPersonAdd size={20} />,
        name: "Messages",
        path: "/dashboard/Messages",
        active: false,
        alert: true,
      },
      {
        icon: <FaHome size={20} />,
        name: "My Packages",
        path: "/dashboard/MyPackages",
        active: false,
        alert: false,
      },
      {
        icon: <FaRegQuestionCircle size={20} />,
        name: "Package",
        path: "/dashboard/Package",
        active: false,
        alert: false,
      },
      {
        icon: <FaPhoneAlt size={20} />,
        name: "Security",
        path: "/dashboard/Security",
        active: false,
        alert: false,
      },
      {
        icon: <FiLogIn size={20} />,
        name: "Transaction Logs",
        path: "/dashboard/TransactionLogs",
        active: false,
        alert: false,
      },
      {
        icon: <FiLogIn size={20} />,
        name: "Wallet Details",
        path: "/dashboard/WalletDetails",
        active: false,
        alert: false,
      },
      {
        icon: <IoPersonAdd size={20} />,
        name: "Withdrawal",
        path: "/dashboard/Withdrawal",
        active: false,
        alert: false,
      },
      {
        icon: <IoPersonAdd size={20} />,
        name: "Profile",
        path: "/dashboard/Profile",
        active: false,
        alert: false,
      },
]

export default UserSidebar



