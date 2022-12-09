import { Noun } from "./Noun";
import { INoun } from "../types";

type Props = {
	nouns: INoun[];
};

export const Nouns = (props: Props) => {
	const { nouns } = props;
	return (
		<div className="nouns">
			{nouns.map((noun: INoun) => {
				return (
					<Noun noun={noun} />	
				);
			})}
		</div>
	);
};
