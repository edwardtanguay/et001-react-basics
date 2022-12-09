type Noun = {
	article: string;
	singular: string;
	plural: string;
};

type Props = {
	noun: Noun;
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
