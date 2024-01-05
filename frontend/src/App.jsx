import { 
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom';

import AddProduct from './components/admin/AddProduct.jsx';
import Shop from './components/shop/Shop.jsx';

import './App.css';
import Status404 from './components/error/Status404.jsx';

function App(props) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Shop />} exact />
        <Route path="/admin/add-product" element={<AddProduct />} exact />
        <Route path="*" element={<Navigate to ="/404" />}/>
        <Route path='/404' element={<Status404 />} />
      </Routes>
    </Router>
  );
}

export default App;
