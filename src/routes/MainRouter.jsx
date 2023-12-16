import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavbarComponent from '../components/NavbarComponent/NavbarComponent';
import Home from '../pages/Home';
import Category from '../pages/Category';
import Item from '../pages/Item';

const MainRouter = () => {
  return (
    <BrowserRouter>
    <NavbarComponent />
    <Routes>
      <Route path='/' element= {<Home />}/>
      <Route path='/category/:categoryId' element= {<Category />}/>
      <Route path='/item/:id' element= {<Item />}/>
    </Routes>
    </BrowserRouter>
  );
};

export default MainRouter