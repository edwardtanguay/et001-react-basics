import { Noun } from "./Noun";
import { INoun } from "../types";

interface IProps {
	nouns: INoun[];
};

export const Nouns = (props: IProps) => {
	const { nouns } = props;
	return (
		<div className="nouns">
			{nouns.map((noun: INoun, index) => {
				return (
					<Noun noun={noun} key={index} />	
				);
			})}
		</div>
	);
};
