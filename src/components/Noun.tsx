import { Dispatch, SetStateAction } from 'react';
import { INoun } from '../types';

interface IProps {
	noun: INoun;
	nouns: INoun[];
	setNouns: Dispatch<SetStateAction<INoun[]>>;
}

export const Noun = (props: IProps) => {
	const { noun, nouns, setNouns } = props;

	const handleToggleFlashcard = (noun: INoun) => {
		noun.backIsShowing = !noun.backIsShowing;
		setNouns(nouns);
	};

	return (
		<div className="noun">
			<div className="front" onClick={() => handleToggleFlashcard(noun)}>
				{noun.singular}
			</div>
			{noun.backIsShowing && (
				<div className="back">
					<div>
						{noun.article} {noun.singular}
					</div>
					<div>{noun.plural}</div>
				</div>
			)}
		</div>
	);
};
