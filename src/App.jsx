import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Layout from "@/components/organisms/Layout";
import Home from "@/components/pages/Home";
import Services from "@/components/pages/Services";
import About from "@/components/pages/About";
import Contact from "@/components/pages/Contact";
import Agentforce from "@/components/pages/Agentforce";
import Portfolio from "@/components/pages/Portfolio";
function App() {
  return (
    <>
      <Layout>
<Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/agentforce" element={<Agentforce />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        style={{ zIndex: 9999 }}
      />
    </>
  );
}

export default App;