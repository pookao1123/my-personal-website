import icon from "/icon.svg"
export default function Navbar() {
  return (
    <nav className=" w-full fixed bg-white " style={{borderBottom : "lightgray solid 1px"}}>
      <div className="flex items-center justify-between px-96 py-8">
        <img src={icon} className="w-12" alt="icon" />
        <ul className="flex flex-row siz">
          <li className="mx-2">Home</li>
          <li className="mx-2">Work</li>
          <li className="mx-2">About</li>
          <li className="mx-2">Contact</li>
        </ul>
      </div>
    </nav>
  );
}

