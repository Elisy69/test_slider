import { motion } from "framer-motion";
import { images } from "/Users/strashevskyelisey/Desktop/coding/TestTasks/scrollTest/src/constants/sliderImages.js";

function MobileSlider() {
  return (
    <div className="w-full h-[24%] flex flex-col pl-52 mob:pl-10 mt-40 scrollBox">
      <section>
        <h1 className="font-bold font-headers text-[3rem] mob:text-[2rem] mb-16 text-left">
          LOREM IPSUM DOLOR SIT AMET
        </h1>
        <motion.div
          className="flex gap-4 scroll-hidden w-content"
          drag="x"
          dragConstraints={{ right: 0, left: -2000 }}
        >
          {images.map((image) => (
            <img className="h-[26rem]" key={image} src={`${image}`}></img>
          ))}
        </motion.div>
      </section>
    </div>
  );
}

export default MobileSlider;
