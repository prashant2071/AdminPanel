import './home.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar'
import Wiget from '../../components/wiget/Wiget'
import Feature from '../../components/featured/Featured'
import Chart from '../../components/chart/Chart';
import Table from '../../components/table/Table';


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
      <div className="charts">
        <Feature/>
        <Chart/>
      </div>
      <div className="listContainer">
        <div className="listTitle">Latest transaction</div>
        <Table/>
      </div>
      </div>
    </div>
  )
}

export default Home