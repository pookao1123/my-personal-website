import Card from "./Card"
export default function CardLayout() {
  return (
    <div className='grid grid-cols-2 gap-6'>
        <Card topic="topic1"/>
        <Card topic="topic2"/>
        <Card topic="topic3"/>
        <Card topic="topic4"/>
        <Card topic="topic5"/>
        <Card topic="topic6"/>
        <Card topic="topic7"/>
    </div>
  )
}
