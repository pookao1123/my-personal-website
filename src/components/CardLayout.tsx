import Card from "./Card"
import CardHeader from "./CardHeader"
export default function CardLayout() {
  return (
    <>
      <div className='grid grid-cols-2 gap-10 mb-6'>
          <CardHeader topic="topic1" src="/src/img/w2.jpg"/>
          <Card topic="topic2" src="/src/img/w2.jpg" />
          <Card topic="topic3" src="/src/img/w2.jpg" />
          <Card topic="topic4" src="/src/img/w2.jpg" />
          <Card topic="topic5" src="/src/img/w2.jpg" />
          <Card topic="topic6" src="/src/img/w2.jpg" />
          <Card topic="topic7" src="/src/img/w2.jpg" />
      </div>
    </>
  )
}
