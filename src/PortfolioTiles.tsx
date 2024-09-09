import "./PortfolioTiles.scss";

export default function PortfolioTiles() {
	// interface project {
	// 	name: string;
	// 	link: string;
	// 	coverImage: string;
	// }

	// let projects: project[] = [{ name: "test", link: "http", coverImage: "s" }];
	const projects = [
		<a href="https://github.com/Deadbush225/PrintingRates">
			<img
				src="https://github-link-card.s3.ap-northeast-1.amazonaws.com/Deadbush225/PrintingRates.png"
				width="460px"
			></img>
		</a>,
		<a href="https://github.com/Deadbush225/RePhrase">
			<img
				src="https://github-link-card.s3.ap-northeast-1.amazonaws.com/Deadbush225/RePhrase.png"
				width="460px"
			></img>
		</a>,
		<a href="https://github.com/Deadbush225/DownloadSorter">
			<img
				src="https://github-link-card.s3.ap-northeast-1.amazonaws.com/Deadbush225/DownloadSorter.png"
				width="460px"
			></img>
		</a>,
		<a href="https://github.com/Deadbush225/Folder-Customizer">
			<img
				src="https://github-link-card.s3.ap-northeast-1.amazonaws.com/Deadbush225/Folder-Customizer.png"
				width="460px"
			></img>
		</a>,
	];

	return <div className="flex-center-h">{projects}</div>;
}
