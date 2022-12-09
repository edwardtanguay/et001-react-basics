import { TNoun } from '../types';

type Props = {
	noun: TNoun;
}

export const Noun = (props: Props) => {
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
