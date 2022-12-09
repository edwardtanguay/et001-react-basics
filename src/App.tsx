import './App.scss';
import { AppTitle } from './components/AppTitle';
import { Nouns } from './components/Nouns';
import { useContext } from 'react';
import { AppContext } from './AppContext';

const App = () => {
	const { nouns, setNouns } = useContext(AppContext);
	const title = 'The React Basics';

	return (
		<div className="App">
			<h1>{title}</h1>
			<AppTitle />
			<p>There are {nouns.length} nouns:</p>
			<Nouns />
		</div>
	);
};

export default App;
