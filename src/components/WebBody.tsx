import HeaderProfile from "./HeaderProfile";
import Bookmarkmenu from "./Bookmarkmenu";
import CardLayout from "./CardLayout";

export default function WebBody() {
  return (
    <div className="px-96 py-8">
        <HeaderProfile/>
        <Bookmarkmenu icon="&#9997;" title="Selected Work" subTitle="View Dribbble"/>
        <CardLayout/>
    </div>
  )
}
