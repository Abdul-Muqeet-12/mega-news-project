import { MdOutlineBookmarkBorder } from "react-icons/md";
import { Link } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { FaPlus, FaRegNewspaper, FaRegStar, FaUserEdit } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";

export default function AboutUs() {
  return (
    <>
      <Header />

      <div className="routing lg:mx-8 sm:mx-6 small:mx-6 mx-6 mt-10 flex items-center gap-3">
        <div className="md:text-sm small:text-[12px] 2small:text-[10px] text-[#3E3232] cursor-pointer">
          Home
        </div>
        <div>
          <img
            src="/images/icon.png"
            alt=""
            className="md:w-[8px] md:h-[12px] small:w-[7px] small:h-[10px] 2small:w-[7px] 2small:h-[8px]"
          />
        </div>
        <div className="md:text-sm small:text-[12px] 2small:text-[10px] text-[#3E323280] cursor-pointer">
          About Us
        </div>
      </div>

      <div className="lg:mx-8 sm:mx-6 small:mx-6 mx-6 mt-10">
        <div className=" bg-[#F5F5F5] rounded-xl p-3">
          <h1 className="md:text-[24px] small:text-[20px]">
            We pay attention to your needs and do the best design.
          </h1>
          <div className="video-text flex lg:flex-row flex-col gap-10 mt-3">
            <div className="text md:text-[16px] text-sm text-[#3E3232]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae
              congue mauris rhoncus aenean vel elit scelerisque. In egestas erat
              imperdiet sed euismod nisi porta lorem mollis. Morbi tristique
              senectus et netus. Mattis pellentesque id nibh tortor id aliquet
              lectus proin. Sapien faucibus et molestie ac feugiat sed lectus
              vestibulum. Ullamcorper velit sed ullamcorper morbi tincidunt
              ornare massa eget. Dictum varius duis at consectetur lorem. Nisi
              vitae suscipit tellus mauris a diam maecenas sed enim. Velit ut
              tortor pretium viverra suspendisse potenti nullam. Et molestie ac
              feugiat sed lectus. Non nisi est sit amet facilisis magna.
              Dignissim diam quis enim lobortis scelerisque fermentum. Odio ut
              enim blandit volutpat maecenas volutpat. Ornare lectus sit amet
              est placerat in egestas erat.
            </div>
            <div className="video">
              <div className="relative lg:w-[480px] lg:h-[300px]">
                <Link to={"/featured"}>
                  <video
                    src="/images/nature-video.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                  ></video>
                </Link>
                <div className="sm:w-[90px] sm:h-[90px] small:w-[70px] small:h-[70px] 2small:w-[50px] 2small:h-[50px] rounded-full absolute small:top-1/2 small:left-1/2 2small:top-20 2small:right-25 -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-[#FFFFFFBF] flex justify-center items-center">
                  <img
                    src="/images/play.png"
                    alt=""
                    className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] small:w-[30px] small:h-[30px] 2small:w-[25px] 2small:h-[25px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
