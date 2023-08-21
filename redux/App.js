import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./features/website/component/Header";
import Footer from "./features/website/component/Footer";
import Dashboard from "./features/website/pages/Dashboard";
import Add_data from "./features/website/pages/Add_data";
import Manage_data from "./features/website/pages/Manage_data";
import Contact from "./features/website/pages/Contact";
import Edit_user from "./features/website/pages/Edit_user";

function App() {
  return (
   <BrowserRouter>
      <Routes>
          <Route path="/" index element={<><Header/><Dashboard/><Footer/></>}></Route>
          <Route path="/add_data" index element={<><Header/><Add_data/><Footer/></>}></Route>
          <Route path="/manage_data" index element={<><Header/><Manage_data/><Footer/></>}></Route>
          <Route path="/edit_user/:id" index element={<><Header/><Edit_user/><Footer/></>}></Route>
          <Route path="/contact"  element={<><Header/><Contact/><Footer/></>}></Route>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
