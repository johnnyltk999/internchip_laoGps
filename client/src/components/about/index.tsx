import pic from "../../assets/Concept-photo-removebg-preview.png";

const About = () => {
  return (
    <section id="About">
      <div className="max-w-md mx-auto bg-white overflow-hidden md:max-w-7xl pb-[5rem] mt-10 my-4">
        <h1 className="text-center text-3xl font-bold pt-[8rem] pb-8 text-[#1778bb]">
          About Us
        </h1>
        <div className="md:flex">
          <div className="md:w-1/2">
            <img
              className="w-full h-auto object-cover rounded-md"
              src={pic}
              alt="VV tower"
            />
          </div>

          <div className="md:w-1/2 p-8">
            <div className="uppercase tracking-wide text-center text-lg text-[#1778bb] font-semibold ">
              lao gps tracker
            </div>
            <div className="text-lg">
              <p className="mt-2 text-slate-500 indent-8">
                LAO GPS TRACKER.Co.,Ltd is a fast-growing company and a
                significant driver in the IT business in Thailand, highlighting
                the critical importance of leading IT innovation equipment,
                including state-of-the-art services such as auto-tracking
                systems and corporate retail operations. High-performance GPS
                and GPS companies operate in small operations. Suitable for the
                current economy.
              </p>

              <p className="mt-2 text-slate-500 indent-8">
                At present, we have created a dedicated LAO GPS TRACKER.Co.,Ltd
                team to optimize program development to best meet our customer
                needs. We have also developed new features to enhance the
                performance of the GPS Tracker, ensuring fast and accurate
                tracking.
              </p>
            </div>
            <div className="pt-10 font-semibold">
              <a href="#Card">
                <button className="bg-[#1178bb] w-[200px] h-[50px] text-white px-4 py-2 rounded-md hover:bg-sky-700">
                  WHY US ?
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
