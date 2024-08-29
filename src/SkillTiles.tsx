import { ReactElement } from "react";
import "./SkillTiles.scss";

export default function SkillTiles(props) {
	const col: number = 4;

	const skillMatrix: ReactElement[][] = [];

	let row: ReactElement[] = [];

	// console.log(props.skills.length);

	let col_index = 0;
	for (let i = 0; i < props.skills.length; i++) {
		console.log(i);
		row.push(props.skills[i]);
		col_index++;

		if (
			(col_index % col == 0 && col_index != 0) ||
			i + 1 == props.skills.length
		) {
			skillMatrix.push(row);
			console.log("PUSHING");
			row = [];
			col_index = 0;
			// continue;
		}

		// const cell: ReactElement = (
		// 	<div key={props.skills[i].id}>{props.skills[i].name}</div>
		// );
		// row.push(cell);
	}

	const skillTiles: ReactElement = (
		<div>
			{
				// skillMatrix.forEach((row) => {
				//     console.log(row)
				// });
				skillMatrix.map((e) => (
					<div className="row">
						{e.map((skill) => (
							<div key={skill.id} className="cell">
								<div>
									<img className="skill-image" src={skill.link} alt="" />
								</div>
								<div className="skill-text">{skill.name}</div>
							</div>
						))}
					</div>
				))
			}
		</div>
	);

	console.log(skillMatrix);

	// return <div>TEST</div>;
	return skillTiles;
}
