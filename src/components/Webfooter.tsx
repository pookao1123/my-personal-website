import Bookmarkmenu from "./Bookmarkmenu"

export default function Webfooter() {
  return (
    <div className="px-96 py-8 mb-52">
        <Bookmarkmenu icon="&#128170;" title="Contact" />
        <div className="grid grid-cols-2 ">
            <div className="grid grid-rows-3 h-[172px]">
                <p className="row-span-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo itaque architecto molestias deserunt distinctio? Magni, <a href="#">contact me via LinkedIn</a>.</p>
                <button className="row-span-2 p-8 bg-gray-900 rounded-md flex items-center justify-center h-6 w-[152px] text-white font-bold self-end">Contact Me</button>
            </div>
            <div className="flex h-[172px] space-x-5 ps-8">
                <img className="rounded-lg" src="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Telebox" />
                <img className="rounded-lg" src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Dog" />
            </div>
        </div>
    </div>
  )
}
