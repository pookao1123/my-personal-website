
export default function CardHeader({topic,src}:any) {
  return (
    <div className="w-full h-72 flex col-span-2 justify-between">
        <div className="flex flex-col justify-between h-[163px] m-10 w-[450px]">
            <p className="text-xl font-extrabold mb-4">{topic}</p>
            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ipsam at iste nemo quis, nostrum ipsum voluptate, omnis illum totam exercitationem incidunt aspernatur cum amet libero quo. Consequatur, fuga tempora.</p>
            <div className="flex items-center justify-between w-32 mt-3">
                <a className="font-bold" href="#">Coming Soon</a>
                <span>&#127754;</span>
            </div>
        </div>
        <img className="h-[329px] w-[450px] rounded-md" src={src} alt="image" />
    </div>
  )
}
