import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import { images } from "/Users/strashevskyelisey/Desktop/coding/TestTasks/scrollTest/src/constants/sliderImages.js";

gsap.registerPlugin(ScrollTrigger);

function Slider() {
  const main = useRef();
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".box", {
        x: -1000,
        scrollTrigger: {
          pin: "section",
          trigger: "section",
          start: "center center",
          end: "+=3000bottom",
          scrub: 1,
        },
      });
    }, main);
    return () => ctx.revert();
  }, []);

  return (
    <div
      className="w-full h-[24%] flex flex-col pl-52 mob:pl-10 mt-40 scrollBox"
      ref={main}
    >
      <section>
        <h1 className="font-bold font-headers text-[3rem] mob:text-[2rem] mb-16 text-left">
          LOREM IPSUM DOLOR SIT AMET
        </h1>
        <div className="flex gap-4 scroll-hidden ">
          {images.map((image) => (
            <img className="box h-[26rem]" key={image} src={`${image}`}></img>
          ))}
        </div>
      </section>
      <div className="h-[3000px] w-full"></div>
    </div>
  );
}

export default Slider;
