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
					<div className="noun">
						<div className="line1">
							{noun.article} {noun.singular}
						</div>
						<div className="line2">{noun.plural}</div>
					</div>
				);
			})}
		</div>
	);
};
