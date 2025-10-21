import Slider from "react-slick";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import { RiArrowDropLeftLine, RiArrowDropRightLine } from "react-icons/ri";
import { Link } from "react-router";

export default function TopPost() {
  const posts = [
    {
      id: 1,
      img: "/images/boats.png",
      title: "House boating on Lake Shasta",
      desc: "The best way to spend a long 4th of July weekend. Wake boarding, swimming...",
      authorImg: "/images/James.png",
      author: "James",
      date: "September 5 , 2025",
    },
    {
      id: 2,
      img: "/images/technology.jpg",
      title: "How to choose the right laptop for...",
      desc: "Choosing the right laptop for programming can be a tough process. It’s easy to...",
      authorImg: "/images/Louis.png",
      author: "Robert",
      date: "September 5 , 2025",
    },
    {
      id: 3,
      img: "/images/top-car.png",
      title: "Why Buying a New Car Makes More...",
      desc: "Many experts will tell you buying cars used is best for your long-term financial health.",
      authorImg: "/images/Mary.png",
      author: "Mary",
      date: "September 5 , 2025",
    },
    {
      id: 4,
      img: "/images/top-food.png",
      title: "Lasagna is but a Pasta Cake",
      desc: "Re-envision the description of a common food from a different perspective — it is … pasta... ",
      authorImg: "/images/Jon.png",
      author: "Jon Kantner",
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
    <div className="Top-posts mt-15 relative">
      <div className="flex justify-between mb-5">
        <div className="w-[136px] flex items-center gap-[6px] text-xl font-medium">
          <div className="w-[4px] h-[10px] rounded-xl bg-[#F81539]"></div>
          Top Posts
        </div>
      </div>

      <Slider {...settings}>
        {posts.map((post) => (
          <div key={post.id} className="px-2">
            <div className="w-[290px] h-[350px] mb-6 shadow-md hover:shadow-lg rounded-xl flex flex-col justify-between">
              <div className="boat-img flex justify-center">
                <div className="w-[270px] h-[150px] rounded-xl">
                  <Link to={"/featured"}>
                    <img
                      src={post.img}
                      alt={post.title}
                      className="rounded-xl w-[270px] h-[160px] object-cover"
                    />
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex ml-3 font-medium text-sm text-[#3E3232]">
                  <h1>{post.title}</h1>
                </div>
                <div className="text-[#3E3232BF] text-[12px] mx-3">
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
