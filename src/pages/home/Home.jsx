import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar'
import Wiget from '../../components/wiget/Wiget'

import './home.scss';
const Home = () => {
  return (
    <div className='home'>
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>
      <div className="wigets">
        <Wiget type="user"/>
        <Wiget type="order"/>
        <Wiget type="earnings"/>
        <Wiget type="balance"/>

      </div>
      </div>
    </div>
  )
}

export default Home