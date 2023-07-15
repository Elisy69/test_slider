function ContentContainer2() {
  return (
    <section className="flex flex-col justify-center self-start w-full h-[33%] pr-64 mob:pr-0 mt-[14rem] mob:mt-[9rem]">
      <h1 className="pl-52 mob:pl-8 font-bold font-headers text-left text-[3rem] mob:text-[2rem] mb-20">
        UT ALIQUIP EX EA COMMODO CONSEQUAT
      </h1>
      <div className="flex flex-col ">
        <div className="flex mob:flex-col h-1/2">
          <div className="w-[60%] mob:w-full text-center overflow-hidden">
            <img
              className="mb-[-20%] mob:mb-[0] mt-[]"
              src="/src/assets/images/julia-d-FlNTu2Bj4Dg-unsplash (1).jpg"
              alt="img1"
            />
          </div>
          <section className="flex flex-col w-[40%] mob:w-full justify-center items-center gap-4 ml-20 mob:ml-8 mob:mt-10 mob:pr-10 mb-16 mob:mb-0">
            <h2 className="text-[3rem] mob:text-[2rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h2>
            <p className="text-[1.1rem]">
              Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p className="text-[1.1rem] self-start">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum
            </p>
          </section>
        </div>
        <div className="flex mob:flex-col-reverse h-1/2 mt-20 mob:mt-4">
          <section className="flex flex-col mob w-[60%] mob:w-full justify-center items-center gap-4 mob:ml-8 mob:mt-10 mob:pr-10 pl-52 mob:pl-0">
            <h2 className="text-[3rem] mob:text-[2rem]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h2>
            <p className="text-[1.1rem]">
              Incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
              voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p className="text-[1.1rem] self-start">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum
            </p>
          </section>
          <div className="w-[40%] mob:w-full mob:flex mob:justify-center text-center overflow-hidden ml-20 mob:ml-0">
            <img
              className="mb-[-55%] mob:mb-[-30%] mt-[-20%]"
              src="/src/assets/images/taisiia-stupak-viq7xx1boxo-unsplash 1 (1).jpg"
              alt="img2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContentContainer2;
