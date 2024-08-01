import Typed from "react-typed";
import videos from "../../assets/pricing_m01_pricing_hero.mp4";

const Content = () => {
  return (
    <>
      <section id="Home">
        <div className="mt-15">
          <video
            src={videos}
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover z-[-1] pt-8
  "
          />
          <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center pt-20">
            <p className="text-[#1178bb] font-bold md:text-3xl sm:text-2xl text-xl p-2">
              TRACK ANYTHING EVERYWHERE WITH
            </p>
            <h1 className="md:text-7xl  text-4xl font-bold md:py-6 ">
              <span className="text-[#1178bb]">LAO </span>
              <span className="text-[#f15d31]">GPS </span>
              <span className="text-[#fcb114]">TRACKER</span>
            </h1>
            <div className=" justify-center items-center">
              <p className="md:text-3xl sm:text-2xl text-xl font-bold py-4">
                Empowering Journeys, One Coordinate at a Time: Navigating the
                Boundless Possibilities of Tomorrow.
              </p>
              <Typed
                className="md:text-3xl sm:text-2xl text-xl font-bold md:pl-4 pl-2 text-[#1778bb]"
                strings={[
                  "Fleet Management",
                  "GPS Tracking System",
                  "Web Solutions",
                  "Hosting Solutions",
                ]}
                typeSpeed={20}
                backSpeed={140}
                loop
              />
            </div>
            {/* <p className="md:text-lg text-md font-bold text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
              maxime, veniam asperiores et dolor obcaecati illo tempora eos
              reprehenderit cupiditate.
            </p> */}
            <span>
              <a
                href="https://office.laogpstracker.com/main/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-[#1178bb] w-[200px] h-[50px] rounded-md font-medium my-6 mx-auto py-2 text-white hover:bg-sky-700">
                  Get Started
                </button>
              </a>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
