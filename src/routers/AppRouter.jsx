import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Posts from "../pages/Posts";
import About from "../pages/About";
import CtaForm from "../pages/CTAForm";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/about" element={<About />} />
        <Route path="/cta" element={<CtaForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
