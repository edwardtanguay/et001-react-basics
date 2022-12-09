export const Nouns = ({nouns}) => {
	return (
			<div className="nouns">
				{nouns.map((noun) => {
					return (
						<div className="noun">
							<div className="line1">
								{noun.article} {noun.singular}
							</div>
              <div className="line2">
                {noun.plural}
              </div>
						</div>
					);
				})}
			</div>
	)
}