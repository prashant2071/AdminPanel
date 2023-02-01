import './new.scss';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

const New = ({inputs,title}) => {
  return (
    <div className='new'>
      <Sidebar/>
      <div className='newContainer'>
        <Navbar/>
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="buttom">
          <div className="left">
            <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
            alt=""/>
          </div>
          <div className="right">
            <form>
            <div className="formInput">
                <label htmlFor='file'>
                  image: <DriveFolderUploadIcon className='icon'/></label>
                <input type="file" id='file' style={{display:"none"}}/>
              </div>
              <div className="formInput">
                <label>Username</label>
                <input type="text" value="" placeholder='ashok thapa'/>
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password" value="" placeholder='.......'/>
              </div>
              <div className="formInput">
                <label>Fullname</label>
                <input type="text" placeholder='fullname'/>
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="email" placeholder='..@example.com'/>
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input type="text" placeholder='+977 9823216325'/>
              </div>
              <div className="formInput">
                <label>Address</label>
                <input type="text" placeholder='address'/>
              </div>
              <div className="formInput">
                <label>Country</label>
                <input type="text" placeholder='country'/>
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New