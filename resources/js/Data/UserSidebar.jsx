import { FaHome } from "react-icons/fa";
import { FcPortraitMode, FcDonate, FcPackage, FcSms, FcNeutralTrading, FcFilingCabinet, FcLock, FcCurrencyExchange, FcViewDetails, FcMoneyTransfer, FcBusinessman } from "react-icons/fc";



const UserSidebar = [
    {
        icon: <FaHome size={20} />,
        name: "Dashboard",
        path: "/dashboard",
        active: true,
        alert: false,
      },
      {
        icon: <FcPortraitMode size={20} />,
        name: "Verify Account",
        path: "/dashboard/AccountVerification",
        active: false,
        alert: false,
      },
      {
        icon: <FcDonate size={20} />,
        name: "Deposit",
        path: "/dashboard/WalletDetails",
        active: false,
        alert: false,
      },
      {
        icon: <FcNeutralTrading size={20} />,
        name: "Investment Packages",
        path: "/dashboard/InvestmentPackages",
        active: false,
        alert: false,
      },
      {
        icon: <FcSms size={20} />,
        name: "Messages",
        path: "/dashboard/Messages",
        active: false,
        alert: true,
      },
      {
        icon: <FcFilingCabinet size={20} />,
        name: "Investments",
        path: "/dashboard/MyPackages",
        active: false,
        alert: false,
      },
      // {
      //   icon: <FcPackage size={20} />,
      //   name: "Package",
      //   path: "/dashboard/Package",
      //   active: false,
      //   alert: false,
      // },
      {
        icon: <FcLock size={20} />,
        name: "Security",
        path: "/dashboard/Security",
        active: false,
        alert: false,
      },
      {
        icon: <FcCurrencyExchange size={20} />,
        name: "Transaction Logs",
        path: "/dashboard/TransactionLogs",
        active: false,
        alert: false,
      },
      // {
      //   icon: <FcViewDetails size={20} />,
      //   name: "Wallet Details",
      //   path: "/dashboard/WalletDetails",
      //   active: false,
      //   alert: false,
      // },
      {
        icon: <FcMoneyTransfer size={20} />,
        name: "Withdrawal",
        path: "/dashboard/Withdrawal",
        active: false,
        alert: false,
      },
      {
        icon: <FcBusinessman size={20} />,
        name: "Profile",
        path: "/dashboard/Profile",
        active: false,
        alert: false,
      },
      {
        icon: <FcBusinessman size={20} />,
        name: "Top Traders",
        path: "/dashboard/TopTraders",
        active: false,
        alert: false,
      },
]

export default UserSidebar



