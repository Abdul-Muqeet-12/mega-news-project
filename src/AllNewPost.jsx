import { Link } from "react-router";
import { RiArrowDropRightLine } from "react-icons/ri";
import { MdOutlineBookmarkBorder } from "react-icons/md";
import Header from "./Header";
import Footer from "./Footer";

function AllNewPost() {
  return (
    <>
      <Header />
      <div className="lg:mx-8 sm:mx-6 small:mx-3 mx-1 mt-10">
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
                <img
                  src="/public/tech-post.png"
                  alt=""
                  className="rounded-xl sm:w-[340px] small:w-[300px] 2small:w-[270px]  small:h-[160px] "
                />
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
                      <img
                        src="/public/Jon.png"
                        alt=""
                        className="small:w-[44px] small:h-[44px] 2small:w-[40px] 2small:h-[40px] rounded-xl"
                      />
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
                <img
                  src="/public/boats.png"
                  alt=""
                  className="rounded-xl sm:w-[340px] small:w-[300px] 2small:w-[270px]  small:h-[160px] "
                />
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
                      <img
                        src="/public/Louis.png"
                        alt=""
                        className="small:w-[44px] small:h-[44px] 2small:w-[40px] 2small:h-[40px] rounded-xl"
                      />
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
                <img
                  src="/public/squirrel.png"
                  alt=""
                  className="rounded-xl sm:w-[340px] small:w-[300px] 2small:w-[270px]  small:h-[160px] "
                />
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
                      <img
                        src="/public/James.png"
                        alt=""
                        className="small:w-[44px] small:h-[44px] 2small:w-[40px] 2small:h-[40px] rounded-xl"
                      />
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
                <img
                  src="/public/car-post.png"
                  alt=""
                  className="rounded-xl sm:w-[340px] small:w-[300px] 2small:w-[270px]  small:h-[160px] "
                />
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
                      <img
                        src="/public/Cassie.png"
                        alt=""
                        className="small:w-[44px] small:h-[44px] 2small:w-[40px] 2small:h-[40px] rounded-xl"
                      />
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
                <img
                  src="/public/designer.png"
                  alt=""
                  className="rounded-xl sm:w-[340px] small:w-[300px] 2small:w-[270px]  small:h-[160px] "
                />
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
                      <img
                        src="/public/Linda.png"
                        alt=""
                        className="small:w-[44px] small:h-[44px] 2small:w-[40px] 2small:h-[40px] rounded-xl"
                      />
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
                <img
                  src="/public/music.png"
                  alt=""
                  className="rounded-xl sm:w-[340px] small:w-[300px] 2small:w-[270px]  small:h-[160px] "
                />
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
                      <img
                        src="/public/Patricia.png"
                        alt=""
                        className="small:w-[44px] small:h-[44px] 2small:w-[40px] 2small:h-[40px] rounded-xl"
                      />
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

      {/* Footer Section  */}

      <Footer />
    </>
  );
}

export default AllNewPost;
