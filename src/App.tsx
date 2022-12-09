import './App.scss';
import { AppTitle } from './components/AppTitle';
import { Nouns } from './components/Nouns';
import { useContext } from 'react';
import { AppContext } from './AppContext';

const App = () => {
	const { nouns, setNouns, appTitle } = useContext(AppContext);

	return (
		<div className="App">
			<h1>{appTitle}</h1>
			<AppTitle />
			<p>There are {nouns.length} nouns:</p>
			<Nouns />
		</div>
	);
};

export default App;
