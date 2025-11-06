import { FaPlus, FaRegCalendar } from "react-icons/fa";
import {
  FaRegCommentDots,
  FaRegFaceAngry,
  FaRegFaceGrinHearts,
  FaRegFaceGrinStars,
  FaRegFaceGrinWide,
  FaRegFaceMeh,
} from "react-icons/fa6";
import { FaRegFolder } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import Footer from "./Footer";
import Header from "./Header";
import RelatedPost from "./RelatedPost";
import { FiSend } from "react-icons/fi";
import { MdOutlineBookmarkBorder } from "react-icons/md";

function Featured() {
  return (
    <>
      <Header />
      <div className="routing lg:mx-8 sm:mx-6 small:mx-3 mx-1 mt-10 flex items-center gap-3">
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
        <div className="md:text-sm small:text-[12px] 2small:text-[10px] text-[#3E3232] cursor-pointer">
          Featured
        </div>
        <div>
          <img
            src="/public/icon.png"
            alt=""
            className="md:w-[8px] md:h-[12px] small:w-[7px] small:h-[10px] 2small:w-[7px] 2small:h-[8px]"
          />
        </div>
        <div className="md:text-sm small:text-[12px] 2small:text-[10px] text-[#3E323280] cursor-pointer">
          How To Spend The Perfect Day On Croatia's Most Magical Island
        </div>
      </div>
      <div className="content lg:mx-8 sm:mx-6 small:mx-3 mx-1 mt-10">
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="lg:w-[70%] w-full">
            <div className="w-full h-[500px] bg-[#F5F5F5] rounded-xl">
              <h1 className="md:text-[24px] sm:text-[20px] small:text-[16px] 2small:text-[14px] pt-5 ml-7">
                How to Spend the Perfect Day on Croatia's Most Magical Island
              </h1>
              <div className="flex items-center justify-center mt-3">
                <img
                  src="/public/water-boat.png"
                  alt=""
                  className="w-[95%] h-[498px] rounded-xl object-cover"
                />
              </div>
            </div>

            <div className="w-full">
              <div className="img flex flex-col items-center mt-15">
                {" "}
                <div className="img-content ">
                  <div className="flex mt-8 gap-[65px]">
                    <div className="flex items-center gap-2">
                      <div>
                        <FaRegCalendar className="text-[#3E323280]" />
                      </div>
                      <div className="text-[#3E3232BF] text-sm font-medium">
                        Sep 11, 2025
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div>
                        <FaRegCommentDots className="text-[#3E323280]" />
                      </div>
                      <div className="text-[#3E3232BF] text-sm font-medium">
                        Comments : 35
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div>
                        <FaRegFolder className="text-[#3E323280]" />
                      </div>
                      <div className="text-[#3E3232BF] text-sm font-medium">
                        Category : Sport
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="pt-5 ml-7 mt-10">
                <h1 className="text-xl font-medium text-[#3E3232]">
                  Don't wait. The purpose of our lives is to be happy!
                </h1>
                <div className="text-lg text-[#3E3232] text-justify flex flex-col gap-1 mt-2">
                  <div>
                    Upon arrival, your senses will be rewarded with the pleasant
                    scent of lemongrass oil used to clean the natural wood found
                    throughout the room, creating a relaxing atmosphere within
                    the space.
                  </div>
                  <div>
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring which I enjoy with my
                    whole heart. I am alone, and feel the charm of existence in
                    this spot, which was created for the bliss of souls like
                    mine. I am so happy, my dear friend, so absorbed in the
                    exquisite.
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="flex items-center justify-center my-10">
                <div className="w-[70%] h-[400px] rounded-xl shadow-sm">
                  <img
                    src="/public/boats.png"
                    alt=""
                    className="w-full h-[400px] rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="ml-7">
                <h1 className="text-xl font-medium text-[#3E3232]">
                  Not how long, but how well you have lived is the main thing.
                </h1>
                <div className="text-lg text-[#3E3232] text-justify flex flex-col gap-1 mt-2">
                  <div>
                    When you are ready to indulge your sense of excitement,
                    check out the range of water- sports opportunities at the
                    resort's on-site water-sports center. Want to leave your
                    stress on the water? The resort has kayaks, paddleboards, or
                    the low-key pedal boats. Snorkeling equipment is available
                    as well, so you can experience the ever-changing undersea
                    environment.
                  </div>
                  <div>
                    Not only do visitors to a bed and breakfast get a unique
                    perspective on the place they are visiting, they have
                    options for special packages not available in other hotel
                    settings. Bed and breakfasts can partner easily with local
                    businesses for a smoothly organized and highly personalized
                    vacation experience. The Fife and Drum Inn offers options
                    such as the Historic Triangle Package that includes three
                    nights at the Inn, breakfasts, and admissions to historic
                    Williamsburg, Jamestown, and Yorktown. Bed and breakfasts
                    also lend themselves to romance.
                  </div>
                  <div>
                    Part of the charm of a bed and breakfast is the uniqueness;
                    art, décor, and food are integrated to create a complete
                    experience. For example, the Fife and Drum retains the
                    colonial feel of the area in all its guest rooms. Special
                    features include antique furnishings, elegant four poster
                    beds in some guest rooms, as well folk art and artifacts
                    from the restoration period of the historic area available
                    for guests to enjoy.
                  </div>
                </div>
              </div>
            </div>

            <div className="aside lg:w-[30%] w-full flex flex-col gap-[25px] lg:hidden mt-10 lg:mx-8 sm:mx-6 small:mx-3 mx-1">
              {/* Buttons  */}

              <div className="btn flex items-center sm:justify-start justify-between gap-3">
                <button className="share flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md gap-[6px] w-[85px] h-[40px] pb-1 rounded-xl bg-[#F5F5F5]">
                  <FiSend className="text-[#3E323280]" />{" "}
                  <div className="text-[#3E3232BF] font-medium text-sm">
                    Share
                  </div>
                </button>
                <button className="share flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md gap-[6px] w-[100px] h-[40px] pb-1 rounded-xl bg-[#F5F5F5]">
                  <MdOutlineBookmarkBorder
                    size={20}
                    className="text-[#3E323280]"
                  />{" "}
                  <div className="text-[#3E3232BF] font-medium text-sm">
                    Marking
                  </div>
                </button>
                <button className="share flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md gap-[6px] w-[110px] h-[40px] pb-1 rounded-xl bg-[#F5F5F5]">
                  <FaRegCommentDots className="text-[#3E323280]" />{" "}
                  <div className="text-[#3E3232BF] font-medium text-sm">
                    Comment
                  </div>
                </button>
              </div>

              <div className="flex sm:items-center sm:flex-row flex-col gap-2">
                <div className="sm:w-[320px] w-full h-[100px] flex justify-between bg-[#F5F5F5] rounded-xl p-2">
                  <div className="img flex gap-2">
                    <img
                      src="/public/Louis.png"
                      alt=""
                      className="w-[80px] h-[80px] rounded-xl"
                    />
                    <div>
                      <h3 className="text-[16px] font-medium text-[#3E3232]">
                        Louis Hoebregts
                      </h3>
                      <div className="text-sm font-medium text-white bg-[#F81539BF] w-[105px] h-[40px] cursor-pointer shadow-sm hover:shadow-md rounded-xl flex items-center justify-center gap-[8px] pr-2">
                        <FaPlus size={12} /> Follow
                      </div>
                    </div>
                  </div>
                  <div className="post text-[#3E3232BF] text-[12px]">
                    27 post
                  </div>
                </div>

                <div className="sm:w-[320px] w-full h-[100px] bg-[#F5F5F5] rounded-xl p-2">
                  <div className="w-[54px] flex items-center gap-[6px] text-xl font-medium text-[#3E3232]">
                    <div className="w-[4px] h-[10px] rounded-xl bg-[#F81539]"></div>
                    Tags
                  </div>
                  <div className="text-[12px] font-medium text-[#3E3232BF] flex gap-[10px] flex-wrap">
                    <div>Montenegro</div> <div>Visit Croatia</div>{" "}
                    <div>Luxury Travel</div> <div>Travel Log</div>{" "}
                    <div>Paradise Island</div> <div>Travel Info</div>
                  </div>
                </div>
              </div>

              <div className="lg:w-[320px] w-full lg:h-[580px] bg-[#F5F5F5] rounded-xl p-2">
                <div className="w-[90px] flex items-center gap-[6px] text-xl font-medium text-[#3E3232] mt-1">
                  <div className="w-[4px] h-[10px] rounded-xl bg-[#F81539]"></div>
                  Top Post
                </div>

                {/* Cards  */}

                <div className="cards lg:flex lg:flex-col grid sm:grid-cols-2 grid-cols-1 gap-4 mt-5">
                  {/* Card-1  */}

                  <div className="flex items-center gap-[10px] cursor-pointer hover:shadow-sm">
                    <img
                      src="/public/featured-car.png"
                      alt=""
                      className="w-[87px] h-[87px] rounded-xl"
                    />
                    <div>
                      <h1 className="text-[12px] text-[#3E3232] font-medium">
                        How to Spend the Perfect Day on Croatia's Most Magical
                        Island
                      </h1>
                      <div className="text-[11px] text-[#3E3232BF] mt-1">
                        Subhead
                      </div>
                    </div>
                  </div>

                  {/* Card-2  */}

                  <div className="flex items-center gap-[10px] cursor-pointer hover:shadow-sm">
                    <img
                      src="/public/frog.png"
                      alt=""
                      className="w-[87px] h-[87px] rounded-xl"
                    />
                    <div>
                      <h1 className="text-[12px] text-[#3E3232] font-medium">
                        How to Spend the Perfect Day on Croatia's Most Magical
                        Island
                      </h1>
                      <div className="text-[11px] text-[#3E3232BF] mt-1">
                        Subhead
                      </div>
                    </div>
                  </div>

                  {/* Card-3  */}

                  <div className="flex items-center gap-[10px] cursor-pointer hover:shadow-sm">
                    <img
                      src="/public/featured-dance.png"
                      alt=""
                      className="w-[87px] h-[87px] rounded-xl"
                    />
                    <div>
                      <h1 className="text-[12px] text-[#3E3232] font-medium">
                        How to Spend the Perfect Day on Croatia's Most Magical
                        Island
                      </h1>
                      <div className="text-[11px] text-[#3E3232BF] mt-1">
                        Subhead
                      </div>
                    </div>
                  </div>

                  {/* Card-4  */}

                  <div className="flex items-center gap-[10px] cursor-pointer hover:shadow-sm">
                    <img
                      src="/public/featured-food.png"
                      alt=""
                      className="w-[87px] h-[87px] rounded-xl"
                    />
                    <div>
                      <h1 className="text-[12px] text-[#3E3232] font-medium">
                        How to Spend the Perfect Day on Croatia's Most Magical
                        Island
                      </h1>
                      <div className="text-[11px] text-[#3E3232BF] mt-1">
                        Subhead
                      </div>
                    </div>
                  </div>

                  {/* Card-5  */}

                  <div className="flex items-center gap-[10px] cursor-pointer hover:shadow-sm">
                    <img
                      src="/public/featured-sport.png"
                      alt=""
                      className="w-[87px] h-[87px] rounded-xl"
                    />
                    <div>
                      <h1 className="text-[12px] text-[#3E3232] font-medium">
                        How to Spend the Perfect Day on Croatia's Most Magical
                        Island
                      </h1>
                      <div className="text-[11px] text-[#3E3232BF] mt-1">
                        Subhead
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="public flex lg:flex-col sm:flex-row flex-col gap-5">
                <div className="img-1 sm:w-[320px] w-full h-[150px] rounded-xl relative cursor-pointer shadow-sm hover:shadow-md">
                  <img
                    src="/public/advertising.png"
                    alt=""
                    className="sm:w-[320px] w-full h-[150px] object-cover rounded-xl flex items-center justify-center"
                  />
                  <div className="absolute sm:top-1/3 sm:right-1/3 top-1/3 right-2/5">
                    <h4 className="text-xl font-medium text-white">
                      Advertising
                    </h4>
                    <div className="text-[12px] font-medium text-white">
                      360 px * 180px
                    </div>
                  </div>
                </div>

                <div className="img-2 sm:w-[320px] w-full h-[150px] rounded-xl relative cursor-pointer shadow-sm hover:shadow-md">
                  <img
                    src="/public/advertising2.png"
                    alt=""
                    className="sm:w-[320px] w-full h-[150px] object-cover rounded-xl flex items-center justify-center"
                  />
                  <div className="absolute sm:top-1/3 sm:right-1/3 top-1/3 right-2/5">
                    <h4 className="text-xl font-medium text-white">
                      Advertising
                    </h4>
                    <div className="text-[12px] font-medium text-white">
                      360 px * 180px
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="ml-7 mt-10">
                <div className=" flex items-center gap-[6px] text-xl font-medium text-[#3E3232]">
                  <div className="w-[4px] h-[10px] rounded-xl bg-[#F81539]"></div>
                  Comments
                </div>
                <div className="w-full sm:h-[270px] small:h-[350px] h-[400px] rounded-xl shadow-sm bg-[#F5F5F5] mt-5">
                  <div className="header flex justify-between small:flex-row flex-col small:gap-0 gap-3 p-3">
                    <div className="flex items-center gap-3">
                      <img
                        src="/public/Jon.png"
                        alt=""
                        className="w-[60px] h-[60px] rounded-xl"
                      />
                      <div>
                        <h1 className="text-[16px] font-medium text-[#3E3232]">
                          Jon Kantner
                        </h1>
                        <div className="flex items-center gap-2">
                          <div>
                            <FaRegCalendar className="text-[#3E323280]" />
                          </div>
                          <div className="text-[#3E3232BF] text-sm font-medium">
                            Sep 11, 2025
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="flex items-center justify-center gap-[8px] w-[99px] h-[40px] cursor-pointer shadow-sm hover:shadow-md rounded-xl pb-1 bg-[#3E32320D]">
                        <FaShare size={14} className="text-[#3E323280]" />{" "}
                        <div className="text-sm font-medium text-[#3E3232BF]">
                          Reply
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-sm p-3 text-[#000000BF]">
                    When you are ready to indulge your sense of excitement,
                    check out the range of water- sports opportunities at the
                    resort's on-site water-sports center. Want to leave your
                    stress on the water? The resort has kayaks, paddleboards, or
                    the low-key pedal boats.
                  </div>
                </div>

                <div className="flex items-center justify-center mt-[-90px]">
                  <div className="w-[80%] sm:h-[350px] small:h-[400px] rounded-xl bg-white shadow-[0px_1px_10px_2px_#00000012] flex flex-col justify-between">
                    <div className="card-1 p-3 overflow-hidden mb-4">
                      <div className="flex items-center gap-3">
                        <img
                          src="/public/Cassie.png"
                          alt=""
                          className="w-[60px] h-[60px] rounded-xl"
                        />
                        <div>
                          <h1 className="text-[16px] font-medium text-[#3E3232]">
                            Cassie Evans
                          </h1>
                          <div className="flex items-center gap-2">
                            <div>
                              <FaRegCalendar className="text-[#3E323280]" />
                            </div>
                            <div className="text-[#3E3232BF] text-sm font-medium">
                              Sep 11, 2025
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-[#000000BF] capitalize p-2">
                        a river or a lake island may be called an eyot or ait,
                        and a small island off the coast may be called a holm.
                        Sedimentary islands in the Ganges delta are called
                        chars. A grouping of geographically or geologically
                        related islands, such as the Philippines, is referred to
                        as an archipelago.{" "}
                      </div>
                    </div>
                    <div className="card-2 p-3 overflow-hidden mb-1">
                      <div className="flex items-center gap-3">
                        <img
                          src="/public/header-img.png"
                          alt=""
                          className="w-[60px] h-[60px] rounded-xl"
                        />
                        <div>
                          <h1 className="text-[16px] font-medium text-[#3E3232]">
                            Behzad Pashaei
                          </h1>
                          <div className="flex items-center gap-2">
                            <div>
                              <FaRegCalendar className="text-[#3E323280]" />
                            </div>
                            <div className="text-[#3E3232BF] text-sm font-medium">
                              Sep 11, 2025
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-sm text-[#000000BF] capitalize p-2 pb-3">
                        Oceanic islands are often considered to be islands that
                        do not sit on continental shelves. Other definitions
                        limit the term to only refer to islands with no past
                        geological connections to a continental landmass.The
                        vast majority are volcanic in origin, such as Saint
                        Helena in the South Atlantic Ocean.{" "}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full pb-2 rounded-xl bg-[#F5F5F5] ml-7 mt-10">
                  <div className="header flex justify-between p-3">
                    <div className="flex items-center gap-3">
                      <img
                        src="/public/Patricia.png"
                        alt=""
                        className="w-[60px] h-[60px] rounded-xl"
                      />
                      <div>
                        <h1 className="text-[16px] font-medium text-[#3E3232]">
                          Patricia
                        </h1>
                        <div className="flex items-center gap-2">
                          <div>
                            <FaRegCalendar className="text-[#3E323280]" />
                          </div>
                          <div className="text-[#3E3232BF] text-sm font-medium">
                            Sep 11, 2025
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-center gap-[8px] w-[99px] h-[40px] cursor-pointer shadow-sm hover:shadow-md rounded-xl pb-1 bg-[#3E32320D]">
                      <FaShare size={14} className="text-[#3E323280]" />{" "}
                      <div className="text-sm font-medium text-[#3E3232BF]">
                        Reply
                      </div>
                    </div>
                  </div>
                  <div className="text-sm px-5 text-[#000000BF]">
                    An island (or isle) is an isolated piece of habitat that is
                    surrounded by a dramatically different habitat, such as
                    water. Very small islands such as emergent land features on
                    atolls can be called islets, skerries, cays or keys.
                  </div>
                </div>

                <div className="ml-7 mt-10">
                  <div className="flex items-center gap-[6px] text-xl font-medium text-[#3E3232]">
                    <div className="w-[4px] h-[10px] rounded-xl bg-[#F81539]"></div>
                    Add A Comment
                  </div>
                  <div className="add-comment flex lg:items-center flex-col lg:flex-row gap-3">
                    <div className="row-1 w-screen">
                      <div className="name">
                        <label
                          htmlFor="name"
                          className="text-[16px] font-medium text-[#3E3232]"
                        >
                          Name
                        </label>{" "}
                        <br />
                        <input
                          type="text"
                          id="name"
                          className="bg-[#F5F5F5] rounded-xl mt-2 w-[90%] lg:w-[420px] h-[48px] focus:outline-none p-3 text-[#3E3232BF] text-sm"
                        />
                      </div>
                      <div className="website">
                        <label
                          htmlFor="website"
                          className="text-[16px] font-medium text-[#3E3232]"
                        >
                          Website
                        </label>{" "}
                        <br />
                        <input
                          type="text"
                          id="website"
                          className="bg-[#F5F5F5] rounded-xl mt-2 w-[90%] lg:w-[420px] h-[48px] focus:outline-none p-3 text-[#3E3232BF] text-sm"
                        />
                      </div>
                      <div className="email">
                        <label
                          htmlFor="email"
                          className="text-[16px] font-medium text-[#3E3232]"
                        >
                          Email
                        </label>{" "}
                        <br />
                        <input
                          type="email"
                          id="email"
                          className="bg-[#F5F5F5] rounded-xl mt-2 w-[90%] lg:w-[420px] h-[48px] focus:outline-none p-3 text-[#3E3232BF] text-sm"
                        />
                      </div>
                    </div>

                    <div className="row-2">
                      <div className="comment">
                        <label
                          htmlFor="comment"
                          className="text-[16px] font-medium text-[#3E3232]"
                        >
                          Comment
                        </label>{" "}
                        <br />
                        <textarea
                          id="comment"
                          placeholder="Search Anything"
                          className="bg-[#F5F5F5] rounded-xl mt-2 w-full lg:min-w-[425px] min-h-[210px] lg:max-w-[425px] max-h-[210px] focus:outline-none p-3 text-[#3E3232BF] text-sm"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="ml-7 mt-10 md:flex items-center gap-2 w-full ">
                  <div className="w-full sm:h-[48px] rounded-xl flex sm:flex-row flex-col sm:items-center gap-2 sm:justify-between bg-[#F5F5F5] pr-1 pl-3">
                    <div className="text capitalize text-[16px] font-medium text-[#3E3232]">
                      Rate the usefulness of the article
                    </div>

                    <div className="icons flex items-center justify-center">
                      <div className="w-[40px] h-[40px] rounded-xl flex items-center justify-center">
                        <FaRegFaceAngry className="w-[16px] h-[16px] cursor-pointer text-[#FC5C65]" />
                      </div>
                      <div className="w-[40px] h-[40px] rounded-xl flex items-center justify-center">
                        <FaRegFaceMeh className="w-[16px] h-[16px] cursor-pointer text-[#FA8231]" />
                      </div>
                      <div className="w-[40px] h-[40px] rounded-xl flex items-center justify-center">
                        <FaRegFaceGrinWide className="w-[16px] h-[16px] cursor-pointer text-[#F7B731]" />
                      </div>
                      <div className="w-[40px] h-[40px] rounded-xl flex items-center justify-center">
                        <FaRegFaceGrinHearts className="w-[16px] h-[16px] cursor-pointer text-[#45AAF2]" />
                      </div>
                      <div className="flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md gap-[8px] rounded-xl bg-[#26DE81] w-[98px] h-[40px]">
                        <div className="text-white">
                          <FaRegFaceGrinStars />
                        </div>
                        <div className="text-white">Good</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end md:mt-0 mt-2">
                    <div className="flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md w-[161px] h-[48px] rounded-xl bg-[#F81539BF] text-white gap-[8px]">
                      <div className="text-sm">
                        <FaRegCommentDots />
                      </div>
                      <div className="text-sm font-medium">Send Comment</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="aside lg:w-[30%] w-full lg:flex flex-col gap-[25px] hidden">
            <div className="btn flex items-center justify-between">
              <button className="share flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md gap-[6px] w-[85px] h-[40px] pb-1 rounded-xl bg-[#F5F5F5]">
                <FiSend className="text-[#3E323280]" />{" "}
                <div className="text-[#3E3232BF] font-medium text-sm">
                  Share
                </div>
              </button>
              <button className="share flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md gap-[6px] w-[100px] h-[40px] pb-1 rounded-xl bg-[#F5F5F5]">
                <MdOutlineBookmarkBorder
                  size={20}
                  className="text-[#3E323280]"
                />{" "}
                <div className="text-[#3E3232BF] font-medium text-sm">
                  Marking
                </div>
              </button>
              <button className="share flex items-center justify-center cursor-pointer shadow-sm hover:shadow-md gap-[6px] w-[110px] h-[40px] pb-1 rounded-xl bg-[#F5F5F5]">
                <FaRegCommentDots className="text-[#3E323280]" />{" "}
                <div className="text-[#3E3232BF] font-medium text-sm">
                  Comment
                </div>
              </button>
            </div>
            <div className="w-[320px] h-[100px] flex justify-between bg-[#F5F5F5] rounded-xl p-2">
              <div className="img flex gap-2">
                <img
                  src="/public/Louis.png"
                  alt=""
                  className="w-[80px] h-[80px] rounded-xl"
                />
                <div>
                  <h3 className="text-[16px] font-medium text-[#3E3232]">
                    Louis Hoebregts
                  </h3>
                  <div className="text-sm font-medium text-white bg-[#F81539BF] w-[105px] h-[40px] cursor-pointer shadow-sm hover:shadow-md rounded-xl flex items-center justify-center gap-[8px] pr-2">
                    <FaPlus size={12} /> Follow
                  </div>
                </div>
              </div>
              <div className="post text-[#3E3232BF] text-[12px]">27 post</div>
            </div>
            <div className="w-[320px] h-[100px] bg-[#F5F5F5] rounded-xl p-2">
              <div className="w-[54px] flex items-center gap-[6px] text-xl font-medium text-[#3E3232]">
                <div className="w-[4px] h-[10px] rounded-xl bg-[#F81539]"></div>
                Tags
              </div>
              <div className="text-[12px] font-medium text-[#3E3232BF] flex gap-[10px] flex-wrap">
                <div>Montenegro</div> <div>Visit Croatia</div>{" "}
                <div>Luxury Travel</div> <div>Travel Log</div>{" "}
                <div>Paradise Island</div> <div>Travel Info</div>
              </div>
            </div>
            <div className="w-[320px] h-[580px] bg-[#F5F5F5] rounded-xl p-2">
              <div className="w-[90px] flex items-center gap-[6px] text-xl font-medium text-[#3E3232] mt-1">
                <div className="w-[4px] h-[10px] rounded-xl bg-[#F81539]"></div>
                Top Post
              </div>

              {/* Cards  */}

              <div className="cards flex flex-col gap-4 mt-5">
                {/* Card-1  */}

                <div className="flex items-center gap-[10px] cursor-pointer hover:shadow-sm">
                  <img
                    src="/public/featured-car.png"
                    alt=""
                    className="w-[87px] h-[87px] rounded-xl"
                  />
                  <div>
                    <h1 className="text-[12px] text-[#3E3232] font-medium">
                      How to Spend the Perfect Day on Croatia's Most Magical
                      Island
                    </h1>
                    <div className="text-[11px] text-[#3E3232BF] mt-1">
                      Subhead
                    </div>
                  </div>
                </div>

                {/* Card-2  */}

                <div className="flex items-center gap-[10px] cursor-pointer hover:shadow-sm">
                  <img
                    src="/public/frog.png"
                    alt=""
                    className="w-[87px] h-[87px] rounded-xl"
                  />
                  <div>
                    <h1 className="text-[12px] text-[#3E3232] font-medium">
                      How to Spend the Perfect Day on Croatia's Most Magical
                      Island
                    </h1>
                    <div className="text-[11px] text-[#3E3232BF] mt-1">
                      Subhead
                    </div>
                  </div>
                </div>

                {/* Card-3  */}

                <div className="flex items-center gap-[10px] cursor-pointer hover:shadow-sm">
                  <img
                    src="/public/featured-dance.png"
                    alt=""
                    className="w-[87px] h-[87px] rounded-xl"
                  />
                  <div>
                    <h1 className="text-[12px] text-[#3E3232] font-medium">
                      How to Spend the Perfect Day on Croatia's Most Magical
                      Island
                    </h1>
                    <div className="text-[11px] text-[#3E3232BF] mt-1">
                      Subhead
                    </div>
                  </div>
                </div>

                {/* Card-4  */}

                <div className="flex items-center gap-[10px] cursor-pointer hover:shadow-sm">
                  <img
                    src="/public/featured-food.png"
                    alt=""
                    className="w-[87px] h-[87px] rounded-xl"
                  />
                  <div>
                    <h1 className="text-[12px] text-[#3E3232] font-medium">
                      How to Spend the Perfect Day on Croatia's Most Magical
                      Island
                    </h1>
                    <div className="text-[11px] text-[#3E3232BF] mt-1">
                      Subhead
                    </div>
                  </div>
                </div>

                {/* Card-5  */}

                <div className="flex items-center gap-[10px] cursor-pointer hover:shadow-sm">
                  <img
                    src="/public/featured-sport.png"
                    alt=""
                    className="w-[87px] h-[87px] rounded-xl"
                  />
                  <div>
                    <h1 className="text-[12px] text-[#3E3232] font-medium">
                      How to Spend the Perfect Day on Croatia's Most Magical
                      Island
                    </h1>
                    <div className="text-[11px] text-[#3E3232BF] mt-1">
                      Subhead
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="public flex flex-col gap-5">
              <div className="img-1 w-[320px] h-[150px] rounded-xl relative cursor-pointer shadow-sm hover:shadow-md">
                <img
                  src="/public/advertising.png"
                  alt=""
                  className="w-[320px] h-[150px] rounded-xl flex items-center justify-center"
                />
                <div className="absolute top-1/3 right-1/3">
                  <h4 className="text-xl font-medium text-white">
                    Advertising
                  </h4>
                  <div className="text-[12px] font-medium text-white">
                    360 px * 180px
                  </div>
                </div>
              </div>

              <div className="img-2 w-[320px] h-[150px] rounded-xl relative cursor-pointer shadow-sm hover:shadow-md">
                <img
                  src="/public/advertising2.png"
                  alt=""
                  className="w-[320px] h-[150px] rounded-xl flex items-center justify-center"
                />
                <div className="absolute top-1/3 right-1/3">
                  <h4 className="text-xl font-medium text-white">
                    Advertising
                  </h4>
                  <div className="text-[12px] font-medium text-white">
                    360 px * 180px
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="related-posts lg:mx-8 sm:mx-6 small:mx-3 mx-1 mt-15">
        <RelatedPost />
      </div>
      <Footer />
    </>
  );
}

export default Featured;
