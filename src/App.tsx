import {Link, Route, Routes} from "react-router";
import News from "./pages/News.tsx";
import Contact from "./pages/Contact.tsx";
import Home from "./pages/Home.tsx";

function App() {


    return (
    <div>
         <nav>
             <ul>
                 <li>
                     <Link to="/">Home Page</Link>
                 </li>
                 <li>
                     <Link to="/news">New</Link>
                 </li>
                 <li>
                     <Link to="/contacts">Contact</Link>
                 </li>
             </ul>
         </nav>
        <Routes>
            <Route path="/" Component={Home} />
            <Route path="/news" Component={News} />
            <Route path="/contacts" Component={Contact} />
        </Routes>
    </div>
  )
}

export default App
