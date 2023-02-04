import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import userimg from '../../assets/image/avatar/prashant.JPG'
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
// import userimg from '../../assets/image/avatar/user.png'

const Navbar = () => {
  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder='search...'/>
          <SearchIcon className='searchIcon'/>
        </div>
        <div className='items'>
          <div className='item'>
            <LanguageOutlinedIcon className="icon"/>
            English
          </div>
          <div className='item'>
            <DarkModeOutlinedIcon className="icon" onClick={()=>dispatch({type:"TOGGLE"})}/>            
          </div>
          <div className='item'>
            <FullscreenExitOutlinedIcon className="icon"/>            
          </div>
          <div className='item'>
            <NotificationsNoneOutlinedIcon className="icon"/> 
            <div className='counter'>1</div>           
          </div>
          <div className='item'>
            <ChatBubbleOutlineOutlinedIcon className="icon"/>  
            <div className='counter'>3</div>           
          
          </div>
          <div className='item'>
            <ListOutlinedIcon className="icon"/>            
          </div>
          <div className='item'>
            <img src={userimg}
            alt=''
            className="avatar"
             />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar