import Marquee from "react-fast-marquee";
import { Link } from "react-router";
import Slider from "react-slick";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { RiArrowDropLeftLine } from "react-icons/ri";
import { RiArrowDropRightLine } from "react-icons/ri";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./Header";
import PopularPosts from "./PopularPost";
import TrendyPost from "./TrendyPost";
import LatestVideos from "./LatestVideos";
import TopPost from "./TopPost";
import Footer from "./Footer";

function Home() {
  const sliderData = [
    {
      id: 1,
      img: "/images/slider-img1.jpg",
      title: "Why I Stopped Using Multiple Monitor",
      desc: "A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind...",
    },
    {
      id: 2,
      img: "/images/slider-img2.jpg",
      title: "Why I Stopped Using Multiple Monitor",
      desc: "A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind...",
    },
    {
      id: 3,
      img: "/images/slider-img3.jpg",
      title: "Why I Stopped Using Multiple Monitor",
      desc: "A Single Monitor Manifesto — Many developers believe multiple monitors improve productivity. Studies have proven it, right? Well, keep in mind...",
    },
  ];

  const NextArrow = ({ onClick }) => (
    <div
      className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white w-[40px] h-[40px] rounded-xl p-2  cursor-pointer z-10"
      onClick={onClick}
    >
      <RiArrowDropRightLine size={24} />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white w-[40px] h-[40px] rounded-xl p-2 cursor-pointer z-10"
      onClick={onClick}
    >
      <RiArrowDropLeftLine size={24} />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <Header />
      <div className="lg:mx-8 sm:mx-6 small:mx-3 mx-1 mt-10">
        {/* buttons  */}
        <Marquee autoFill pauseOnClick>
          <div className="buttons flex items-center w-full gap-5 m-2 bg-[#f5f5f5] h-[68px]">
            <div className="food w-[170px] h-[48px] rounded-xl">
              <Link to={"/featured"}>
                <div className="bg-[#00000033] text-white w-[170px] h-[48px] rounded-xl flex items-center justify-center backdrop-blur-[2px]">
                  #Food
                </div>
              </Link>
            </div>

            <div className="animal w-[170px] h-[48px] rounded-xl">
              <Link to={"/featured"}>
                <div className="bg-[#00000033] text-white w-[170px] h-[48px] rounded-xl flex items-center justify-center backdrop-blur-[2px]">
                  #Animal
                </div>
              </Link>
            </div>
            <div className="car w-[170px] h-[48px] rounded-xl">
              <Link to={"/featured"}>
                <div className="bg-[#00000033] text-white w-[170px] h-[48px] rounded-xl flex items-center justify-center backdrop-blur-[2px]">
                  #Car
                </div>
              </Link>
            </div>
            <div className="sport w-[170px] h-[48px] rounded-xl">
              <Link to={"/featured"}>
                <div className="bg-[#00000033] text-white w-[170px] h-[48px] rounded-xl flex items-center justify-center backdrop-blur-[2px]">
                  #Sport
                </div>
              </Link>
            </div>
            <div className="music w-[170px] h-[48px] rounded-xl">
              <Link to={"/featured"}>
                <div className="bg-[#00000033] text-white w-[170px] h-[48px] rounded-xl flex items-center justify-center backdrop-blur-[2px]">
                  #Music
                </div>
              </Link>
            </div>
            <div className="technology w-[170px] h-[48px] rounded-xl">
              <Link to={"/featured"}>
                <div className="bg-[#00000033] text-white w-[170px] h-[48px] rounded-xl flex items-center justify-center backdrop-blur-[2px]">
                  #Technology
                </div>
              </Link>
            </div>
            <div className="abstract w-[170px] h-[48px] rounded-xl">
              <Link to={"/featured"}>
                <div className="bg-[#00000033] text-white w-[170px] h-[48px] rounded-xl flex items-center justify-center backdrop-blur-[2px]">
                  #Abstract
                </div>
              </Link>
            </div>
          </div>
        </Marquee>
      </div>
      <div className="lg:mx-8 sm:mx-6 small:mx-3 mx-1 mt-10">
        {/* Cards  */}

        <div className="cards grid xl:grid-cols-2 grid-cols-1 gap-5">
          <div className="grid xl:grid-cols-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {/* Card-1  */}

            <div className="card-1 rounded-xl relative w-full md:h-[380px] sm:h-[320px] h-[300px] flex justify-center">
              <div className="w-full">
                <Link to={"/featured"}>
                  <img
                    src="/images/car-img.jpg"
                    alt=""
                    className="rounded-xl w-full object-cover md:h-[380px] sm:h-[320px] h-[300px]"
                  />
                </Link>
              </div>
              <div className="absolute w-[95%] bottom-2 mx-2 py-2 rounded-xl bg-[#FFFFFFBF] backdrop-blur-[10px] px-4 flex flex-col justify-center">
                <h1 className="midlg:text-[18px] 2midlg:text-[16px] 2md:text-sm text-[12px] font-medium">
                  How to Drive a Car Safely
                </h1>
                <p className="midlg:text-[14px] 2midlg:text-[12px] text-[10px] text-[#000000BF] text-justify">
                  Ah, the joy of the open road—it's a good feeling. But if
                  you're new to Driving, you May...
                </p>
              </div>
            </div>

            {/* Card-2  */}

            <div className="card-2 rounded-xl relative w-full md:h-[380px] sm:h-[320px] h-[300px] flex justify-center">
              <div className="w-full">
                <Link to={"/featured"}>
                  <img
                    src="/images/women-img.jpg"
                    alt=""
                    className="rounded-xl w-full object-cover md:h-[380px] sm:h-[320px] h-[300px]"
                  />
                </Link>
              </div>
              <div className="absolute w-[95%] bottom-2 mx-2 py-2 rounded-xl bg-[#FFFFFFBF] backdrop-blur-[10px] px-4 flex flex-col justify-center">
                <h1 className="midlg:text-[18px] 2midlg:text-[16px] 2md:text-sm text-[12px] font-medium">
                  How to Make Dance Music
                </h1>
                <p className="midlg:text-[14px] 2midlg:text-[12px] text-[10px] text-[#000000BF] text-justify">
                  Download torrents from verified or trusted Uploaders. If
                  You're A BitTorrent User Looking...
                </p>
              </div>
            </div>
          </div>

          {/* Image Slider  */}

          <div className="image-slider w-full md:h-[380px] sm:h-[300px] small:h-[250px] 2small:h-[230px] rounded-xl relative">
            <Slider {...settings}>
              {sliderData.map((slide) => (
                <div key={slide.id} className="rounded-xl relative">
                  <div className="w-full object-cover">
                    <Link to={"/featured"}>
                      <img
                        src={slide.img}
                        alt={slide.title}
                        className="rounded-xl w-full object-cover md:h-[380px] sm:h-[300px] small:h-[250px] 2small:h-[230px]"
                      />
                    </Link>
                  </div>
                  <div className="absolute w-[97%] bottom-2 mx-2 py-2 m-auto rounded-xl bg-[#FFFFFFBF] backdrop-blur-[10px] px-5 flex flex-col justify-center">
                    <h1 className="lg:text-[25px] md:text-[20px] sm:text-[14px] font-medium md:font-normal small:text-[12px] text-[10px]">
                      {slide.title}
                    </h1>
                    <p className="midlg:text-[14px] 2midlg:text-[12px] sm:text-[10px] text-[8px] text-[#000000BF] text-justify">
                      {slide.desc}
                    </p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* Popular Posts  */}

        <PopularPosts />

        {/* New Posts  */}

        <div className="new-posts my-10">
          <div className="flex justify-between">
            <div className="w-[136px] flex items-center gap-[6px] text-xl font-medium">
              <div className="w-[4px] h-[10px] rounded-xl bg-[#F81539]"></div>
              New Posts
            </div>
            <div className="show-btn flex items-center gap-[20px]">
              <div className="w-[119px] h-[40px] rounded-xl bg-[#F5F5F5] flex justify-center items-center cursor-pointer shadow-sm hover:shadow-md">
                <Link to={"/new-posts"}>Show All</Link>{" "}
                <RiArrowDropRightLine size={24} />
              </div>
            </div>
          </div>

          {/* New Post Cards  */}

          <div className="new-post-cards grid lg:grid-cols-2 grid-cols-1 gap-8 mt-5">
            {/* Card-1 Start  */}

            <div className="card1 flex small:flex-row flex-col items-center midlg:w-[580px] 2midlg:w-[500px] 2sm:w-[600px]  rounded-xl small:gap-[10px] gap-[6px] shadow-md hover:shadow-lg p-3">
              <div className="sm:w-[340px] small:w-[300px] 2small:w-[270px] small:h-[160px] ">
                <Link to={"/featured"}>
                  <img
                    src="/images/tech-post.png"
                    alt=""
                    className="rounded-xl sm:w-[340px] small:w-[300px] 2small:w-[270px]  small:h-[160px] "
                  />
                </Link>
              </div>
              <div className="flex flex-col small:gap-3 gap-1">
                <h1 className="sm:text-[16px] small:text-[14px] 2small:text-[14px] font-medium text-[#3E3232]">
                  12 Mobile UX Design Trends For 2018
                </h1>
                <p className="sm:text-sm small:text-[12px] 2small:text-[10px] text-[#3E3232BF]">
                  Things move quickly in the mobile app universe. <br /> To
                  succeed in the field of mobile UX design...
                </p>
                <div className="flex">
                  <div className="sm:w-[310px] small:w-[270px] 2small:w-[270px] h-[72px] rounded-xl bg-[#F5F5F5] flex justify-between items-center px-4">
                    <div className="flex items-center gap-[10px]">
                      <Link to={"/featured"}>
                        <img
                          src="/images/Jon.png"
                          alt=""
                          className="small:w-[44px] small:h-[44px] 2small:w-[40px] 2small:h-[40px] rounded-xl"
                        />
                      </Link>
                      <div>
                        <h1 className="small:text-sm 2small:text-[12px] font-medium text-[#3E3232]">
                          Jon Kantner
                        </h1>
                        <p className="small:text-[12px] 2small:text-[10px] text-[#3E3232BF]">
                          September 5 , 2025
                        </p>
                      </div>
                    </div>
                    <div>
                      <MdOutlineBookmarkBorder className="text-[#193154] text-[20px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card-1 End  */}

            {/* Card-2 Start  */}

            <div className="card2 flex small:flex-row flex-col items-center midlg:w-[580px] 2midlg:w-[500px] 2sm:w-[600px]  rounded-xl small:gap-[10px] gap-[6px] shadow-md hover:shadow-lg p-3">
              <div className="sm:w-[340px] small:w-[300px] 2small:w-[270px] small:h-[160px] ">
                <Link to={"/featured"}>
                  <img
                    src="/images/boats.png"
                    alt=""
                    className="rounded-xl sm:w-[340px] small:w-[300px] 2small:w-[270px]  small:h-[160px] "
                  />
                </Link>
              </div>
              <div className="flex flex-col small:gap-3 gap-1">
                <h1 className="sm:text-[16px] small:text-[14px] 2small:text-[14px] font-medium text-[#3E3232]">
                  No boat bottomfish: Jetty fishing on the..
                </h1>
                <p className="sm:text-sm small:text-[12px] 2small:text-[10px] text-[#3E3232BF]">
                  Cast from the rocks to bring home fresh fish tacos <br /> In
                  this iconic spring and summer fishery.
                </p>
                <div className="flex">
                  <div className="sm:w-[310px] small:w-[270px] 2small:w-[270px] h-[72px] rounded-xl bg-[#F5F5F5] flex justify-between items-center px-4">
                    <div className="flex items-center gap-[10px]">
                      <Link to={"/featured"}>
                        <img
                          src="/images/Louis.png"
                          alt=""
                          className="small:w-[44px] small:h-[44px] 2small:w-[40px] 2small:h-[40px] rounded-xl"
                        />
                      </Link>
                      <div>
                        <h1 className="small:text-sm 2small:text-[12px] font-medium text-[#3E3232]">
                          Louis Hoebregts
                        </h1>
                        <p className="small:text-[12px] 2small:text-[10px] text-[#3E3232BF]">
                          September 5 , 2025
                        </p>
                      </div>
                    </div>
                    <div>
                      <MdOutlineBookmarkBorder className="text-[#193154] text-[20px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card-2 End  */}

            {/* Card-3 Start  */}

            <div className="card3 flex small:flex-row flex-col items-center midlg:w-[580px] 2midlg:w-[500px] 2sm:w-[600px]  rounded-xl small:gap-[10px] gap-[6px] shadow-md hover:shadow-lg p-3">
              <div className="sm:w-[340px] small:w-[300px] 2small:w-[270px] small:h-[160px] ">
                <Link to={"/featured"}>
                  <img
                    src="/images/squirrel.png"
                    alt=""
                    className="rounded-xl sm:w-[340px] small:w-[300px] 2small:w-[270px]  small:h-[160px] "
                  />
                </Link>
              </div>
              <div className="flex flex-col small:gap-3 gap-1">
                <h1 className="sm:text-[16px] small:text-[14px] 2small:text-[14px] font-medium text-[#3E3232]">
                  What a Disabled Squirrel Taught Me...
                </h1>
                <p className="sm:text-sm small:text-[12px] 2small:text-[10px] text-[#3E3232BF]">
                  Why it helps to know what it’s like, the Exquisite <br />{" "}
                  Beauty of empathy These days, the wood patio...
                </p>
                <div className="flex">
                  <div className="sm:w-[310px] small:w-[270px] 2small:w-[270px] h-[72px] rounded-xl bg-[#F5F5F5] flex justify-between items-center px-4">
                    <div className="flex items-center gap-[10px]">
                      <Link to={"/featured"}>
                        <img
                          src="/images/James.png"
                          alt=""
                          className="small:w-[44px] small:h-[44px] 2small:w-[40px] 2small:h-[40px] rounded-xl"
                        />
                      </Link>
                      <div>
                        <h1 className="small:text-sm 2small:text-[12px] font-medium text-[#3E3232]">
                          James
                        </h1>
                        <p className="small:text-[12px] 2small:text-[10px] text-[#3E3232BF]">
                          September 5 , 2025
                        </p>
                      </div>
                    </div>
                    <div>
                      <MdOutlineBookmarkBorder className="text-[#193154] text-[20px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card-3 End  */}

            {/* Card-4 Start  */}

            <div className="car4 flex small:flex-row flex-col items-center midlg:w-[580px] 2midlg:w-[500px] 2sm:w-[600px]  rounded-xl small:gap-[10px] gap-[6px] shadow-md hover:shadow-lg p-3">
              <div className="sm:w-[340px] small:w-[300px] 2small:w-[270px] small:h-[160px] ">
                <Link to={"/featured"}>
                  <img
                    src="/images/car-post.png"
                    alt=""
                    className="rounded-xl sm:w-[340px] small:w-[300px] 2small:w-[270px]  small:h-[160px] "
                  />
                </Link>
              </div>
              <div className="flex flex-col small:gap-3 gap-1">
                <h1 className="sm:text-[16px] small:text-[14px] 2small:text-[14px] font-medium text-[#3E3232]">
                  Becoming a Self-Driving Car & Machine...
                </h1>
                <p className="sm:text-sm small:text-[12px] 2small:text-[10px] text-[#3E3232BF]">
                  How I left my full-time job, studied at Udacity, <br /> and
                  landed a job at BMW The past year...
                </p>
                <div className="flex">
                  <div className="sm:w-[310px] small:w-[270px] 2small:w-[270px] h-[72px] rounded-xl bg-[#F5F5F5] flex justify-between items-center px-4">
                    <div className="flex items-center gap-[10px]">
                      <Link to={"/featured"}>
                        <img
                          src="/images/Cassie.png"
                          alt=""
                          className="small:w-[44px] small:h-[44px] 2small:w-[40px] 2small:h-[40px] rounded-xl"
                        />
                      </Link>
                      <div>
                        <h1 className="small:text-sm 2small:text-[12px] font-medium text-[#3E3232]">
                          Cassie Evans
                        </h1>
                        <p className="small:text-[12px] 2small:text-[10px] text-[#3E3232BF]">
                          September 5 , 2025
                        </p>
                      </div>
                    </div>
                    <div>
                      <MdOutlineBookmarkBorder className="text-[#193154] text-[20px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card-4 End  */}

            {/* Card-5 Start  */}

            <div className="car5 flex small:flex-row flex-col items-center midlg:w-[580px] 2midlg:w-[500px] 2sm:w-[600px]  rounded-xl small:gap-[10px] gap-[6px] shadow-md hover:shadow-lg p-3">
              <div className="sm:w-[340px] small:w-[300px] 2small:w-[270px] small:h-[160px] ">
                <Link to={"/featured"}>
                  <img
                    src="/images/designer.png"
                    alt=""
                    className="rounded-xl sm:w-[340px] small:w-[300px] 2small:w-[270px]  small:h-[160px] "
                  />
                </Link>
              </div>
              <div className="flex flex-col small:gap-3 gap-1">
                <h1 className="sm:text-[16px] small:text-[14px] 2small:text-[14px] font-medium text-[#3E3232]">
                  How to Become a Master Designer
                </h1>
                <p className="sm:text-sm small:text-[12px] 2small:text-[10px] text-[#3E3232BF]">
                  Many outsiders believe designers are Unicorns, <br /> Gifted
                  or special in some way. We have an...
                </p>
                <div className="flex">
                  <div className="sm:w-[310px] small:w-[270px] 2small:w-[270px] h-[72px] rounded-xl bg-[#F5F5F5] flex justify-between items-center px-4">
                    <div className="flex items-center gap-[10px]">
                      <Link to={"/featured"}>
                        <img
                          src="/images/Linda.png"
                          alt=""
                          className="small:w-[44px] small:h-[44px] 2small:w-[40px] 2small:h-[40px] rounded-xl"
                        />
                      </Link>
                      <div>
                        <h1 className="small:text-sm 2small:text-[12px] font-medium text-[#3E3232]">
                          Linda
                        </h1>
                        <p className="small:text-[12px] 2small:text-[10px] text-[#3E3232BF]">
                          September 5 , 2025
                        </p>
                      </div>
                    </div>
                    <div>
                      <MdOutlineBookmarkBorder className="text-[#193154] text-[20px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card-5 End  */}

            {/* Card-6 Start  */}

            <div className="car6 flex small:flex-row flex-col items-center midlg:w-[580px] 2midlg:w-[500px] 2sm:w-[600px]  rounded-xl small:gap-[10px] gap-[6px] shadow-md hover:shadow-lg p-3">
              <div className="sm:w-[340px] small:w-[300px] 2small:w-[270px] small:h-[160px] ">
                <Link to={"/featured"}>
                  <img
                    src="/images/music.png"
                    alt=""
                    className="rounded-xl sm:w-[340px] small:w-[300px] 2small:w-[270px]  small:h-[160px] "
                  />
                </Link>
              </div>
              <div className="flex flex-col small:gap-3 gap-1">
                <h1 className="sm:text-[16px] small:text-[14px] 2small:text-[14px] font-medium text-[#3E3232]">
                  This free course can teach you music...
                </h1>
                <p className="sm:text-sm small:text-[12px] 2small:text-[10px] text-[#3E3232BF]">
                  A Berlin-based music software company, just <br /> A free
                  interactive music course that runs right...
                </p>
                <div className="flex">
                  <div className="sm:w-[310px] small:w-[270px] 2small:w-[270px] h-[72px] rounded-xl bg-[#F5F5F5] flex justify-between items-center px-4">
                    <div className="flex items-center gap-[10px]">
                      <Link to={"/featured"}>
                        <img
                          src="/images/Patricia.png"
                          alt=""
                          className="small:w-[44px] small:h-[44px] 2small:w-[40px] 2small:h-[40px] rounded-xl"
                        />
                      </Link>
                      <div>
                        <h1 className="small:text-sm 2small:text-[12px] font-medium text-[#3E3232]">
                          Patricia
                        </h1>
                        <p className="small:text-[12px] 2small:text-[10px] text-[#3E3232BF]">
                          September 5 , 2025
                        </p>
                      </div>
                    </div>
                    <div>
                      <MdOutlineBookmarkBorder className="text-[#193154] text-[20px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card-6 End  */}
          </div>
        </div>
      </div>
      {/* Latest Videos  */}

      <div className="latest-videos bg-[#F5F5F5] my-10 lg:px-8 sm:px-6 small:px-3 px-2 py-1">
        <div className="video-cards">
          <LatestVideos />
        </div>
      </div>

      {/* Trendy Posts  */}

      <div className="trendy-posts lg:mx-8 sm:mx-6 small:mx-3 mx-1">
        <TrendyPost />
      </div>

      <div className="top-posts lg:mx-8 sm:mx-6 small:mx-3 mx-1">
        <TopPost />
      </div>

      {/* Footer Section  */}

      <Footer />
    </>
  );
}

export default Home;
