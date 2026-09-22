import { paddingX } from "../LandingPage";
import AboutInnerSection from "./AboutInnerSection";
const innerSections = [
    "Home", "Calendar", "Tags", "Stats"
];
export default function AboutSection({ className = "", children, ...props }) {
    return (
        <div id="about" className={`${paddingX} border-b py-[5rem] md:py-[8rem] ${className}`} {...props}>
            <ul className="flex flex-col  lg:gap-[7rem] md:gap-[6rem] gap-[4rem] ">
                {innerSections.map((key, i) => <li key={i}><AboutInnerSection invert={i % 2 == 1} titleKey={key} /></li>)}
            </ul>
        </div>
    );
}