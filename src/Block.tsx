export default function Block(props) {
	return (
		<div style={{ justifyContent: props.align }} className="block">
			{props.children}
		</div>
	);
}
