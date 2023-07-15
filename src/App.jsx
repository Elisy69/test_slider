import { useMediaQuery } from "usehooks-ts";
import ContentContainer from "./Components/ContentContainer";
import ContentContainer2 from "./Components/ContentContainer2";
import Header from "./Components/Header";
import Footer from "/Users/strashevskyelisey/Desktop/coding/TestTasks/scrollTest/src/Components/Footer.jsx";
import MobileSlider from "/Users/strashevskyelisey/Desktop/coding/TestTasks/scrollTest/src/Components/MobileSlider.jsx";
import Slider from "/Users/strashevskyelisey/Desktop/coding/TestTasks/scrollTest/src/Components/Slider.jsx";
function App() {
  const mobile = useMediaQuery("(min-width: 1200px)");
  return (
    <div className="h-full w-full overflow-x-hidden overflow-y-hidden overflow-scroll font-manrope flex flex-col ">
      <Header />
      <ContentContainer />
      {mobile ? <Slider /> : <MobileSlider />}
      <ContentContainer2 />
      <Footer />
    </div>
  );
}

export default App;
