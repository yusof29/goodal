import { useLayoutEffect } from "react";

import { Routes, Route, useLocation } from "react-router-dom";

import AboutLayout from "./routes/AboutLayout";
import HomeLayout from "./routes/HomeLayout";
import ProductsLayout from "./routes/ProductsLayout";
import CartLayout from "./routes/CartLayout";
import ProductItemLayout from "./routes/ProductItemLayout";
import SharedLayout from "./routes/SharedLayout";
import Error from "./pages/Error";

function App() {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return children;
  };

  return (
    <Wrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomeLayout />} />
          <Route path="/about" element={<AboutLayout />} />
          <Route path="/products" element={<ProductsLayout />} />
          <Route path="/products/:id" element={<ProductItemLayout />} />
          <Route path="/cart" element={<CartLayout />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Wrapper>
  );
}

export default App;
