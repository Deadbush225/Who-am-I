// import Block from "./Block";
import "./ContactMe.scss";

import mail from "./assets/Contacts/mail.png";
import call from "./assets/Contacts/call.png";
import location from "./assets/Contacts/location.png";

import facebook from "./assets/Contacts/facebook.png";
import github from "./assets/Contacts/github.png";
import linkedin from "./assets/Contacts/linked-in.png";
import twitter from "./assets/Contacts/twitter.png";

import { PropsWithChildren } from "react";
// import whatsapp from "./assets/Contacts/whatsapp.png";

interface ContactBlockProps {
	icon: string;
	info: string;
}

interface SocialsProps {
	vertical?: boolean;
	halfOffset?: boolean;
}

function BorderedDesign(props: PropsWithChildren) {
	return (
		<div className="border-container">
			<div className="border"></div>
			{props.children}
			<div className="border"></div>
		</div>
	);
}

function ContactBlock(props: ContactBlockProps) {
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

export function Socials(props: SocialsProps) {
	return (
		<>
			<div
				className={`flex-center-h socials-container ${
					props.vertical ? `vertical` : ""
				} ${props.halfOffset ? `half-offset` : ""}`}
			>
				<a href="https://www.facebook.com/eliazar.inso.9/" target="_blank">
					<img
						src={facebook}
						alt={facebook}
						className="social-icon facebook"
					></img>
				</a>
				<a href="https://x.com/elizar251" target="_blank">
					<img
						src={twitter}
						alt={twitter}
						className="social-icon twitter"
					></img>
				</a>
				<a href="https://github.com/Deadbush225" target="_blank">
					<img src={github} alt={github} className="social-icon github"></img>
				</a>
				<a
					href="https://www.linkedin.com/in/eliazar-inso-0342b7210/"
					target="_blank"
				>
					<img
						src={linkedin}
						alt={linkedin}
						className="social-icon linkedin"
					></img>
				</a>
				{/* <img
					src={whatsapp}
					alt={whatsapp}
					className="social-icon whatsapp"
				></img> */}
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
