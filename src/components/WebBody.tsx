import HeaderProfile from "./HeaderProfile";
import Bookmarkmenu from "./Bookmarkmenu";
import CardLayout from "./CardLayout";
import About from "./About";

export default function WebBody() {
  return (
    <div className="px-96 py-40">
        <HeaderProfile/>
        <Bookmarkmenu icon="&#9997;" title="Selected Work" subTitle="View Dribbble"/>
        <CardLayout/>
        <Bookmarkmenu icon="&#127891;" title="About" subTitle="View Linkedin"/>
        <About/>
    </div>
  )
}
