import profileLogo from "./assets/jdenticon.svg";
import "./MenuBar.scss";
import { scrollTo } from "./_helpers";

export default function MenuBar() {
	return (
		<div className="hBoxLayout flex-Hcenter">
			<img src={profileLogo} alt="Profile Icon" id="profileIcon" />

			<div className="hBoxLayout flex-Vcenter">
				<a className="menuItem" id="aboutMe" onClick={() => scrollTo("#About")}>
					About me
				</a>
				<div className="menuItem" id="contact">
					Contact
				</div>
			</div>
		</div>
	);
}
