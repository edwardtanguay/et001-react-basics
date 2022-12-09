import { useState } from 'react';
import './App.scss';
import { AppTitle } from './components/AppTitle';
import { Nouns } from './components/Nouns';
import rawNouns from './data/nouns.json';
import { INoun } from './types';

const _nouns:INoun[] = [];
rawNouns.forEach(rawNoun => {
	const noun: INoun = {
		...rawNoun,
		backIsShowing: false
	};
	_nouns.push(noun);
})

const App = () => {
	const [nouns, setNouns] = useState(_nouns);
	const title = 'The React Basics';

	return (
		<div className="App">
			<h1>{title}</h1>
      <AppTitle />
      {/* <AppTitle title="The French Nouns"/>
      <AppTitle title="The Spanish Nouns"/> */}
			<p>There are {nouns.length} nouns:</p>
      <Nouns nouns={nouns} setNouns={setNouns} />
		</div>
	);
};

export default App;
