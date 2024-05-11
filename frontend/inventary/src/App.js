import { BrowserRouter,Route,Routes } from "react-router-dom";
import Delete from './components/Delete'
import Home from './components/Home'
import Manage from './components/Manage'
import Read from './components/Read'

const App=()=>{
 return(
  <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/*' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/create' element={<Manage/>}/>
      <Route path='/update' element={<Manage/>}/>
      <Route path='/delete' element={<Delete/>}/>
      <Route path='/read' element={<Read/>}/>
    </Routes>
    </BrowserRouter>
  </div>
 )
}
export default App;