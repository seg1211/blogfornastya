import GlobalStyle from './globablStyles'
import Blog from './pages/Blog'
import { useLocation } from 'react-router-dom';
import SinglePost from './pages/SinglePost';
import Landing from './pages/Landing';
import GeneralNav from './components/Navbar/Nav/GeneralNav'; 
import {BrowserRouter as Router, 
  Routes, 
  Route
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
function App() {
  const location = useLocation();
  return (<>
    <GlobalStyle/>
      <GeneralNav/>
      <AnimatePresence>
      <Routes location={location} key={location.key}>
      <Route path="/" element={ <Landing/>} />
      <Route path="/blog" element={ <Blog/>} />
      <Route path='/blog/:slug' element={<SinglePost/>}/>
      </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
