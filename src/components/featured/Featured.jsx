import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
const Featured = () => {
  return (
    <div className='feature'>
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertIcon fontSize='small' />
        </div>
        <div className="bottom">
            <div className="featuredChart">
                
            </div>
        </div>
    </div>
  )
}

export default Featured