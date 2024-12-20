import logo from './logo.svg';
import './App.css';
import LoginForm from "./components/LoginForm/LoginForm"
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import SignUp from "./components/SignUp/SignUp";
import Page from './components/page/page.jsx';
import { UserProvider } from './components/context/UserContext.js';
import{useState,useEffect} from 'react'
import ClipLoader from "react-spinners/ClipLoader"
import { IoMdTrendingUp } from "react-icons/io";
import { MdOutlineYoutubeSearchedFor } from "react-icons/md";
// import Popup from 'reactjs-popup';  // Ensure Popup is imported correctly
// import 'reactjs-popup/dist/index.css'; 
import ProfilePage from "./components/Profile/ProfilePage.js";  // Personal details page
function App() {
  // const[loading, setLoading] = useState(false)
  // useEffect(() =>{
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false)
  //   },2000)

  // },[])
  // const override = {
  //   display: "block",
  //   margin: "0 auto",
  // };

  // const color = "#36d7b7";

  return (
    // <div>
    //   {loading? (
    //     <ClipLoader color={color} loading = {loading} css={override} size={150}/>
    //   ) : (
      <UserProvider>
      <Router>
      <Routes>
      <Route path="/" element ={<LoginForm/>}/>
      <Route path="/Page" element={<Page/>}/>
      <Route path="/SignUp" element={<SignUp/>}></Route>
      {/* <PopupGfg/> */}
      <Route path="/" element={<Page />} />
      <Route path="/profile" element={<ProfilePage />} />
      </Routes> 
      </Router>
    </UserProvider>
      // )}
      
// </div> 

);
}
<IoMdTrendingUp/>
// function PopupGfg() {
//   return (
//     <div>
//       <h4>Popup</h4>
//       <Popup trigger={<button>Click to open popup</button>} position="right center">
//         <div></div>
//         <button>Click here</button>
//       </Popup>
//     </div>
//   );
// }
//         //{/* <LoginForm/> */}
//         // {/* <SignUp/> */}
// export {PopupGfg};
export default App;

