import Dashboard from '../Components/User/Dashboard';
import AccountVerification from '../Components/User/AccountVerification';
import Deposit from '../Components/User/Deposit';
import InvestmentPackages from '../Components/User/InvestmentPackages';
import Messages from '../Components/User/Messages';
import MyPackages from '../Components/User/MyPackages';
import Package from '../Components/User/Package';
import Security from '../Components/User/Security';
import TransactionLogs from '../Components/User/TransactionLogs';
import UpdateAccount from '../Components/User/UpdateAccount';
import WalletDetails from '../Components/User/WalletDetails';
import Withdrawal from '../Components/User/Withdrawal';
import Profile from '../Components/User/Profile';


import AddGateway from '../Components/Admin/AddGateway'
import AddPackage from '../Components/Admin/AddPackage'
import AddUser from '../Components/Admin/AddUser'
import AdminDashboard from '../Components/Admin/AdminDashboard'
import AllUsers from '../Components/Admin/AllUsers'
import AllPackages from '../Components/Admin/AllPackages'
import Deact2f from '../Components/Admin/Deact2f'
import DepositOrders from '../Components/Admin/DepositOrders'
import Investments from '../Components/Admin/Investments'
import ManageGateway from '../Components/Admin/ManageGateway'
import ManageUsers from '../Components/Admin/ManageUsers'
import Message from '../Components/Admin/Message';
import PswdChange from '../Components/Admin/PswdChange'
import SendMail from '../Components/Admin/SendMail'
import SendMessages from '../Components/Admin/SendMessages'
import Settings from '../Components/Admin/Settings'
import UserApprovals from '../Components/Admin/UserApprovals'
import WithdrawalManage from '../Components/Admin/WithdrawalManage';


import Home from '../Components/Frontend/Home';
import Contact from "../Components/Frontend/Contact";
import About from "../Components/Frontend/About";
import Pagenotfound from "../Components/Frontend/Pagenotfound";
import Login from "../Components/Frontend/Auth/Login";
import Register from "../Components/Frontend/Auth/Register";

import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
  // {
  //   name: "Profile",
  //   path: "/admin",
  //   exact: true,
  // },
  {
    name: "Home",
    path: "/",
    exact: true,
    element: <Home />,
  },
  {
    name: "Contact",
    path: "/Contact",
    exact: true,
    element: <Contact />,
  },
  {
    name: "About",
    path: "/About",
    exact: true,
    element: <About />,
  },
  {
    name: "Register",
    path: "/Register",
    exact: true,
    element: <Register />,
  },
  {
    name: "Pagenotfound",
    path: "/*",
    exact: false,
    element: <Pagenotfound />,
  },
  {
    name: "Login",
    path: "/Login",
    exact: true,
    element: <Login />,
  },
  {
    name: "Dashboard",
    path: "/dashboard",
    exact: true,
    element: <Dashboard />,
  },
  {
    name: "Account Verification",
    path: "/dashboard/AccountVerification",
    exact: true,
    element: <AccountVerification />,
  },
  {
    name: "Update Profile",
    path: "/dashboard/Profile",
    exact: true,
    element: <Profile />,
  },
  {
    name: "Deposit",
    path: "/dashboard/Deposit",
    exact: true,
    element: <Deposit />,
  },
  {
    name: "Investment Packages",
    path: "/dashboard/InvestmentPackages",
    exact: true,
    element: <InvestmentPackages />,
  },
  {
    name: "Messages",
    path: "/dashboard/Messages",
    exact: true,
    element: <Messages />,
  },
  {
    name: "My Packages",
    path: "/dashboard/MyPackages",
    exact: true,
    element: <MyPackages />,
  },
  {
    name: "Package",
    path: "/dashboard/Package",
    exact: true,
    element: <Package />,
  },
  {
    name: "Security",
    path: "/dashboard/Security",
    exact: true,
    element: <Security />,
  },
  {
    name: "Transaction Logs",
    path: "/dashboard/TransactionLogs",
    exact: true,
    element: <TransactionLogs />,
  },
  {
    name: "Wallet Details",
    path: "/dashboard/WalletDetails",
    exact: true,
    element: <WalletDetails />,
  },
  {
    name: "Withdrawal",
    path: "/dashboard/Withdrawal",
    exact: true,
    element: <Withdrawal />,
  },
  {
    name: "Add Gateway",
    path: "/AddGateway",
    exact: true,
    element: <AddGateway />,
  },
  {
    name: "Add Package",
    path: "/AddPackage",
    exact: true,
    element: <AddPackage />,
  },
  {
    name: "Add User",
    path: "/AddUser",
    exact: true,
    element: <AddUser />,
  },
  {
    name: "Admin Dashboard",
    path: "/AdminDashboard",
    exact: true,
    element: <AdminDashboard />,
  },
  {
    name: "All Packages",
    path: "/AllPackages",
    exact: true,
    element: <AllPackages />,
  },
  {
    name: "All Users",
    path: "/AllUsers",
    exact: true,
    element: <AllUsers />,
  },
  {
    name: "Activate 2-factor Authentication",
    path: "/Deact2f",
    exact: false,
    element: <Deact2f />,
  },
  {
    name: "Deposit Orders",
    path: "/DepositOrders",
    exact: true,
    element: <DepositOrders />,
  },
  {
    name: "Investments",
    path: "/Investments",
    exact: true,
    element: <Investments />,
  },
  {
    name: "Manage Gateway",
    path: "/ManageGateway",
    exact: true,
    element: <ManageGateway />,
  },
  {
    name: "Manage Users",
    path: "/ManageUsers",
    exact: true,
    element: <ManageUsers />,
  },
  {
    name: "Investments",
    path: "/Investments",
    exact: true,
    element: <Investments />,
  },
  {
    name: "Message",
    path: "/Message",
    exact: true,
    element: <Message />,
  },
  {
    name: "Password Change",
    path: "/PswdChange",
    exact: true,
    element: <PswdChange />,
  },
  {
    name: "Send Mail",
    path: "/SendMail",
    exact: true,
    element: <SendMail />,
  },
  {
    name: "Send Messages",
    path: "/SendMessages",
    exact: true,
    element: <SendMessages />,
  },
  {
    name: "Settings",
    path: "/Settings",
    exact: true,
    element: <Settings />,
  },
  {
    name: "UserApprovals",
    path: "/UserApprovals",
    exact: true,
    element: <UserApprovals />,
  },
  {
    name: "Withdrawal Manage",
    path: "/WithdrawalManage",
    exact: true,
    element: <WithdrawalManage />,
  },
]);

export default routes;
