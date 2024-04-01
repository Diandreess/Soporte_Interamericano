import {Link} from 'react-router-dom'
import './Style/SideBard.css';
const HanddleClick=()=>{
    document.querySelector("#sidebar").classList.toggle("expand");
}
export const SideBard = ()=>{
    return (
        <div className="wrapper">
        <aside id="sidebar" className='bgSideBard'>
            <div className="d-flex">
                <button className="toggle-btn" type="button" id="btnHamburger" onClick={HanddleClick}>
                    <i className="lni lni-grid-alt"></i>
                </button>
            </div>
            <ul className="sidebar-nav">
            <li className='sidebar-item '>
                <span className='sidebar-title'>
                <i className='lni lni-pencil-alt'></i> 
                Students </span>
            </li>
                <hr/>
                <li className="sidebar-item ">
                    <Link to="/" className="sidebar-link">
                        <i className="lni lni-consulting"></i>
                        <span>Consult Documentation</span>
                    </Link>
                </li>
                <li className="sidebar-item">
                    <Link to="/Upload_Documentation" className="sidebar-link">
                        <i className="lni lni-upload"></i>
                        <span>Upload Documentation</span>
                    </Link>
                </li>
                <li className='sidebar-item '>
                <span className='sidebar-title'>
                <i className='lni lni-pencil-alt '></i> 
                Administration </span>
                </li>
                <hr/>
                <li className="sidebar-item">
                    <Link to="/Add_Student" className="sidebar-link">
                        <i className="lni lni-circle-plus"></i>
                        <span>Add Student</span>
                    </Link>

                </li>
            </ul>
            
            

            <div className="sidebar-footer">
                <Link to="#" className="sidebar-link">
                    <i className="lni lni-exit"></i>
                    <span>Logout</span>
                </Link>
            </div>
        </aside>
    </div>
        )
}