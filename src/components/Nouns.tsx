import { Dispatch, SetStateAction } from 'react';
import { Noun } from "./Noun";
import { INoun } from "../types";

interface IProps {
	nouns: INoun[];
	setNouns: Dispatch<SetStateAction<INoun[]>>;
};

export const Nouns = (props: IProps) => {
	const { nouns, setNouns } = props;
	return (
		<div className="nouns">
			{nouns.map((noun: INoun, index) => {
				return (
					<Noun noun={noun} nouns={nouns} setNouns={setNouns} key={index} />	
				);
			})}
		</div>
	);
};
