
export default function Card({topic,src}:any) {
  return (
    <div className="col-span-1 w-[495px] h-[550px]">
        <div className="flex flex-col justify-between h-[163px] m-10">
            <p className="text-xl font-extrabold mb-4">{topic}</p>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsam at iste nemo quis, nostrum ipsum voluptate, omnis illum totam exercitationem incidunt aspernatur cum amet libero quo. Consequatur, fuga tempora.</p>
            <div className="flex items-center justify-between w-32 mt-3">
                <a className="" href="#">Coming Soon</a>
                <span>&#127754;</span>
            </div>
        </div>
        <img className="h-[329px]" src={src} alt="image" />
    </div>
  )
}
