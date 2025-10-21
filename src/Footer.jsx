import { FaEnvelope } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router";

function Footer() {
  return (
    <>
      <div className="footer md:grid md:grid-cols-2 flex flex-col-reverse my-5">
        <div className="section-1 bg-[#F5F5F5] rounded-r-[50px] p-5 lg:pl-12">
          <div className="grid sm:grid-cols-2 grid-cols-1 lg:gap-6 md:gap-3 gap-3">
            <div className="mega-news">
              <div className="flex items-center gap-[6px] lg:text-xl md:text-lg sm:text-[16px] text-sm font-medium text-[#3E3232] mb-3">
                <div className="w-[4px] h-[10px] rounded-xl bg-[#F81539]"></div>
                Mega News
              </div>
              <div className="md:text-sm sm:text-[12px] text-[10px] text-justify text-[#3E3232BF] sm:h-[200px] overflow-ellipsis overflow-hidden">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
                congue mauris rhoncus aenean vel elit scelerisque. In egestas
                erat imperdiet sed euismod nisi porta lorem mollis. Morbi
                tristique senectus et netus. Mattis pellentesque id nibh tortor
                id aliquet lectus proin
              </div>
            </div>

            <div className="categories lg:ml-10 md:ml-6 sm:ml-20">
              <div className="flex items-center gap-[6px] lg:text-xl md:text-lg sm:text-[16px] text-sm font-medium text-[#3E3232] mb-3">
                <div className="w-[4px] h-[10px] rounded-xl bg-[#F81539]"></div>
                Categories
              </div>
              <div className="ml-3">
                <ul className="flex sm:flex-col flex-wrap gap-3 text-[#3E3232] md:text-[12px] sm:text-[10px] text-[9px]">
                  <li>
                    <a href="#">Culture</a>
                  </li>
                  <li>
                    <a href="#">Fashion</a>
                  </li>
                  <li>
                    <a href="#">Featured</a>
                  </li>
                  <li>
                    <a href="#">Food</a>
                  </li>
                  <li>
                    <a href="#">Healthy Living</a>
                  </li>
                  <li>
                    <a href="#">Technology</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="newsletters">
              <div className="flex items-center gap-[6px] lg:text-xl md:text-lg sm:text-[16px] text-sm font-medium text-[#3E3232] mb-3">
                <div className="w-[4px] h-[10px] rounded-xl bg-[#F81539]"></div>
                Newsletters
              </div>
              <div className="lg:w-[260px] lg:h-[45px] md:w-[180px] md:h-[40px] small:w-[200px] small:h-[38px] 2small:w-[160px] 2small:h-[38px] bg-white flex items-center justify-between rounded-xl px-3">
                <input
                  type="email"
                  placeholder="Write Your Email .."
                  className="focus:outline-none small:placeholder:text-[12px] 2small:placeholder:text-[10px] placeholder:text-[#3E3232BF] small:text-[12px] 2small:text-[10px] text-[#3E3232BF]"
                />
                <FaEnvelope className="text-[#3E3232BF] lg:text-[20px] md:text-[16px]" />
              </div>
            </div>

            <div className="social lg:ml-10 md:ml-4 sm:ml-12">
              <div className="flex items-center gap-[6px] lg:text-xl md:text-lg sm:text-[16px] text-sm font-medium text-[#3E3232] mb-3">
                <div className="w-[4px] h-[10px] rounded-xl bg-[#F81539]"></div>
                Social Network
              </div>
              <div className="links flex items-center lg:gap-3 md:gap-1 small:gap-2 2small:gap-1">
                <button className="small:w-[120px] h-[40px] 2small:w-[90px] small:text-sm 2small:text-[10px] font-medium rounded-xl cursor-pointer shadow-sm hover:shadow-md pt-[10px] pb-[10px] small:pr-[24px] 2small:pr-[15px] pl-[16px] text-[#FFFFFF] flex items-center justify-center gap-[4px] bg-linear-to-r from-[#FF7563] to-[#F45C9F]">
                  <FaInstagram className="text-[#FFFFFF] small:text-sm 2small:text-[10px]" />
                  Instagram
                </button>
                <button className="small:min-w-[40px] small:min-h-[40px] 2small:min-w-[35px] 2small:min-h-[35px] rounded-xl cursor-pointer shadow-sm hover:shadow-md flex items-center justify-center text-[#FFFFFF] bg-linear-to-r from-[#67C9F5] to-[#2CA5E0]">
                  <FaTwitter className="small:text-[16px] 2small:text-sm" />
                </button>
              </div>
            </div>
          </div>

          <div className="footer-bar flex justify-between mt-10 rounded-xl bg-[#3E32320D] pt-[8px] pb-[8px] pr-[12px] pl-[12px] mb-5">
            <div className="text-[#3E3232BF] lg:text-[12px] md:text-[10px] small:text-[12px] 2small:text-[8px]">
              Privacy Policy | Terms & Conditions
            </div>
            <div className=" text-[#3E3232BF] lg:text-[12px] md:text-[10px] small:text-[12px] 2small:text-[8px]">
              All Copyright (C) 2022 Reserved
            </div>
          </div>
        </div>

        <div className="section-2 grid grid-cols-2 p-5">
          <div className="comments flex flex-col lg:gap-5 md:gap-3 gap-3">
            <div className="flex items-center gap-[6px] lg:text-xl md:text-lg sm:text-[16px] text-sm font-medium text-[#3E3232]">
              <div className="w-[4px] h-[10px] rounded-xl bg-[#F81539]"></div>
              New Comments
            </div>
            <div className="com-1 bg-[#F5F5F5] rounded-xl p-[16px] flex flex-col md:gap-[8px] small:gap-[6px] 2small:gap-[4px] h-[75px]">
              <h1 className="lg:text-[16px] md:text-sm 2small:text-sm font-medium text-[#3E3232]">
                Ellsmartx
              </h1>
              <p className="lg:text-[12px] md:text-[10px] small:text-[12px] 2small:text-[10px] text-[#3E3232BF]">
                How nice this look I feel delicious
              </p>
            </div>

            <div className="com-2 bg-[#F5F5F5] rounded-xl p-[16px] flex flex-col md:gap-[8px] small:gap-[6px] 2small:gap-[4px] h-[75px]">
              <h1 className="lg:text-[16px] md:text-sm 2small:text-sm font-medium text-[#3E3232]">
                Cassia
              </h1>
              <p className="lg:text-[12px] md:text-[10px] small:text-[12px] 2small:text-[10px] text-[#3E3232BF]">
                Take a rest, i'll be cheer up again
              </p>
            </div>

            <div className="com-3 bg-[#F5F5F5] rounded-xl p-[16px] flex flex-col md:gap-[8px] small:gap-[6px] 2small:gap-[4px] h-[75px]">
              <h1 className="lg:text-[16px] md:text-sm 2small:text-sm font-medium text-[#3E3232]">
                Amanda
              </h1>
              <p className="lg:text-[12px] md:text-[10px] small:text-[12px] 2small:text-[10px] text-[#3E3232BF]">
                You were stunning today, jan!
              </p>
            </div>

            <div className="com-4 bg-[#F5F5F5] rounded-xl p-[16px] flex flex-col md:gap-[8px] small:gap-[6px] 2small:gap-[4px] h-[75px]">
              <h1 className="lg:text-[16px] md:text-sm 2small:text-sm font-medium text-[#3E3232]">
                Denis Simonassi
              </h1>
              <p className="lg:text-[12px] md:text-[10px] small:text-[12px] 2small:text-[10px] text-[#3E3232BF]">
                It was a great match today Janzi!
              </p>
            </div>
          </div>

          <div className="follow ml-2">
            <div className="flex items-center gap-[6px] lg:text-xl md:text-[16px] sm:text-[16px] small:text-sm 2small:text-[12px] font-medium text-[#3E3232] mb-6">
              <div className="w-[4px] h-[10px] rounded-xl bg-[#F81539]"></div>
              Follow on Instagram
            </div>
            <div className="images grid small:grid-cols-3 grid-cols-2 small:gap-5 2small:gap-4">
              <div className="img-1 lg:w-[80px] lg:h-[80px] md:w-[60px] md:h-[60px] w-[70px] h-[70px] rounded-xl">
                <Link to={"/featured"}>
                  <img
                    src="/images/car.png"
                    alt=""
                    className="lg:w-[80px] lg:h-[80px] md:w-[60px] md:h-[60px] w-[70px] h-[70px] rounded-xl object-cover"
                  />
                </Link>
              </div>

              <div className="img-2 lg:w-[80px] lg:h-[80px] md:w-[60px] md:h-[60px] w-[70px] h-[70px] rounded-xl">
                <Link to={"/featured"}>
                  <img
                    src="/images/animal.jpg"
                    alt=""
                    className="lg:w-[80px] lg:h-[80px] md:w-[60px] md:h-[60px] w-[70px] h-[70px] rounded-xl object-cover"
                  />
                </Link>
              </div>

              <div className="img-3 lg:w-[80px] lg:h-[80px] md:w-[60px] md:h-[60px] w-[70px] h-[70px] rounded-xl">
                <Link to={"/featured"}>
                  <img
                    src="/images/footer-tech.png"
                    alt=""
                    className="lg:w-[80px] lg:h-[80px] md:w-[60px] md:h-[60px] w-[70px] h-[70px] rounded-xl object-cover"
                  />
                </Link>
              </div>

              <div className="img-4 lg:w-[80px] lg:h-[80px] md:w-[60px] md:h-[60px] w-[70px] h-[70px] rounded-xl">
                <Link to={"/featured"}>
                  <img
                    src="/images/food.png"
                    alt=""
                    className="lg:w-[80px] lg:h-[80px] md:w-[60px] md:h-[60px] w-[70px] h-[70px] rounded-xl object-cover"
                  />
                </Link>
              </div>

              <div className="img-5 lg:w-[80px] lg:h-[80px] md:w-[60px] md:h-[60px] w-[70px] h-[70px] rounded-xl">
                <Link to={"/featured"}>
                  <img
                    src="/images/footer-music.png"
                    alt=""
                    className="lg:w-[80px] lg:h-[80px] md:w-[60px] md:h-[60px] w-[70px] h-[70px] rounded-xl object-cover"
                  />
                </Link>
              </div>

              <div className="img-6 lg:w-[80px] lg:h-[80px] md:w-[60px] md:h-[60px] w-[70px] h-[70px] rounded-xl">
                <Link to={"/featured"}>
                  <img
                    src="/images/footer-dance.png"
                    alt=""
                    className="lg:w-[80px] lg:h-[80px] md:w-[60px] md:h-[60px] w-[70px] h-[70px] rounded-xl object-cover"
                  />
                </Link>
              </div>

              <div className="img-7 lg:w-[80px] lg:h-[80px] md:w-[60px] md:h-[60px] w-[70px] h-[70px] rounded-xl">
                <Link to={"/featured"}>
                  <img
                    src="/images/footer-animal.png"
                    alt=""
                    className="lg:w-[80px] lg:h-[80px] md:w-[60px] md:h-[60px] w-[70px] h-[70px] rounded-xl object-cover"
                  />
                </Link>
              </div>

              <div className="img-8 lg:w-[80px] lg:h-[80px] md:w-[60px] md:h-[60px] w-[70px] h-[70px] rounded-xl">
                <Link to={"/featured"}>
                  <img
                    src="/images/footer-club.png"
                    alt=""
                    className="lg:w-[80px] lg:h-[80px] md:w-[60px] md:h-[60px] w-[70px] h-[70px] rounded-xl object-cover"
                  />
                </Link>
              </div>

              <div className="img-9 lg:w-[80px] lg:h-[80px] md:w-[60px] md:h-[60px] w-[70px] h-[70px] rounded-xl small:inline-block 2small:hidden">
                <Link to={"/featured"}>
                  <img
                    src="/images/latest-sport.png"
                    alt=""
                    className="lg:w-[80px] lg:h-[80px] md:w-[60px] md:h-[60px] w-[70px] h-[70px] rounded-xl object-cover"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
