import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid, faApple } from "@fortawesome/free-brands-svg-icons";
import pic from "../../assets/plaform.png";
const Platform = () => {
  return (
    <>
      <div className="max-w-md mx-auto bg-white overflow-hidden md:max-w-7xl pb-[5rem] mt-10 my-4">
        <h1 className="text-center text-3xl font-bold py-[8rem] text-[#1778bb]">
          Lao Gps Tracker Platform
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
                LAO GPS TRACKER.Co.,Ltd is a platform for personal task
                management that helps you efficiently organize activities and
                tasks. What makes it interesting is that you can utilize this
                platform both on your computer and mobile devices.
              </p>

              <p className="mt-2 text-slate-500 indent-8">
                The Lao GPS Tracker has been meticulously engineered to function
                flawlessly on various devices, spanning from desktop computers
                to smartphones. Through its responsive design, users can
                conveniently access the platform no matter where they are or
                which device they prefer. This adaptability ensures that you
                stay connected to your tracked assets effortlessly, whether
                you're at your office desk or out in the field.
              </p>
            </div>
            <div className="flex gap-4 pt-10 font-semibold">
              <button className="bg-[#1178bb] w-[200px] h-[50px] text-white px-4 py-2 rounded-md hover:bg-sky-700">
                <FontAwesomeIcon className="mr-2" icon={faApple} size="xl" />
                IOS
              </button>
              <button className="bg-[#1178bb] w-[200px] h-[50px] text-white px-4 py-2 rounded-md hover:bg-sky-700">
                <FontAwesomeIcon className="mr-2" icon={faAndroid} size="xl" />
                ANDROID
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Platform;
