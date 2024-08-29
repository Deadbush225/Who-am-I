import profileLogo from "./assets/jdenticon.svg";
import "./MenuBar.scss";

export default function MenuBar() {
	return (
		<div className="hBoxLayout flex-Hcenter">
			<img src={profileLogo} alt="Profile Icon" id="profileIcon" />

			<div className="hBoxLayout flex-Vcenter">
				<div className="menuItem" id="aboutMe">
					About me
				</div>
				<div className="menuItem" id="contact">
					Contact
				</div>
			</div>
		</div>
	);
}
