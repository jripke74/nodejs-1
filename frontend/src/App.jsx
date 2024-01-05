import { 
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import AddProduct from './components/admin/AddProduct.jsx';
import Shop from './components/shop/Shop.jsx';

import './App.css';

function App(props) {
  console.log(props.error);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Shop />} exact />
        <Route path="/admin/add-product" element={<AddProduct />} exact />
      </Routes>
    </Router>
  );
}

export default App;
