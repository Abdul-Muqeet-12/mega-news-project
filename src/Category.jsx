import { MdOutlineBookmarkBorder } from "react-icons/md";
import { Link } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { CgMenuGridO } from "react-icons/cg";
import { TfiMenuAlt } from "react-icons/tfi";

export default function Category() {
  const posts = [
    {
      id: 1,
      img: "/images/water-boat.png",
      title: "Opening Day of Boating Season, Seattle",
      desc: "Of course the Puget Sound is very watery, and where there is water, there are boats.",
      authorImg: "/images/James.png",
      author: "James",
      date: "September 5 , 2025",
    },
    {
      id: 2,
      img: "/images/laptop.png",
      title: "How to choose the right laptop for idea",
      desc: "Choosing the right laptop for programming can be a tough process. It's easy to get...",
      authorImg: "/images/Louis.png",
      author: "Louis Hoebregts",
      date: "September 5 , 2025",
    },
    {
      id: 3,
      img: "/images/car.png",
      title: "How we built the first real self-driving car",
      desc: "Electric self-driving cars will save millions of lives and significantly accelerate the world's",
      authorImg: "/images/Mary.png",
      author: "Mary",
      date: "September 5 , 2025",
    },
    {
      id: 4,
      img: "/images/technology.jpg",
      title: "How to choose the right laptop for idea",
      desc: "Choosing the right laptop for programming can be a tough process. It's easy to get...",
      authorImg: "/images/Louis.png",
      author: "Robort",
      date: "September 5 , 2025",
    },
    {
      id: 5,
      img: "/images/food.png",
      title: "How to Persuade Your Parents to Buy...",
      desc: "Parents often don't want to buy fast food. They may be worried that it's too expensive...",
      authorImg: "/images/Jon.png",
      author: "Jon Kantner",
      date: "September 5 , 2025",
    },
    {
      id: 6,
      img: "/images/trendy-car.png",
      title: "How to build a self-driving car in month",
      desc: "Can I learn the necessary computer science to build the software part of a self-driving...",
      authorImg: "/images/Mary.png",
      author: "Mary",
      date: "September 5 , 2025",
    },
    {
      id: 7,
      img: "/images/trendy-sport.png",
      title: "Self-Improvement Has Become An Extr...",
      desc: "What we're told we must do each day to develop and be successful has gone out...",
      authorImg: "/images/James.png",
      author: "James",
      date: "September 5 , 2025",
    },
    {
      id: 8,
      img: "/images/top-car.png",
      title: "Why Buying a New Car Makes More...",
      desc: "Many experts will tell you buying cars used is best for your long-term financial health.",
      authorImg: "/images/Mary.png",
      author: "Mary",
      date: "September 5 , 2025",
    },
    {
      id: 9,
      img: "/images/trendy-food.png",
      title: "10 Cooking Lessons to Use in Everyday Life",
      desc: "I recently stumbled upon this quote by Paul Theroux: “Cooking requires confident... ",
      authorImg: "/images/Jon.png",
      author: "Jon Kantner",
      date: "September 5 , 2025",
    },
    {
      id: 10,
      img: "/images/trendy-tech.png",
      title: "Typography can make or break design...",
      desc: "One of the most important skills you can learn as a designer is how to choose type...",
      authorImg: "/images/Louis.png",
      author: "Robert",
      date: "September 5 , 2025",
    },
    {
      id: 11,
      img: "/images/boats.png",
      title: "House boating on Lake Shasta",
      desc: "The best way to spend a long 4th of July weekend. Wake boarding, swimming...",
      authorImg: "/images/James.png",
      author: "James",
      date: "September 5 , 2025",
    },
    {
      id: 12,
      img: "/images/top-food.png",
      title: "Lasagna is but a Pasta Cake",
      desc: "Re-envision the description of a common food from a different perspective — it is … pasta... ",
      authorImg: "/images/Jon.png",
      author: "Jon Kantner",
      date: "September 5 , 2025",
    },
  ];

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
          Sport
        </div>
      </div>

      <div className="bar rounded-xl bg-[#F5F5F5] small:h-[48px] 2small:h-[40px] lg:mx-8 sm:mx-6 small:mx-3 mx-2 mt-10">
        <div className="flex justify-between items-center small:h-[48px] 2small:h-[40px] px-3">
          <div className="nav">
            <nav>
              <ul className="flex items-center gap-[10px]">
                <li>
                  <a
                    href="#"
                    className="text-[#F81539] md:text-[14px] small:text-[12px] 2small:text-[10px] font-medium"
                  >
                    New
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#3E3232BF] md:text-[14px] small:text-[12px] 2small:text-[10px] font-medium"
                  >
                    Trendy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#3E3232BF] md:text-[14px] small:text-[12px] 2small:text-[10px] font-medium"
                  >
                    Popular
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#3E3232BF] md:text-[14px] small:text-[12px] 2small:text-[10px] font-medium"
                  >
                    Top
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="icons lg:flex items-center gap-[10px] hidden">
            <div className="cursor-pointer md:text-[16px] small:text-[14px] 2small:text-[12px]">
              <TfiMenuAlt />
            </div>
            <div className="w-[40px] h-[40px] rounded-xl text-[#3E3232] bg-[#3E32320D] flex justify-center items-center cursor-pointer shadow-sm hover:shadow-md">
              <div className="md:text-[18px] small:text-[16px] 2small:text-[14px]">
                <CgMenuGridO />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="popular-posts mt-15 relative lg:mx-8 sm:mx-6 small:mx-3 mx-2">
        <div className="flex justify-between mb-5">
          <div className="flex items-center gap-[6px] text-xl font-medium">
            <div className="w-[4px] h-[10px] rounded-xl bg-[#F81539]"></div>
            Category : Sport
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-4 mt-10">
          {posts.map((post) => (
            <div key={post.id} className="px-2">
              <div className="lg:h-[350px] lg:w-auto sm:w-[604px] small:w-[358px] 2small:w-full h-[385px] sm:h-[180px] mb-6 hover:shadow-md rounded-xl flex lg:flex-col sm:flex-row flex-col lg:justify-between shadow-[0px_1px_10px_2px_#00000012]">
                <div className="boat-img flex justify-center sm:mb-0 mb-2">
                  <div className="sm:w-[270px] sm:h-[160px] small:w-[338px] 2small:w-full h-[186px] rounded-xl mt-2">
                    <Link to={"/writer"}>
                      <img
                        src={post.img}
                        alt={post.title}
                        className="rounded-xl sm:w-[270px] sm:h-[160px] small:w-[338px] 2small:w-full h-[186px] object-cover px-1"
                      />
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-3">
                  <div className="flex ml-3 font-medium text-[12px] text-[#3E3232]">
                    <h1>{post.title}</h1>
                  </div>
                  <div className="text-[#3E3232BF] text-[10px] mx-3 h-[40px] overflow-hidden">
                    {post.desc}
                  </div>
                  <div className="flex justify-center mb-3">
                    <div className="w-full mx-2 h-[72px] rounded-xl bg-[#F5F5F5] flex justify-between items-center px-4">
                      <div className="flex items-center gap-[10px]">
                        <Link to={"/writer"}>
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
        </div>
      </div>

      <div className="links flex items-center gap-[10px] lg:mx-8 sm:mx-6 small:mx-3 mx-2 mt-10">
        <Link to={"/category"}>
          <div className="link-1 w-[40px] h-[40px] hover:shadow-sm bg-[#F5F5F5] rounded-xl flex items-center justify-center">
            <div className="text-[16px] font-medium text-[#3E3232]">1</div>
          </div>
        </Link>
        <Link to={"/category2"}>
          <div className="link-2 w-[40px] h-[40px] rounded-xl flex items-center justify-center hover:shadow-sm">
            <div className="text-[16px] font-medium text-[#3E3232]">2</div>
          </div>
        </Link>
        <Link to={"/category3"}>
          <div className="link-3 w-[40px] h-[40px] rounded-xl flex items-center justify-center hover:shadow-sm">
            <div className="text-[16px] font-medium text-[#3E3232]">3</div>
          </div>
        </Link>
        <div className="dots w-[40px] h-[40px] rounded-xl flex items-center justify-center">
          <div className="text-[16px] font-medium text-[#3E3232]">...</div>
        </div>

        <div className="link-3 w-[40px] h-[40px] rounded-xl flex items-center justify-center hover:shadow-sm">
          <div className="text-[16px] font-medium text-[#3E3232]">9</div>
        </div>

        <Link to={"/category2"}>
          <div className="w-[94px] h-[40px] rounded-xl flex items-center justify-center gap-[8px] text-[#3E3232BF] text-sm font-medium bg-[#F5F5F5]">
            Next{" "}
            <img
              src="/images/icon.png"
              alt=""
              className="md:w-[8px] md:h-[12px] small:w-[7px] small:h-[10px] 2small:w-[7px] 2small:h-[8px]"
            />
          </div>
        </Link>
      </div>

      <Footer />
    </>
  );
}
