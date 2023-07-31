import React from 'react'
import "./sidebar.css"
import DashboardIcon from '@mui/icons-material/Dashboard';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="top">
            <div className="logo">Dashboard</div>
        </div>
        <hr />
        <div className="center">
            <ul>
                <div className="title">MAIN</div>
                <li>
                    <DashboardIcon className='icon' />
                    <span>Dashboard</span>
                </li>
                <div className="title">LISTS</div>
                <li>
                    <Person2OutlinedIcon className='icon' />
                    <span>Users</span>
                </li>
                <li>
                    <LocalShippingIcon className='icon' />
                    <span>Products</span>
                </li>
                <li>
                    <CreditCardIcon className='icon' />
                    <span>Orders</span>
                </li>
                <li>
                    <StoreIcon className='icon' />
                    <span>Delivery</span>
                </li>
                <div className="title">USEFULL</div>
                <li>
                    <InsertChartIcon className='icon' />
                    <span>Stats</span>
                </li>
                <li>
                    <SettingsApplicationsIcon className='icon' />
                    <span>Notification</span>
                </li>
                <div className="title">SERVICE</div>
                <li>
                    <ExitToAppIcon className='icon' />
                    <span>System Health</span>
                </li>
                <li>
                    <NotificationsNoneIcon className='icon' />
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsSystemDaydreamOutlinedIcon className='icon' />
                    <span>Settings</span>
                </li>
                <div className="title">USER</div>
                <li>
                    <PsychologyOutlinedIcon className='icon' />
                    <span>Profile</span>
                </li>
                <li>
                    <AccountCircleOutlinedIcon className='icon' />
                    <span>Logout</span>
                </li>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"></div>
            <div className="colorOption"></div>
        </div>
    </div>
  )
}

export default Sidebar