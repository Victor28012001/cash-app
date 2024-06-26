import { FaHome, FaRegQuestionCircle, FaPhoneAlt, FaCoins, FaWallet, FaHistory } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { IoPersonAdd, IoPeople } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiHome, BiShoppingBag, BiSolidBox, BiSolidGridAlt } from "react-icons/bi";
import { RiAccountCircleFill } from "react-icons/ri";
import { FcSettings, FcPrivacy, FcGrid, FcDataEncryption, FcMoneyTransfer, FcBusinessman, FcCurrencyExchange, FcPackage, FcComments, FcExpired } from "react-icons/fc";

const AdminSidebard = [
    {
        icon: <FcGrid size={20} />,
        name: "Admin Panel",
        path: "/AdminDashboard",
        active: true,
    },
    {
        name: "Security",
        icon: <FcPrivacy size={20} />,
        "childrens": [
            {
                name: "Change Password",
                icon: <FcPrivacy size={20} />,
                path: "/PswdChange"
            },
            {
                name: "Deactivate Authenticator",
                icon: <FcDataEncryption size={20} />,
                path: "/Deact2f"
            }
        ]
    },
    {
        name: "Gateways",
        icon: <FcMoneyTransfer size={20} />,
        "childrens": [
            {
                name: "Add Gateway",
                icon: <FaHome size={20} />,
                path: "/AddGateway"
            },
            {
                name: "Manage Gateway",
                icon: <FaHome size={20} />,
                path: "/ManageGateway"
            }
        ]
    },
    {
        icon: <FcSettings size={20} />,
        name: "Settings",
        path: "/Settings",
        active: true,
    },
    {
        name: "Users",
        icon: <FcBusinessman size={20} />,
        "childrens": [
            {
                name: "All Users",
                icon: <FaHome size={20} />,
                path: "/AllUsers"
            },
            {
                name: "Add User",
                icon: <FaHome size={20} />,
                path: "/AddUser"
            },
            {
                name: "Users Approvals",
                icon: <FaHome size={20} />,
                path: "/UserApprovals"
            },
            {
                name: "Manage Users",
                icon: <FaHome size={20} />,
                path: "/ManageUsers"
            }
        ]
    },
    {
        name: "Transactions",
        icon: <FcCurrencyExchange size={20} />,
        "childrens": [
            {
                name: "Withdrawal Manage",
                icon: <FaHome size={20} />,
                path: "/WithdrawalManage"
            },
            {
                name: "Deposit Orders",
                icon: <FaHome size={20} />,
                path: "/DepositOrders"
            }
        ]
    },
    {
        name: "Packages",
        icon: <FcPackage size={20} />,
        "childrens": [
            {
                name: "Add Package",
                icon: <FaHome size={20} />,
                path: "/AddPackage"
            },
            {
                name: "All Packages",
                icon: <FaHome size={20} />,
                path: "/AllPackages"
            },
            {
                name: "Investments",
                icon: <FaHome size={20} />,
                path: "/Investments"
            }
        ]
    },
    {
        name: "Messages",
        icon: <FcComments size={20} />,
        "childrens": [
            {
                name: "Send Messages",
                icon: <FaHome size={20} />,
                path: "/SendMessages"
            },
            {
                name: "View Messages",
                icon: <FaHome size={20} />,
                path: "/Message"
            },
            {
                name: "Send Mail",
                icon: <FaHome size={20} />,
                path: "/SendMail"
            }
        ]
    },
    {
        name: "Logout",
        icon: <FcExpired size={20} />,
        path: "/Logout"
    }
]

export default AdminSidebard