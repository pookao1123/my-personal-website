

export default function History({date,topic,sub,content}:any) {
  return (
    <div className="flex flex-grow items-start">
        <p className="text-xl text-gray-500">{date}</p>
        <p className="text-md font-bold">{topic}   </p><p>{sub}</p>
        <p>{content}</p>
    </div>
  )
}
