import { INoun } from '../types';

interface IProps {
	noun: INoun;
}

export const Noun = (props: IProps) => {
	const { noun } = props;
	return (
		<div className="noun">
			<div className="front">{noun.singular}</div>
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
