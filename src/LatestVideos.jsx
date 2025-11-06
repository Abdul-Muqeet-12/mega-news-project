import Slider from "react-slick";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import { Link } from "react-router";

function LatestVideos() {
  const posts = [
    {
      id: 1,
      img: "/public/latest-sport.png",
      title: "5 reasons why you should wrap...",
      desc: "So, you finally went to your first boxing class and learned the basics of the sport. You also learned that it’s recommended to wrap your hands before putting on the gloves. But there are times when you just don’t feel like wrapping them and you wonder why you even need them.",
    },
    {
      id: 2,
      img: "/public/latest-music.png",
      title: "Music Genre Classification with...",
      desc: "A Guide to analyzing Audio/Music signals in Python — Music is like a mirror, and it tells people a lot about who you are and what you care about, whether you like it or not. You’ve read all your free memberonly stories, become a member to get unlimited access.",
    },
    {
      id: 3,
      img: "/public/trendy-food.png",
      title: "5 reasons why you should wrap...",
      desc: "So, you finally went to your first boxing class and learned the basics of the sport. You also learned that it’s recommended to wrap your hands before putting on the gloves. But there are times when you just don’t feel like wrapping them and you wonder why you even need them.",
    },
    {
      id: 4,
      img: "/public/trendy-tech.png",
      title: "Music Genre Classification with...",
      desc: "A Guide to analyzing Audio/Music signals in Python — Music is like a mirror, and it tells people a lot about who you are and what you care about, whether you like it or not. You’ve read all your free memberonly stories, become a member to get unlimited access.",
    },
  ];

  const NextArrow = ({ onClick }) => (
    <div
      className="w-[40px] h-[40px] rounded-xl bg-[#3E32320D] flex justify-center items-center cursor-pointer shadow-sm hover:shadow-md absolute right-0 top-[-30px] -translate-y-1/2 z-10"
      onClick={onClick}
    >
      <RiArrowDropRightLine size={24} />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="w-[40px] h-[40px] rounded-xl bg-[#3E32320D] flex justify-center items-center cursor-pointer shadow-sm hover:shadow-md absolute right-16 top-[-30px] -translate-y-1/2 z-10"
      onClick={onClick}
    >
      <RiArrowDropLeftLine size={24} />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 2,
    slidesPerRow: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="popular-posts mt-15 relative">
      <div className="flex justify-between mb-5">
        <div className="w-[136px] flex items-center gap-[6px] text-xl font-medium">
          <div className="w-[4px] h-[10px] rounded-xl bg-[#F81539]"></div>
          Latest Videos
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-10">
        <div className="mt-2 relative md:w-[580px] md:h-[350px] sm:w-[500px] sm:h-[320px] small:w-[460px] small:h-[300px] 2small:w-[300px] 2small:h-[210px]">
          <Link to={"/featured"}>
            <video
              src="/public/nature-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className=""
            ></video>
          </Link>
          <div className="sm:w-[90px] sm:h-[90px] small:w-[70px] small:h-[70px] 2small:w-[50px] 2small:h-[50px] rounded-full absolute small:top-1/2 small:left-1/2 2small:top-20 2small:right-25 -translate-x-1/2 -translate-y-1/2 cursor-pointer bg-[#FFFFFFBF] flex justify-center items-center">
            <img
              src="/public/play.png"
              alt=""
              className="w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] small:w-[30px] small:h-[30px] 2small:w-[25px] 2small:h-[25px]"
            />
          </div>
          <div className="absolute md:bottom-8 small:bottom-12 2small:bottom-11 mx-2 py-2 rounded-xl bg-[#FFFFFFBF] backdrop-blur-[10px] px-4 flex flex-col justify-center">
            <h1 className="midlg:text-[18px] 2midlg:text-[16px] 2md:text-sm small:text-[12px] 2small:text-[9px] font-medium">
              How Music Affects Your Brain (Plus 11 Artists To At Work)
            </h1>
            <p className="midlg:text-[14px] 2midlg:text-[12px] small:text-[10px] 2small:text-[6px] text-[#000000BF] text-justify">
              You’ve read all your free member-only stories, become a member to
              get unlimited access. Your membership fee supports the voices you
              want to hear more from.
            </p>
          </div>
        </div>

        <Slider {...settings}>
          {posts.map((post) => (
            <div key={post.id} className="px-2 grid grid-rows-2 gap-4">
              <div className="mb-6 sm:w-[488px] sm:h-[160px] shadow-md hover:shadow-lg rounded-xl flex p-3 gap-2 bg-white">
                <div>
                  <div className="sm:w-[140px] sm:h-[140px] small:w-[120px] small:h-[120px] 2small:w-[120px] 2small:h-[120px] rounded-xl">
                    <Link to={"/featured"}>
                      <img
                        src={post.img}
                        alt={post.title}
                        className="rounded-xl w-full h-full object-cover"
                      />
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="flex font-medium sm:text-[16px] small:text-[14px] 2small:text-[10px] text-[#3E3232]">
                    <h1>{post.title}</h1>
                  </div>
                  <div className="text-[#3E3232BF] sm:text-[12px] small:text-[10px] 2small:text-[7px] pr-2">
                    {post.desc}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default LatestVideos;
