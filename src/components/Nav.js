import './Nav.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import GroupsIcon from '@mui/icons-material/Groups';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { IconButton, Avatar } from '@material-ui/core';
import AddIcon from '@mui/icons-material/Add';

function Nav(params) {
    
    return (
        <div className="nav">
            <div className="nav-left">
                <img classname="nav-logo" src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="logo" />
                <div className='nav-search'>
                    <SearchIcon fontSize='medium'/>
                </div>
            </div>

            <div className="nav-center">
                
                    <div className='nav-option nav-option-active'>
                        <HomeIcon fontSize='large'/>
                    </div>
                    
                    <div className='nav-option'>
                        <GroupIcon fontSize='large'/>
                    </div>

                    <div className='nav-option'>
                        <OndemandVideoIcon fontSize='large'/>
                    </div>

                    <div className='nav-option'>
                        <GroupsIcon fontSize='large'/>
                    </div>

                    <div className='nav-option'>
                        <VideogameAssetIcon fontSize='large'/>
                    </div>
                  
            </div>

            <div className="nav-right">
                
                    <IconButton className='nav-button'>
                        <AppsIcon fontSize='small'/>
                    </IconButton>

                    <IconButton className='nav-button'>
                        <NotificationsIcon />
                    </IconButton>

                    <IconButton className='nav-button'>
                        <AddIcon />
                    </IconButton>

                    <div className='nav-avatar'>
                        <Avatar/>
                    </div>

                
            </div>
        </div>
    )
}

export default Nav;