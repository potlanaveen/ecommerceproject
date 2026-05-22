import { Route,Routes,HashRouter} from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Category from './pages/Category';
import Collections from './pages/Collections';
import Contact from './pages/Contact';

function App() {
  const {drawer} = useSelector(state => state.drawer);
  return (
    <div>
      <HashRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='detail/:id' element={<Detail/>}/>
        <Route path='category' element={<Category/>}/>
        <Route path='collections' element={<Collections/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
      {drawer && <Cart/>}
      <Footer/>
      </HashRouter>
    </div>
  )
}

export default App
