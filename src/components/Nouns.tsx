import { Noun } from "./Noun";

type Props = {
	nouns: Noun[];
};

type Noun = {
	article: string;
	singular: string;
	plural: string;
};

export const Nouns = (props: Props) => {
	const { nouns } = props;
	return (
		<div className="nouns">
			{nouns.map((noun: Noun) => {
				return (
					<Noun noun={noun} />	
				);
			})}
		</div>
	);
};
