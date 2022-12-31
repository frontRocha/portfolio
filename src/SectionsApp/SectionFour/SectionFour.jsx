import { Skills } from "../../Data/Skill";

export default function SectionFour() {
    return(
        <section>
            {Skills.map((item) => (
                <img src={item.img}/>
            ))}
        </section>
    )
}