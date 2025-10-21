import { MdOutlineBookmarkBorder } from "react-icons/md";
import { Link } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import { FaPlus, FaRegNewspaper, FaRegStar, FaUserEdit } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";

export default function ProfileMarked2() {
  const posts = [
    {
      id: 1,
      img: "/images/food.png",
      title: "How to Persuade Your Parents to Buy...",
      desc: "Parents often don't want to buy fast food. They may be worried that it's too expensive...",
      authorImg: "/images/Jon.png",
      author: "Jon Kantner",
      date: "September 5 , 2025",
    },
    {
      id: 2,
      img: "/images/trendy-car.png",
      title: "How to build a self-driving car in month",
      desc: "Can I learn the necessary computer science to build the software part of a self-driving...",
      authorImg: "/images/Mary.png",
      author: "Mary",
      date: "September 5 , 2025",
    },
    {
      id: 3,
      img: "/images/trendy-sport.png",
      title: "Self-Improvement Has Become An Extr...",
      desc: "What we're told we must do each day to develop and be successful has gone out...",
      authorImg: "/images/James.png",
      author: "James",
      date: "September 5 , 2025",
    },
    {
      id: 4,
      img: "/images/top-car.png",
      title: "Why Buying a New Car Makes More...",
      desc: "Many experts will tell you buying cars used is best for your long-term financial health.",
      authorImg: "/images/Mary.png",
      author: "Mary",
      date: "September 5 , 2025",
    },
    {
      id: 5,
      img: "/images/water-boat.png",
      title: "Opening Day of Boating Season, Seattle",
      desc: "Of course the Puget Sound is very watery, and where there is water, there are boats.",
      authorImg: "/images/James.png",
      author: "James",
      date: "September 5 , 2025",
    },
    {
      id: 6,
      img: "/images/laptop.png",
      title: "How to choose the right laptop for idea",
      desc: "Choosing the right laptop for programming can be a tough process. It's easy to get...",
      authorImg: "/images/Louis.png",
      author: "Louis Hoebregts",
      date: "September 5 , 2025",
    },
    {
      id: 7,
      img: "/images/car.png",
      title: "How we built the first real self-driving car",
      desc: "Electric self-driving cars will save millions of lives and significantly accelerate the world's",
      authorImg: "/images/Mary.png",
      author: "Mary",
      date: "September 5 , 2025",
    },
    {
      id: 8,
      img: "/images/technology.jpg",
      title: "How to choose the right laptop for idea",
      desc: "Choosing the right laptop for programming can be a tough process. It's easy to get...",
      authorImg: "/images/Louis.png",
      author: "Robort",
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
          Profile Marked
        </div>
      </div>

      <div className="bar h-[260px] bg-[#F5F5F5] rounded-xl lg:mx-8 sm:mx-6 small:mx-6 mx-6 mt-10 p-3">
        <div>
          <img
            src="/images/slider-img2.jpg"
            alt=""
            className="h-[150px] w-full object-cover rounded-xl"
          />
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-[8px]">
            <img
              src="/images/Louis.png"
              alt=""
              className="w-[75px] h-[75px] rounded-xl"
            />

            <div className="md:text-[16px] small:text-sm font-medium text-[#3E3232] lg:flex hidden">
              Louis Hoebregts
            </div>

            <div className="lg:hidden sm:block hidden">
              <div className="flex items-center justify-between pb-2">
                <div className="md:text-[16px] text-sm font-medium text-[#3E3232]">
                  Louis Hoebregts
                </div>
                <div className="md:text-sm text-[12px] font-medium border border-[#E6E6E6] text-[#F81539BF] w-[105px] h-[40px] cursor-pointer rounded-xl flex items-center justify-center gap-[8px] sm:hidden">
                  <FaUserEdit className="md:text-[14px] text-[12px]" /> Edit
                  Profile
                </div>
              </div>
              <div className="flex items-center justify-center md:gap-[60px] sm:gap-[40px] small:gap-[20px] 2small:gap-[10px]">
                <div className="flex items-center justify-center gap-[8px]">
                  <FaRegStar size={14} className="text-[#3E323280]" />
                  <div className="md:text-sm text-[12px] font-medium text-[#3E3232BF]">
                    Rate : 42
                  </div>
                </div>

                <div className="flex items-center justify-center gap-[8px]">
                  <BsPerson className="text-[#3E323280]" />
                  <div className="md:text-sm text-[12px] font-medium text-[#3E3232BF]">
                    Follower : 1.2 K
                  </div>
                </div>

                <div className="flex items-center justify-center gap-[8px]">
                  <FaRegNewspaper className="text-[#3E323280]" />
                  <div className="md:text-sm text-[12px] font-medium text-[#3E3232BF]">
                    Post : 29
                  </div>
                </div>
              </div>
            </div>

            <div className="sm:hidden block">
              <div className="flex items-center gap-[8px] pb-2">
                <div className="md:text-[16px] small:text-sm 2small:text-[12px] font-medium text-[#3E3232]">
                  Louis Hoebregts
                </div>
                <div className="md:text-sm text-[12px] font-medium border border-[#E6E6E6] text-[#F81539BF] w-[105px] h-[40px] cursor-pointer rounded-xl flex items-center justify-center gap-[8px] sm:hidden">
                  <FaUserEdit className="md:text-[14px] text-[12px]" /> Edit
                  Profile
                </div>
              </div>
              <div className="flex items-center justify-around md:gap-[60px] sm:gap-[40px] small:gap-[20px] 2small:gap-[10px]">
                <div className="flex items-center justify-center gap-[8px]">
                  <FaRegStar size={14} className="text-[#3E323280]" />
                  <div className="md:text-sm text-[12px] font-medium text-[#3E3232BF]">
                    42
                  </div>
                </div>

                <div className="flex items-center justify-center gap-[8px]">
                  <BsPerson className="text-[#3E323280]" />
                  <div className="md:text-sm text-[12px] font-medium text-[#3E3232BF]">
                    1.2 K
                  </div>
                </div>

                <div className="flex items-center justify-center gap-[8px]">
                  <FaRegNewspaper className="text-[#3E323280]" />
                  <div className="md:text-sm text-[12px] font-medium text-[#3E3232BF]">
                    29
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:flex items-center justify-center gap-[60px] hidden">
            <div className="flex items-center justify-center gap-[8px]">
              <FaRegStar size={14} className="text-[#3E323280]" />
              <div className="md:text-sm small:text-[12px] font-medium text-[#3E3232BF]">
                Rate : 42
              </div>
            </div>

            <div className="flex items-center justify-center gap-[8px]">
              <BsPerson className="text-[#3E323280]" />
              <div className="md:text-sm small:text-[12px] font-medium text-[#3E3232BF]">
                Follower : 1.2 K
              </div>
            </div>

            <div className="flex items-center justify-center gap-[8px]">
              <FaRegNewspaper className="text-[#3E323280]" />
              <div className="md:text-sm small:text-[12px] font-medium text-[#3E3232BF]">
                Post : 29
              </div>
            </div>
          </div>

          <div className="md:text-sm text-[12px] font-medium border border-[#E6E6E6] text-[#F81539BF] w-[105px] h-[40px] cursor-pointer rounded-xl sm:flex items-center justify-center gap-[8px] hidden">
            <FaUserEdit className="md:text-[14px] text-[12px]" /> Edit Profile
          </div>
        </div>
      </div>

      <div className="popular-posts mt-15 relative lg:mx-8 sm:mx-6 small:mx-3 mx-2">
        <div className="flex justify-between mb-5">
          <div className="flex items-center gap-[6px] text-xl font-medium">
            <div className="w-[4px] h-[10px] rounded-xl bg-[#F81539]"></div>
            Latest Post
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-4 mt-10">
          {posts.map((post) => (
            <div key={post.id} className="px-2">
              <div className="lg:h-[350px] lg:w-auto sm:w-[604px] small:w-[358px] 2small:w-full h-[385px] sm:h-[180px] mb-6 hover:shadow-md rounded-xl flex lg:flex-col sm:flex-row flex-col lg:justify-between shadow-[0px_1px_10px_2px_#00000012]">
                <div className="boat-img flex justify-center sm:mb-0 mb-2">
                  <div className="sm:w-[270px] sm:h-[160px] small:w-[338px] 2small:w-full h-[186px] rounded-xl mt-2">
                    <Link to={"/featured"}>
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
        </div>
      </div>

      <div className="links flex items-center gap-[8px] lg:mx-8 sm:mx-6 small:mx-3 mx-2 mt-10">
        <Link to={"/profile-marked"}>
          <div className="link-1 w-[35px] h-[35px] hover:shadow-sm rounded-xl flex items-center justify-center">
            <div className="text-[16px] font-medium text-[#3E3232]">1</div>
          </div>
        </Link>
        <Link to={"/profile-marked2"}>
          <div className="link-2 w-[35px] h-[35px] rounded-xl bg-[#F5F5F5] flex items-center justify-center hover:shadow-sm">
            <div className="text-[16px] font-medium text-[#3E3232]">2</div>
          </div>
        </Link>
        <Link to={"/profile-marked3"}>
          <div className="link-3 w-[35px] h-[35px] rounded-xl flex items-center justify-center hover:shadow-sm">
            <div className="text-[16px] font-medium text-[#3E3232]">3</div>
          </div>
        </Link>
        <div className="dots w-[35px] h-[35px] rounded-xl flex items-center justify-center">
          <div className="text-[16px] font-medium text-[#3E3232]">...</div>
        </div>

        <div className="link-3 w-[35px] h-[35px] rounded-xl flex items-center justify-center">
          <div className="text-[16px] font-medium text-[#3E3232]">9</div>
        </div>

        <Link to={"/profile-marked3"}>
          <div className="w-[85px] h-[35px] rounded-xl flex items-center justify-center gap-[8px] text-[#3E3232BF] text-sm font-medium bg-[#F5F5F5]">
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
