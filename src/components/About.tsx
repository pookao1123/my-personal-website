import History from "./History"

export default function About() {
  return (
    <div className="grid grid-cols-2 gap-7">
        <div className="grid grid-cols-1 grid-row-4 gap-2">
            <p>My Story</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi ad iusto molestiae sequi magnam! Sint unde quasi similique impedit amet vel modi, distinctio, repellendus dolores itaque maiores tenetur aspernatur qui?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus a illum, quaerat facilis officia eligendi? Architecto, assumenda quo ab tempora, exercitationem, obcaecati enim unde perspiciatis laboriosam autem maxime officiis eligendi!</p>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, earum error laborum nam aliquid, vitae debitis adipisci impedit, exercitationem ea animi in nostrum fugiat fuga quae dolore molestiae odit possimus.
            </p>
        </div>
        <div className="grid grid-cols-1 grid-rows-5">
            <p>Where I've Worked</p>
            <History date="2021 - present" topic="Grindr" sub="Seattle, WA (Remote)" content="Senior Product Designer"/>
            <History date="2021 - present" topic="Grindr" sub="Seattle, WA (Remote)" content="Senior Product Designer"/>
            <History date="2021 - present" topic="Grindr" sub="Seattle, WA (Remote)" content="Senior Product Designer"/>
            <History date="2021 - present" topic="Grindr" sub="Seattle, WA (Remote)" content="Senior Product Designer"/>
            <History date="2021 - present" topic="Grindr" sub="Seattle, WA (Remote)" content="Senior Product Designer"/>
        </div>
    </div>
  )
}
