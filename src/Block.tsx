import { PropsWithChildren } from "react";

interface BlockProps extends PropsWithChildren {
	align?: string;
}

export default function Block(props: BlockProps) {
	return (
		<div style={{ justifyContent: props.align }} className="block">
			{props.children}
		</div>
	);
}
