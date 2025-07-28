import React, { Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { AnimatePresence, motion } from "framer-motion";
import "@/index.css";
import Layout from "@/components/organisms/Layout";
import Portfolio from "@/components/pages/Portfolio";
import Services from "@/components/pages/Services";
import About from "@/components/pages/About";
import Home from "@/components/pages/Home";
import Agentforce from "@/components/pages/Agentforce";
import Contact from "@/components/pages/Contact";
import PageLoader from "@/components/atoms/PageLoader";
function App() {
  const location = useLocation();

  const pageTransition = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.3, ease: "easeInOut" }
  };

  return (
    <>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <motion.div {...pageTransition}>
                <Suspense fallback={<PageLoader />}>
                  <Home />
                </Suspense>
              </motion.div>
            } />
            <Route path="/services" element={
              <motion.div {...pageTransition}>
                <Suspense fallback={<PageLoader />}>
                  <Services />
                </Suspense>
              </motion.div>
            } />
            <Route path="/about" element={
              <motion.div {...pageTransition}>
                <Suspense fallback={<PageLoader />}>
                  <About />
                </Suspense>
              </motion.div>
            } />
            <Route path="/portfolio" element={
              <motion.div {...pageTransition}>
                <Suspense fallback={<PageLoader />}>
                  <Portfolio />
                </Suspense>
              </motion.div>
            } />
            <Route path="/agentforce" element={
              <motion.div {...pageTransition}>
                <Suspense fallback={<PageLoader />}>
                  <Agentforce />
                </Suspense>
              </motion.div>
            } />
            <Route path="/contact" element={
              <motion.div {...pageTransition}>
                <Suspense fallback={<PageLoader />}>
                  <Contact />
                </Suspense>
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
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