import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <>
      <div className="mx-auto py-10 px-10 bg-[#1778bb] drop-shadow-md">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 text-white">
          <div className="md:w-2/3 lg:w-[30rem] text-2xl">
            <h1 className="text-3xl font-bold mb-4">LAO GPS TRACKER</h1>
            <div className="flex hover:scale-105 duration-500 cursor-pointer">
              <FontAwesomeIcon
                className="mr-4"
                icon={faLocationDot}
                size="xl"
              />
              <a href="https://goo.gl/maps/7KQAScYriYe1VRxu6" target="_blank">
                <p className="text-xl leading-6 ">
                  LAO GPS TRACKER.CO.,LTD Phonesunuan Rd, Dongpalan Village,
                  Sisattanak District, Vientiane capital Lao P.D.R
                </p>
              </a>
            </div>
            <div className="flex pt-5">
              <FontAwesomeIcon className="mr-4" icon={faPhone} size="xl" />
              <p className="text-xl leading-6">+856 (21) 698 999</p>
            </div>
          </div>

          <div className="md:w-2/3 lg:w-[30rem]">
            <h1 className="text-3xl font-bold mb-4">ABOUT THE COMPANY</h1>
            <p className="text-xl leading-6 ">
              At present, we have created a dedicated LAO GPS TRACKER.Co.,Ltd
              team to optimize program development to best meet our customer
              needs. We have also developed new features to enhance the
              performance of the GPS Tracker, ensuring fast and accurate
              tracking.
            </p>
            <div className="flex mt-6 space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61550269443088"
                target="_blank"
              >
                <FontAwesomeIcon
                  className="hover:scale-125 duration-500 cursor-pointer"
                  icon={faFacebook}
                  size="2x"
                />
              </a>
              <a href="https://wa.me/2028260606" target="_blank">
                <FontAwesomeIcon
                  className="hover:scale-125 duration-500 cursor-pointer"
                  icon={faWhatsapp}
                  size="2x"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1778bb] text-white text-center font-semibold">
        <p>COPYRIGHT © 2023 BY LAO GPS TRACKER CO.,LTD</p>
      </div>
    </>
  );
};

export default Footer;
