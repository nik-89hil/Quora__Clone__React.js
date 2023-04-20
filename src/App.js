import './App.css';

import Home from './components/Home/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Signup from './components/Signup/Signup';
import Answer from './components/Answer/Answer';
import Following from './components/Following/Following';
import Spacelist from './components/spaces/Spacelist';

// import Allnotific from './components/Notification/Allnotific';
// import SideNOt from './components/Notification/SideNOt';
import Allnot from './components/Notification/Allnot';
// import SideNOt from './components/Notification/SideNOt';
import SpacesNotification from './components/Notification/SpacesNotification';
import Announcement from './components/Notification/Announcement';
import Subscription from './components/Notification/Subscription';
import Error from './Error';
// import NOtSpace from './components/Notification/NOtSpace';


function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Signup/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/notification/">
        <Route path="All" element={<Allnot/>}/>
        <Route path ="notific-spaces" element={<SpacesNotification/>}/>
        <Route path='Announcements' element={<Announcement/>}/>
        <Route path='Subscription' element={<Subscription/>}/>
      </Route>
      <Route path='/answer' element={<Answer/>}/>
      <Route path='/following' element={<Following/>}/>
      <Route path='/spaces' element ={<Spacelist/>}/>
      <Route path="*" element={<Error/>}/>
     </Routes>
    </BrowserRouter>

    </>

  );
}

export default App;
