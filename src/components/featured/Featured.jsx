import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {CircularProgressbar}from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp';
import { KeyboardArrowDown } from '@mui/icons-material';
const Featured = () => {
  return (
    <div className='feature'>
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertIcon fontSize='small' />
        </div>
        <div className="bottom">
            <div className="featuredChart">
            <CircularProgressbar value={70} text={"70%"} strokeWidth={4} />
            </div>
            <p className="title">Total sales made today</p>
            <p className='amount'>$420</p>
            <p className="description">
                previous transaction processing. Last payment maynot be included
            </p>
            <div className="summary">
                <div className="item">
                    <div className="itemTitle">Target</div>
                    <div className="itemResult negitive">
                        <KeyboardArrowDown fontSize='small'/>
                        <div className="resultAmount">$12.4K</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Las week</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUp fontSize='small'/>
                        <div className="resultAmount">$12.4K</div>
                    </div>
                </div>
                <div className="item">
                    <div className="itemTitle">Last month</div>
                    <div className="itemResult positive">
                        <KeyboardArrowUp fontSize='small'/>
                        <div className="resultAmount">$12.4K</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured