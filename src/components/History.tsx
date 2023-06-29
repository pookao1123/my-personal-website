

export default function History({date,topic,sub,content}:any) {
  return (
    <div className="grid grid-rows-3 grid-cols-3 w-[300px] mt-4 ">
        <p className="text-xl text-gray-500 col-span-3">{date}</p>
        <p className="text-md font-bold">{topic}</p><p className="col-span-2">{sub}</p>
        <p className="col-span-3">{content}</p>
    </div>
  )
}
