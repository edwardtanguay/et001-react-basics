import './App.scss';
import nouns from './data/nouns.json';

const App = () => {
	const title = 'The React Basics';

	return (
		<div className="App">
      <h1>{title}</h1>
			<p>These are the basics.</p>
      <h2>German Nouns</h2>
      <p>There are {nouns.length} nouns:</p>
      <div className="nouns">
        {nouns.map(noun => {
          return (
            <div className="noun">{noun.article} {noun.singular}</div>
          )
        })}
      </div>
		</div>
	);
};

export default App;
