import {NavBarLogin} from '../Login/NavBar/NavBar'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Inicio from './Paginas/Inicio'
import Informacion from './Paginas/Informacion'
import Destacados from './Paginas/Destacados'
import Contacto from './Paginas/Contacto'
function Layout() {
 return (
  <div className="App">
  <BrowserRouter>
  <NavBarLogin/>
      <Routes>
          <Route path='/' element={<Consult_Documentation/>}/>
          <Route path="/Upload_Documentation" element={<Upload_Documentation/>}/>
          <Route path="/Contacto" element={<Add_Student/>}/>
      </Routes>
  </BrowserRouter>
</div>

 )
}
export default Layout