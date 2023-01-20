import "./sidebar.scss";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreIcon from '@mui/icons-material/Store';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AddCardIcon from '@mui/icons-material/AddCard';
const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Admin Panel</span>
      </div>
      <hr/>
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            <DashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li>
          <p className="title">List</p>

          <li>
            <PersonOutlineOutlinedIcon className="icon"/>
            <span>Users</span>
          </li>
          <li>
            <StoreIcon className="icon"/>
            <span>Products</span>
          </li>
          <li>
            <AddCardIcon className="icon"/>
            <span>Order</span>
          </li>          
          <li>
            <LocalShippingIcon className="icon"/>
            <span>Delevery</span>
          </li>   
       
          <li>
            <AssessmentIcon className="icon"/>
            <span>Stats</span>
          </li>
          <p className="title">Useful Links</p>
          <li>
            <NotificationsActiveIcon className="icon"/>
            <span>Notification</span>
          </li>
          <li>
            <MonitorHeartIcon className="icon"/>
            <span>System Health</span>
          </li>
          <p className="title">Service</p>

          <li>
            <ErrorOutlineIcon className="icon"/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon"/>
            <span>Setting</span>
          </li>
          <p className="title">User</p>
          <li>
            <AccountCircleRoundedIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppRoundedIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="buttom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
        <div className="colorOption"></div>

      </div>
    </div>
  );
};

export default Sidebar;
