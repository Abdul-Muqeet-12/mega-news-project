import { MdOutlineBookmarkBorder } from "react-icons/md";
import { Link } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import {
  FaPlus,
  FaRegEye,
  FaRegNewspaper,
  FaRegStar,
  FaUserEdit,
} from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import {
  FaRegFaceAngry,
  FaRegFaceGrinHearts,
  FaRegFaceGrinStars,
  FaRegFaceGrinWide,
  FaRegFaceMeh,
} from "react-icons/fa6";

export default function ProfilePosts() {
  const posts = [
    {
      id: 1,
      img: "/public/trendy-sport.png",
      title: "Opening Day of Boating Season, Seattle WA",
      authorImg: "/public/James.png",
      author: "James",
      date: "September 5 , 2025",
    },
    {
      id: 2,
      img: "/public/technology.jpg",
      title: "How to choose the right laptop for idea",
      authorImg: "/public/Louis.png",
      author: "Robort",
      date: "September 5 , 2025",
    },
    {
      id: 3,
      img: "/public/car.png",
      title: "How we built the first real self-driving car",
      authorImg: "/public/Mary.png",
      author: "Mary",
      date: "September 5 , 2025",
    },
    {
      id: 4,
      img: "/public/food.png",
      title: "How to Persuade Your Parents to Buy...",
      authorImg: "/public/Jon.png",
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
            src="/public/icon.png"
            alt=""
            className="md:w-[8px] md:h-[12px] small:w-[7px] small:h-[10px] 2small:w-[7px] 2small:h-[8px]"
          />
        </div>
        <div className="md:text-sm small:text-[12px] 2small:text-[10px] text-[#3E323280] cursor-pointer">
          Profile Posts
        </div>
      </div>

      <div className="bar h-[260px] bg-[#F5F5F5] rounded-xl lg:mx-8 sm:mx-6 small:mx-6 mx-6 mt-10 p-3">
        <div>
          <img
            src="/public/slider-img2.jpg"
            alt=""
            className="h-[150px] w-full object-cover rounded-xl"
          />
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-[8px]">
            <img
              src="/public/Louis.png"
              alt=""
              className="w-[75px] h-[75px] rounded-xl"
            />

            <div className="md:text-[16px] small:text-sm font-medium text-[#3E3232] lg:flex hidden">
              Louis Hoebregts
            </div>

            {/* Tab Screens  */}

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
                <Link to={"/profile-marked"}>
                  <div className="md:text-[16px] small:text-[14px] text-[12px] font-medium text-[#3E3232]">
                    Marked
                  </div>
                </Link>

                <Link to={"/profile-send"}>
                  <div className="md:text-[16px] small:text-[14px] text-[12px] font-medium text-[#3E3232]">
                    Send Post
                  </div>
                </Link>

                <div className="mb-[-5px]">
                  <Link to={"/profile-post"}>
                    <div className="md:text-[16px] small:text-[14px] text-[12px] font-medium text-[#3E3232]">
                      Posts
                    </div>
                  </Link>
                  <div className="w-[10px] h-[4px] rounded-xl bg-[#F81539]"></div>
                </div>
              </div>
            </div>

            {/* Mobile Screens */}

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
                <Link to={"/profile-marked"}>
                  <div className="md:text-[16px] small:text-[14px] text-[12px] font-medium text-[#3E3232]">
                    Marked
                  </div>
                </Link>

                <Link to={"/profile-send"}>
                  <div className="md:text-[16px] small:text-[14px] text-[12px] font-medium text-[#3E3232]">
                    Send Post
                  </div>
                </Link>

                <div className="mb-[-5px]">
                  <Link to={"/profile-post"}>
                    <div className="md:text-[16px] small:text-[14px] text-[12px] font-medium text-[#3E3232]">
                      Posts
                    </div>
                  </Link>
                  <div className="w-[10px] h-[4px] rounded-xl bg-[#F81539]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Screens  */}

          <div className="lg:flex items-center justify-center gap-[60px] hidden">
            <Link to={"/profile-marked"}>
              <div className="md:text-[16px] small:text-[14px] text-[12px] font-medium text-[#3E3232]">
                Marked
              </div>
            </Link>

            <Link to={"/profile-send"}>
              <div className="md:text-[16px] small:text-[14px] text-[12px] font-medium text-[#3E3232]">
                Send Post
              </div>
            </Link>

            <div className="mb-[-5px]">
              <Link to={"/profile-post"}>
                <div className="md:text-[16px] small:text-[14px] text-[12px] font-medium text-[#3E3232]">
                  Posts
                </div>
              </Link>
              <div className="w-[10px] h-[4px] rounded-xl bg-[#F81539]"></div>
            </div>
          </div>

          <div className="md:text-sm text-[12px] font-medium border border-[#E6E6E6] text-[#F81539BF] w-[105px] h-[40px] cursor-pointer rounded-xl sm:flex items-center justify-center gap-[8px] hidden">
            <FaUserEdit className="md:text-[14px] text-[12px]" /> Edit Profile
          </div>
        </div>
      </div>

      <div className="lg:mx-8 sm:mx-6 small:mx-6 mx-6 mt-10 flex lg:flex-row flex-col items-center gap-3">
        <div className="view-post lg:w-[70%] w-full">
          <div className="flex items-center gap-[6px] text-xl font-medium">
            <div className="w-[4px] h-[10px] rounded-xl bg-[#F81539]"></div>
            View Posts
          </div>
          <div className="view-post w-full bg-[#FFFFFFBF] shadow rounded-xl h-[408px] mt-3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            voluptatem nisi tempora impedit odit molestiae consequatur, optio
            totam porro veniam ea quisquam, itaque veritatis aut ad quidem earum
          </div>
        </div>

        <div className="satisfaction-post lg:w-[30%] w-full">
          <div className="flex items-center gap-[6px] text-xl font-medium">
            <div className="w-[4px] h-[10px] rounded-xl bg-[#F81539]"></div>
            Satisfaction Of Posts
          </div>
          <div className="stisfaction w-full rounded-xl flex justify-center bg-[#FFFFFF] shadow mt-3 small:h-[408px] h-[370px]">
            <div className="grid lg:grid-cols-3 sm:grid-cols-5 grid-cols-3 small:gap-2 gap-1 my-2 mx-1">
              <div className="small:w-[104px] small:h-[120px] w-[85px] h-[105px] rounded-xl flex flex-col items-center gap-[15px] bg-[#F5F5F5]">
                <div className="text-[#3E3232] text-[12px]">August 2022</div>
                <div>
                  <FaRegFaceAngry className="text-[32px] cursor-pointer text-[#FC5C65]" />
                </div>
                <div className="text-[#3E3232] text-[12px]">20 points</div>
              </div>

              <div className="small:w-[104px] small:h-[120px] w-[85px] h-[105px] rounded-xl flex flex-col items-center gap-[15px] bg-[#F5F5F5]">
                <div className="text-[#3E3232] text-[12px]">August 2022</div>
                <div>
                  <FaRegFaceGrinHearts className="text-[32px] cursor-pointer text-[#45AAF2]" />
                </div>
                <div className="text-[#3E3232] text-[12px]">20 points</div>
              </div>

              <div className="small:w-[104px] small:h-[120px] w-[85px] h-[105px] rounded-xl flex flex-col items-center gap-[15px] bg-[#F5F5F5]">
                <div className="text-[#3E3232] text-[12px]">August 2022</div>
                <div>
                  <FaRegFaceGrinStars className="text-[32px] cursor-pointer text-[#26DE81]" />
                </div>
                <div className="text-[#3E3232] text-[12px]">20 points</div>
              </div>

              <div className="small:w-[104px] small:h-[120px] w-[85px] h-[105px] rounded-xl flex flex-col items-center gap-[15px] bg-[#F5F5F5]">
                <div className="text-[#3E3232] text-[12px]">August 2022</div>
                <div>
                  <FaRegFaceGrinStars className="text-[32px] cursor-pointer text-[#26DE81]" />
                </div>
                <div className="text-[#3E3232] text-[12px]">20 points</div>
              </div>

              <div className="small:w-[104px] small:h-[120px] w-[85px] h-[105px] rounded-xl flex flex-col items-center gap-[15px] bg-[#F5F5F5]">
                <div className="text-[#3E3232] text-[12px]">August 2022</div>
                <div>
                  <FaRegFaceMeh className="text-[32px] cursor-pointer text-[#FA8231]" />
                </div>
                <div className="text-[#3E3232] text-[12px]">20 points</div>
              </div>

              <div className="small:w-[104px] small:h-[120px] w-[85px] h-[105px] rounded-xl flex flex-col items-center gap-[15px] bg-[#F5F5F5]">
                <div className="text-[#3E3232] text-[12px]">August 2022</div>
                <div>
                  <FaRegFaceGrinWide className="text-[32px] cursor-pointer text-[#F7B731]" />
                </div>
                <div className="text-[#3E3232] text-[12px]">20 points</div>
              </div>

              <div className="small:w-[104px] small:h-[120px] w-[85px] h-[105px] rounded-xl flex flex-col items-center gap-[15px] bg-[#F5F5F5]">
                <div className="text-[#3E3232] text-[12px]">August 2022</div>
                <div>
                  <FaRegFaceGrinWide className="text-[32px] cursor-pointer text-[#F7B731]" />
                </div>
                <div className="text-[#3E3232] text-[12px]">20 points</div>
              </div>

              <div className="small:w-[104px] small:h-[120px] w-[85px] h-[105px] rounded-xl flex flex-col items-center gap-[15px] bg-[#F5F5F5]">
                <div className="text-[#3E3232] text-[12px]">August 2022</div>
                <div>
                  <FaRegFaceAngry className="text-[32px] cursor-pointer text-[#FC5C65]" />
                </div>
                <div className="text-[#3E3232] text-[12px]">20 points</div>
              </div>

              <div className="lg:hidden sm:flex hidden">
                <div className="small:w-[104px] small:h-[120px] w-[85px] h-[105px] rounded-xl flex flex-col items-center gap-[15px] bg-[#F5F5F5]">
                  <div className="text-[#3E3232] text-[12px]">August 2022</div>
                  <div>
                    <FaRegFaceGrinHearts className="text-[32px] cursor-pointer text-[#45AAF2]" />
                  </div>
                  <div className="text-[#3E3232] text-[12px]">20 points</div>
                </div>
              </div>

              <div className="small:w-[104px] small:h-[120px] w-[85px] h-[105px] rounded-xl flex flex-col items-center gap-[15px] bg-[#F5F5F5]">
                <div className="text-[#3E3232] text-[12px]">August 2022</div>
                <div>
                  <FaRegFaceGrinStars className="text-[32px] cursor-pointer text-[#26DE81]" />
                </div>
                <div className="text-[#3E3232] text-[12px]">20 points</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="your-posts mt-15 relative lg:mx-8 sm:mx-6 small:mx-3 mx-2">
        <div className="flex justify-between mb-5">
          <div className="flex items-center gap-[6px] text-xl font-medium">
            <div className="w-[4px] h-[10px] rounded-xl bg-[#F81539]"></div>
            Your Posts
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-4 mt-10">
          {posts.map((post) => (
            <div key={post.id} className="px-2">
              <div className="lg:h-[280px] lg:w-auto w-full h-[385px] sm:h-[180px] mb-6 hover:shadow-md rounded-xl flex lg:flex-col sm:flex-row flex-col lg:justify-between shadow-[0px_1px_10px_2px_#00000012]">
                <div className="boat-img flex justify-center sm:mb-0 mb-2">
                  <div className="sm:w-[270px] lg:h-[160px] w-full h-[186px] rounded-xl mt-2">
                    <Link to={"/featured"}>
                      <img
                        src={post.img}
                        alt={post.title}
                        className="rounded-xl lg:w-[270px] sm:h-[160px] w-full h-[186px] object-cover px-1"
                      />
                    </Link>
                  </div>
                </div>
                <div className="flex flex-col justify-center w-full gap-3">
                  <div className="flex ml-3 font-medium text-[12px] text-[#3E3232]">
                    <h1>{post.title}</h1>
                  </div>

                  <div className="flex justify-center mb-3">
                    <div className="w-full mx-2 h-[48px] rounded-xl bg-[#F5F5F5] flex justify-between items-center px-4">
                      <div className="flex items-center gap-[10px]">
                        <div className="flex items-center gap-[8px]">
                          <FaRegEye className="text-[#3E323280]" />
                          <div>15k</div>
                        </div>
                        <div className="flex items-center gap-[8px]">
                          <FaRegStar className="text-[#3E323280]" />
                          <div>4.5</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-[20px]">
                        <div>
                          <img
                            src="/public/edit.png"
                            alt=""
                            className="w-[20px]"
                          />
                        </div>
                        <div>
                          <img
                            src="/public/del.png"
                            alt=""
                            className="w-[20px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
