import { INoun } from '../types';

interface IProps {
	noun: INoun;
}

export const Noun = (props: IProps) => {
	const { noun } = props;
	return (
		<div className="noun">
			<div className="line1">
				{noun.article} {noun.singular}
			</div>
			<div className="line2">{noun.plural}</div>
		</div>
	);
};
