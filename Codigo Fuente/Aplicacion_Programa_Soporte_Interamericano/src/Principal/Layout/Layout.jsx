import {NavBarLogin} from '../../Login/NavBar/NavBar'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Add_Student from '../Add_Student/Add_Student'
import Consult_Documentation  from '../Consult_Documentation/Consult_Documentation'
import Upload_Documentation from '../Upload_Documentation/Upload_Documentation'
function Layout() {
 return (
  <div className="App">
  <BrowserRouter>
  <NavBarLogin/>
      {/* <Routes>
          <Route path='/' element={<Consult_Documentation/>}/>
          <Route path="/Upload_Documentation" element={<Upload_Documentation/>}/>
          <Route path="/Add_Student" element={<Add_Student/>}/>
      </Routes> */}
      <Add_Student/>
  </BrowserRouter>
</div>

 )
}
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    <Layout/>
    </React.StrictMode>
)

export default Layout