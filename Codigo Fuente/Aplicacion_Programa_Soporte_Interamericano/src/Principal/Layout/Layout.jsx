import {NavBarLogin} from '../../Login/NavBar/NavBar'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Add_Student from '../Add_Student/Add_Student'
import Consult_Documentation  from '../Consult_Documentation/Consult_Documentation'
import Upload_Documentation from '../Upload_Documentation/Upload_Documentation'
import { SideBard } from './Sidebar/Sidebard'
function Layout() {
 return (
    <>
    <NavBarLogin/>
    <BrowserRouter>
    <div className="App">
  <div className='d-flex'>
    <div className=''>
    <SideBard/>
    </div>
    <div className='container'>
 <Routes>
    <Route path='/' element={<Consult_Documentation/>}/>
    <Route path="/Upload_Documentation" element={<Upload_Documentation/>}/>
    <Route path="/Add_Student" element={<Add_Student/>}/>
</Routes> 
    </div>
  </div>
</div>
</BrowserRouter>
</>
 )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <Layout/>
    </React.StrictMode>

)

export default Layout