// import Block from "./Block";
import "./ContactMe.scss";

import mail from "./assets/Contacts/mail.png";
import call from "./assets/Contacts/call.png";
import location from "./assets/Contacts/location.png";

import facebook from "./assets/Contacts/facebook.png";
import github from "./assets/Contacts/github.png";
import linkedin from "./assets/Contacts/linked-in.png";
import twitter from "./assets/Contacts/twitter.png";
import whatsapp from "./assets/Contacts/whatsapp.png";

function BorderedDesign(props) {
	return (
		<div className="border-container">
			<div className="border"></div>
			{props.children}
			<div className="border"></div>
		</div>
	);
}

function ContactBlock(props) {
	// console.log(props.children);
	// let icon_path = `./assets/Contacts/${props.icon}.png`;

	return (
		<div className="contact-block">
			{/* {props!.children} */}
			<img src={props.icon} alt={props.icon} />
			<div className="info">{props.info}</div>
		</div>
	);
}

export function Socials(props) {
	return (
		<>
			<div
				className={`flex-center-h socials-container ${
					props.vertical ? `vertical` : ""
				} ${props.halfOffset ? `half-offset` : ""}`}
			>
				<img
					src={facebook}
					alt={facebook}
					className="social-icon facebook"
				></img>
				<img src={twitter} alt={twitter} className="social-icon twitter"></img>
				<img src={github} alt={github} className="social-icon github"></img>
				<img
					src={linkedin}
					alt={linkedin}
					className="social-icon linkedin"
				></img>
				<img
					src={whatsapp}
					alt={whatsapp}
					className="social-icon whatsapp"
				></img>
			</div>
		</>
	);
}

export default function ContactMe() {
	return (
		// <Block align="center">
		<>
			<BorderedDesign>
				<div className="sectionTitle noSpacing contact-title">Contact Me</div>
			</BorderedDesign>
			<div className="flex-center-h contact-block-container">
				<ContactBlock
					icon={mail}
					info="eliazar225ninso@gmail.com"
				></ContactBlock>
				<ContactBlock icon={call} info="(+63) 604 597 583"></ContactBlock>
				<ContactBlock icon={location} info="Metro Manila"></ContactBlock>
			</div>

			<BorderedDesign>
				{/* <div className="sectionTitle noSpacing contact-title">Contact Me</div> */}
				<Socials halfOffset={true}></Socials>
			</BorderedDesign>
		</>
		// </Block>
	);
}
