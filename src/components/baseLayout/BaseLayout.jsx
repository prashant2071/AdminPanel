import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import './base.scss';
const BaseLayout = () => {
  return (
    <div className="base">
        <Sidebar/>
        <div className="baseContainer">
        <Navbar/>
        </div>
    </div>
  )
}

export default BaseLayout