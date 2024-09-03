// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import MenuBar from "./MenuBar.tsx";
import Greetings from "./Greetings.tsx";
import Block from "./Block.tsx";
import SkillTiles from "./SkillTiles.tsx";
import PortfolioTiles from "./PortfolioTiles.tsx";
import ContactMe from "./ContactMe.tsx";

import cpp from "./assets/cpp.png";
import python from "./assets/python.png";
import js from "./assets/js.png";
import typescript from "./assets/typescript.png";
import powershell from "./assets/powershell.png";
import qt from "./assets/qt.png";
import svelte from "./assets/svelte.svg";
import react from "./assets/react.svg";
import html from "./assets/html.png";
import vite from "./assets/vite.svg";
import css from "./assets/css.png";

import "./App.scss";

function App() {
	//   const [count, setCount] = useState(0)

	const skills = [
		{
			name: "Python",
			id: 1,
			link: python,
		},
		{
			name: "html",
			id: 8,
			link: html,
		},
		{
			name: "css",
			id: 10,
			link: css,
		},
		{
			name: "Qt",
			id: 5,
			link: qt,
		},
		{
			name: "C++",
			id: 0,
			link: cpp,
		},
		{
			name: "Powershell",
			id: 4,
			link: powershell,
		},
		{
			name: "Javascript",
			id: 2,
			link: js,
		},
		{
			name: "Typescript",
			id: 3,
			link: typescript,
		},
		{
			name: "Svelte",
			id: 6,
			link: svelte,
		},
		{
			name: "React",
			id: 7,
			link: react,
		},
		{
			name: "Vite",
			id: 9,
			link: vite,
		},
	];

	return (
		<div className="page-wrapper">
			<div className="firstPage">
				<MenuBar></MenuBar>
				<Greetings></Greetings>
			</div>
			<div className="page hasContent" id="About">
				<Block>
					<div className="sectionTitle">About</div>
				</Block>
				<div className="about-message-wrapper">
					<div className="em-dash"></div>
					<div className="about-message">
						Started on year 2020, my curiosity about automation lead me to try
						out different scripting programs for automating tedious tasks. I've
						built a couple projects during that time and continues to{" "}
						<span className="orangeText">
							practice and sharpen my skillset to be an employable Software
							Engineer
						</span>
						. I do enjoy the luxury provided by open source software, as such, I
						look forward in returning the favor to the community by contributing
						to the vast collection of freeware programs.
					</div>
				</div>
			</div>
			<div className="page hasContent">
				<Block align="center">
					<div className="sectionSubTitle">My Skills</div>
				</Block>
				<SkillTiles skills={skills}></SkillTiles>
			</div>
			<div className="page hasContent">
				{/* <div className="page"> */}
				<Block align="center">
					<div className="sectionSubTitle">Portfolio</div>
				</Block>
				<PortfolioTiles></PortfolioTiles>
			</div>
			{/* </div> */}
			<div className="page">
				<ContactMe></ContactMe>
			</div>
			{/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
		</div>
	);
}

export default App;
