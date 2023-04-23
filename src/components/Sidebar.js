import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import PeopleIcon from '@mui/icons-material/People';
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import GroupsIcon from '@mui/icons-material/Groups';
import StorefrontIcon from '@mui/icons-material/Storefront';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Sidebar(params) {
    
    return (
        <div className="sidebar">
                <SidebarRow src="https://storage.googleapis.com/kaggle-avatars/images/1765403-gp.jpg" title="Tripti Chhetri"/>
                <SidebarRow Icon={PeopleIcon} title="Friends"/>
                <SidebarRow Icon={DynamicFeedIcon} title="Most Recent"/>
                <SidebarRow Icon={GroupsIcon} title="Groups"/>
                <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
                <SidebarRow Icon={OndemandVideoIcon} title="Watch"/>
                <SidebarRow Icon={KeyboardArrowDownIcon} title="See more"/>
        </div>
    )
}

export default Sidebar;