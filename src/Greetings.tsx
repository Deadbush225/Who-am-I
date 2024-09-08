import "./Greetings.scss";
import { Socials } from "./ContactMe";

export default function Greetings() {
	return (
		<div className="introduction">
			I'm <div className="inline-bold cl-orange">Eliazar Inso</div>
			<br></br>
			<div className="subtitle">
				an Aspiring Data Analyst & Software Developer
			</div>
			<div className="right-align">
				<Socials vertical={true}></Socials>
			</div>
		</div>
	);
}
