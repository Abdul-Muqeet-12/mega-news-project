import { Routes, Route } from "react-router";
import ScrollToTop from "./ScrollToTop";
import Home from "./Home";
import AllNewPost from "./AllNewPost";
import ContactUs from "./ContactUs";
import Featured from "./Featured";
import Category from "./Category";
import Category2 from "./category2";
import Category3 from "./Category3";
import Writer from "./Writer";
import ProfileMarked from "./ProfileMarked";
import ProfileMarked2 from "./ProfileMarked2";
import ProfileMarked3 from "./ProfileMarked3";
import ProfileSend from "./ProfileSend";
import SendVideo from "./SendVideo";
import ProfilePosts from "./ProfilePosts";
import AboutUs from "./AboutUs";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-posts" element={<AllNewPost />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/category" element={<Category />} />
        <Route path="/category2" element={<Category2 />} />
        <Route path="/category3" element={<Category3 />} />
        <Route path="/writer" element={<Writer />} />
        <Route path="/profile-marked" element={<ProfileMarked />} />
        <Route path="/profile-marked2" element={<ProfileMarked2 />} />
        <Route path="/profile-marked3" element={<ProfileMarked3 />} />
        <Route path="/profile-send" element={<ProfileSend />} />
        <Route path="/send-video" element={<SendVideo />} />
        <Route path="/profile-post" element={<ProfilePosts />} />
      </Routes>
    </>
  );
}

export default App;
