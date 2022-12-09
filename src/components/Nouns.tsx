import { Noun } from "./Noun";
import { TNoun } from "../types";

type Props = {
	nouns: TNoun[];
};

export const Nouns = (props: Props) => {
	const { nouns } = props;
	return (
		<div className="nouns">
			{nouns.map((noun: TNoun) => {
				return (
					<Noun noun={noun} />	
				);
			})}
		</div>
	);
};
