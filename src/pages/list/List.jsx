import './list.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar';
import Datatables from '../../components/datatables/Datatables';
function List() {
  return (
    <div className='list'>
      <Sidebar/>
      <div className="listContainer">
      <Navbar/>
      <Datatables/>
      </div>
    </div>
  )
}

export default List;