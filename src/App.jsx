
// import {BrowserRouter , Routes, Route} from 'react-router-dom'
// import Home from './Home'
// import About from './About'
// import Contact from './Contact'

import { RouterProvider} from "react-router-dom"
import router from "./routes"


function App() {
  return (
  //   <BrowserRouter>
  // <Routes>
  //     <Route path='/' element= {<Home />} />
  //     <Route path='/about' element={<About/>}/>
  //     <Route path='/contact' element={<Contact/>}/>
  //   </Routes>
  //   </BrowserRouter>
<RouterProvider router ={router}/>

  )
}

export default App
