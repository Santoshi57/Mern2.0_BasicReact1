
// import {BrowserRouter , Routes, Route} from 'react-router-dom'
// import Home from './Home'
// import About from './About'
// import Contact from './Contact'

// import { RouterProvider} from "react-router-dom"
// import router from "./routes"


// function App() {
//   return (
//   //   <BrowserRouter>
//   // <Routes>
//   //     <Route path='/' element= {<Home />} />
//   //     <Route path='/about' element={<About/>}/>
//   //     <Route path='/contact' element={<Contact/>}/>
//   //   </Routes>
//   //   </BrowserRouter>
// <RouterProvider router ={router}/>

//   )
// }

// export default App

//// *Use State used*

import {useState } from 'react'

// function App () {
//   var resultReturnedFromUseState = useState(0)
//   var firstIndexValue = resultReturnedFromUseState[0]
//   var secondIndexFunction = resultReturnedFromUseState[1]

// return (
//   <>
// <h1>{firstIndexValue}</h1>
// <button onClick={()=> secondIndexFunction(firstIndexValue + 1)}>+</button>

//   </>
// )
// }
// export default App


////*another method for use state

function App(){
  const [count, setCount] = useState(0)

return(
  <>
<h1>{count}</h1>
<button onClick={()=>setCount(count +1)}>+</button>
<button onClick={()=>setCount(count- 1)}>-</button>

  </>
)
}
export default App