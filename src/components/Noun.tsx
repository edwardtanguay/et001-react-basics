import { INoun } from '../interfaces';
import { useContext } from 'react';
import { AppContext } from '../AppContext';

interface IProps {
	noun: INoun;
}

export const Noun = (props: IProps) => {
	const { nouns, setNouns } = useContext(AppContext);
	const { noun } = props;

	const handleToggleFlashcard = (noun: INoun) => {
		noun.backIsShowing = !noun.backIsShowing;
		setNouns([...nouns]);
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
