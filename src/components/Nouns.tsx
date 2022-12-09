import { useContext } from 'react';
import { AppContext } from '../AppContext';
import { Noun } from './Noun';

export const Nouns = () => {
	const { nouns, setNouns } = useContext(AppContext);
	return (
		<div className="nouns">
			{nouns.map((noun, index) => {
				return (
					<Noun noun={noun} key={index} />	
				);
			})}
		</div>
	);
};
