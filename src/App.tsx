import './App.scss';
import { AppTitle } from './components/AppTitle';
import { Nouns } from './components/Nouns';
import nouns from './data/nouns.json';

const App = () => {
	const title = 'The React Basics';

	return (
		<div className="App">
			<h1>{title}</h1>
			<p>These are the basics.</p>
      <AppTitle />
      <AppTitle title="The French Nouns"/>
      <AppTitle title="The Spanish Nouns"/>
			<p>There are {nouns.length} nouns:</p>
      <Nouns nouns={nouns} />
		</div>
	);
};

export default App;
