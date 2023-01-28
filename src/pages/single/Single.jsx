import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import './single.scss'
const Single = () => {
  return (
    <div className='single'>
      <Sidebar/>
      <div className='singleContainer'>
        <Navbar/>
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <div className="title">Information</div>
            <div className="item">
            <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h2 className="itemTitle">susmita</h2>
                <div className="detailItem">
                <span className="itemKey">Email:</span>
                <span className="itemValue">susmita@gmail.com</span>
                </div>
                <div className="detailItem">
                <span className="itemKey">Phone:</span>
                <span className="itemValue">+977 9813428238</span>
                </div>
                <div className="detailItem">
                <span className="itemKey">Address:</span>
                <span className="itemValue">Bharatpur-12, chitwan</span>
                </div>
                <div className="detailItem">
                <span className="itemKey">Country:</span>
                <span className="itemValue">nepal</span>
                </div>

              </div>
            </div>
          </div>
          <div className="right"></div>
        </div>
        <div className="buttom"></div>
      </div>
    </div>
  )
}

export default Single