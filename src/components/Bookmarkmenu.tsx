export default function Bookmarkmenu({icon , title , subTitle}:any) {
    let arrow = <span>&#8594;</span> ;
    subTitle === "" ? arrow = <span></span> : arrow = <span>&#8594;</span> ;

  return (
    <div className="flex justify-between text-lg my-8 border-b-2  h-16">
        <div className="flex justify-around w-48 h-16" >
            <span className="items-center text-3xl text-center self-center">{icon}</span>
            <p className="font-bold self-center">{title}</p>
        </div>
        <div className="flex justify-around w-48 h-16 items-center">
            <p>{subTitle}</p>
            {arrow}
        </div>
    </div>
  )
}
