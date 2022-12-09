import { INoun } from '../types';

interface IProps {
	noun: INoun;
}

const handleToggleFlashcard = (noun: INoun) => {
	noun.backIsShowing = !noun.backIsShowing;
	console.log(noun.backIsShowing);
}

export const Noun = (props: IProps) => {
	const { noun } = props;
	return (
		<div className="noun">
			<div className="front" onClick={() => handleToggleFlashcard(noun)}>{noun.singular}</div>
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
