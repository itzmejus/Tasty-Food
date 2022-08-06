import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import CartPage from "./components/CartPage";
import CartSideOffcanvasMenu from "./components/CartSideOffcanvasMenu";
import CheckOutPage from "./components/CheckOutPage";
import FoodsList from "./components/FoodsList";
import Cart from "./pages/Cart"; 
import CartItems from "./pages/CartItems";
import HomePage from "./pages/HomePage";
import Navbar from "./pages/Navbar";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          {/* <Route path="/cartSidebar" element={<CartSideOffcanvasMenu />} /> */}
          {/* <Route path="/cart" element={<CartItems />} /> */}
          <Route path="/foods" element={<FoodsList />} />
          <Route path="*" element={<Navigate to="/notFound" />} />
          <Route path="/notFound" element={<NotFound />} />
          {/* <Route path="/products/:productId" element={<CartItems />} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
