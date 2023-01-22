import './wiget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { yellow } from '@mui/material/colors';
const wiget = ({type}) => {
  let data;
   
  //tempo
  let amount=100;
  let percentage=20;
  switch(type){
    case "user":
      data={
        title:"Users",
        isMoney:false,
        link:"see all users",
        icon:<PersonIcon className='icon' style={{
          backgroundColor: "rgb(169, 117, 126)",
          color:"black"
        }}/>
      }
      break;
      case "order":
        data={
          title:"Orders",
          isMoney:false,
          link:"see all orders",
          icon:<ShoppingCartIcon className='icon'
          style={{
            backgroundColor: "#9c9c56",
            color:"#ffff00"
          }}/>
        }
        break;
        case "earnings":
          data={
            title:"Earning",
            isMoney:true,
            link:"see net earnings",
            icon:<MonetizationOnIcon className='icon'
            style={{
              backgroundColor:"#78d780",
              color:"green"
            }}/>
          }
          break;   
           case "balance":
          data={
            title:"Balance",
            isMoney:true,
            link:"see details",
            icon:<AccountBalanceWalletIcon className='icon'
            style={{
              backgroundColor:"#955b67",
              color:"#3d1f1f"
            }}/>
          }
          break;
          default:
          break;
  }

  return (
    <div className='wiget'>
        <div className="left">
          <span className="title">{data.title}</span>
          <span className="counter">{data.isMoney && "$"}{amount}</span>
          <span className="link">see all user</span>
        </div>
        <div className="right">
          <div className="percentage positive">
            <KeyboardArrowUpIcon/>
            {percentage}%</div>
            {data.icon}
        </div>
    </div>
  )
}

export default wiget;