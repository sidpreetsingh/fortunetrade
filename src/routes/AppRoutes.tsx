import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/layout/Layout";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import ProductPage from "../pages/Product/ProductPage";
import ProductDetails from "../pages/ProductDetails";
import WhyChooseUs from "../pages/WhyChooseUs/WhyChooseUs";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} />

          <Route path="about" element={<About />} />

          <Route path="products" element={<ProductPage />} />

          <Route
            path="products/:productId"
            element={<ProductDetails />}
          />

          <Route path="contact" element={<Contact />} />

          <Route path="quality" element={<WhyChooseUs />} />

        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;