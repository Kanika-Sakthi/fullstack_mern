//function App(){
//  return(
 //   <>
   //   <h1>hello</h1>
     // <h1>KANIKA</h1>
//    </>
//  )
//}
//export default  App;
import Page from "./component/Page.jsx"
import Login from "./component/Login.jsx";
import AfterLogin from "./component/AfterLogin.jsx";
function App(){
  let login =false;
  return login ? <Login/> : <AfterLogin/>
  }

export default App;