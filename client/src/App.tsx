import Navbar from "./components/Navbar/index";
import Content from "./components/hero/index";
import Newsletter from "./components/newsletter";
import Cards from "./components/cards";
import Platform from "./components/Platform/index.tsx";
import About from "./components/about/index";
import SlideBar from "./components/slideBar";
import Products from "./components/products";
import Footer from "./components/footer/index";

function App() {
  return (
    <>
      <div className="">
        <Navbar></Navbar>
        <Content></Content>
        <Newsletter></Newsletter>
        <About></About>
        <Cards></Cards>
        <Platform></Platform>
        <Products></Products>
        <SlideBar></SlideBar>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
