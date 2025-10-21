import Slider from "react-slick";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import { Link } from "react-router";

export default function TrendyPost() {
  const posts = [
    {
      id: 1,
      img: "/images/trendy-car.png",
      title: "How to build a self-driving car in month",
      desc: "Can I learn the necessary computer science to build the software part of a self-driving...",
      authorImg: "/images/Mary.png",
      author: "Mary",
      date: "September 5 , 2025",
    },
    {
      id: 2,
      img: "/images/trendy-sport.png",
      title: "Self-Improvement Has Become An Extr...",
      desc: "What we're told we must do each day to develop and be successful has gone out...",
      authorImg: "/images/James.png",
      author: "James",
      date: "September 5 , 2025",
    },
    {
      id: 3,
      img: "/images/trendy-food.png",
      title: "10 Cooking Lessons to Use in Everyday Life",
      desc: "I recently stumbled upon this quote by Paul Theroux: “Cooking requires confident... ",
      authorImg: "/images/Jon.png",
      author: "Jon Kantner",
      date: "September 5 , 2025",
    },
    {
      id: 4,
      img: "/images/trendy-tech.png",
      title: "Typography can make or break design...",
      desc: "One of the most important skills you can learn as a designer is how to choose type...",
      authorImg: "/images/Louis.png",
      author: "Robert",
      date: "September 5 , 2025",
    },
    {
      id: 5,
      img: "/images/car-post.png",
      title: "How we built the first real self-driving car",
      desc: "Electric self-driving cars will save millions of lives and significantly accelerate the world's",
      authorImg: "/images/Mary.png",
      author: "Mary",
      date: "September 5 , 2025",
    },
    {
      id: 6,
      img: "/images/tech-post.png",
      title: "How to choose the right laptop for idea",
      desc: "Choosing the right laptop for programming can be a tough process. It's easy to get...",
      authorImg: "/images/Louis.png",
      author: "Louis Hoebregts",
      date: "September 5 , 2025",
    },
  ];

  const NextArrow = ({ onClick }) => (
    <div
      className="w-[40px] h-[40px] rounded-xl bg-[#F5F5F5] flex justify-center items-center cursor-pointer shadow-sm hover:shadow-md absolute right-0 top-[-30px] -translate-y-1/2 z-10"
      onClick={onClick}
    >
      <RiArrowDropRightLine size={24} />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="w-[40px] h-[40px] rounded-xl bg-[#F5F5F5] flex justify-center items-center cursor-pointer shadow-sm hover:shadow-md absolute right-16 top-[-30px] -translate-y-1/2 z-10"
      onClick={onClick}
    >
      <RiArrowDropLeftLine size={24} />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // show 4 cards in large screen
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="popular-posts mt-15 relative">
      <div className="flex justify-between mb-5">
        <div className="w-[136px] flex items-center gap-[6px] text-xl font-medium">
          <div className="w-[4px] h-[10px] rounded-xl bg-[#F81539]"></div>
          Trendy Posts
        </div>
      </div>

      <Slider {...settings}>
        {posts.map((post) => (
          <div key={post.id} className="px-2">
            <div className="w-[290px] h-[350px] mb-6 shadow-md hover:shadow-lg rounded-xl flex flex-col justify-between">
              <div className="boat-img flex justify-center">
                <div className="w-[270px] rounded-xl">
                  <Link to={"/featured"}>
                    <img
                      src={post.img}
                      alt={post.title}
                      className="rounded-xl"
                    />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex justify-center font-medium text-sm text-[#3E3232]">
                  <h1>{post.title}</h1>
                </div>
                <div className="text-[#3E3232BF] text-[12px] mx-5">
                  {post.desc}
                </div>
                <div className="flex justify-center mb-3">
                  <div className="w-[270px] h-[72px] rounded-xl bg-[#F5F5F5] flex justify-between items-center px-4">
                    <div className="flex items-center gap-[10px]">
                      <Link to={"/featured"}>
                        <img
                          src={post.authorImg}
                          alt={post.author}
                          className="w-[44px] h-[44px] rounded-xl"
                        />
                      </Link>
                      <div>
                        <h1 className="text-sm font-medium text-[#3E3232]">
                          {post.author}
                        </h1>
                        <p className="text-[12px] text-[#3E3232BF]">
                          {post.date}
                        </p>
                      </div>
                    </div>
                    <div>
                      <MdOutlineBookmarkBorder
                        className="text-[#193154]"
                        size={20}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
