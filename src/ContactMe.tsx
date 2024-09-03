// import Block from "./Block";
import "./ContactMe.scss";

function BorderedDesign(props) {
	return (
		<div className="border-container">
			<div className="border"></div>
			{props.children}
			<div className="border"></div>
		</div>
	);
}

export default function ContactMe() {
	return (
		// <Block align="center">
		<BorderedDesign>
			<div className="sectionTitle noSpacing contact-title">Contact Me</div>
		</BorderedDesign>
		// </Block>
	);
}
