import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import DescriptionIcon from "@mui/icons-material/Description";
import GroupIcon from "@mui/icons-material/Group";
import StorefrontIcon from '@mui/icons-material/Storefront';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Switch from '@mui/material/Switch';
import { useTheme } from '../../components/theme/ThemeProvider'

const label = { inputProps: { 'aria-label': 'Switch demo' } };
function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const SideBar = () => {
  const { theme, toggleTheme } = useTheme();
  console.log(theme);
  
  return (
    <aside>
      <div className="aside_link">
        <HomeIcon style={{ color: theme ==="light"&& "rgba(0, 0, 0, 0.54)" }} />
        <p>Homepage</p>
      </div>
      <div className="aside_link">
        <DescriptionIcon style={{ color: theme ==="light"&& "rgba(0, 0, 0, 0.54)" }} />
        <p>Pages</p>
      </div>
      <div className="aside_link">
        <GroupIcon style={{ color: theme ==="light"&& "rgba(0, 0, 0, 0.54)" }} />
        <p>Groups</p>
      </div>
      <div className="aside_link">
        <StorefrontIcon style={{ color: theme ==="light"&& "rgba(0, 0, 0, 0.54)" }} />
        <p>Marketplace</p>
      </div>
      <div className="aside_link">
        <PersonIcon style={{ color: theme ==="light"&& "rgba(0, 0, 0, 0.54)" }} />
        <p>Friends</p>
      </div>
      <div className="aside_link">
        <SettingsIcon style={{ color: theme ==="light"&& "rgba(0, 0, 0, 0.54)" }} />
        <p>Settings</p>
      </div>
      <div className="aside_link">
        <AccountBoxIcon style={{ color: theme ==="light"&& "rgba(0, 0, 0, 0.54)" }} />
        <p>Profilo</p>
      </div>
      <div className="aside_link">
        {
          theme ==="light"?<WbSunnyIcon style={{ color: "rgba(0, 0, 0, 0.54)" }}/>:<ModeNightIcon/>
        }
        <p onClick={toggleTheme}>  <Switch {...label} defaultChecked /></p>
      </div>
    </aside>
  );
};

export default SideBar;
