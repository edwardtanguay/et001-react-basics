type Props = {
	title?: string;
}

export const AppTitle = (props: Props) => {
	let { title } = props;
	title = title ? title : 'The German Nouns';
	return <h2>{title}</h2>;
};
