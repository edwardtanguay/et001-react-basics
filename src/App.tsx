import './App.scss';
import { AppTitle } from './components/SectionTitle';
import { Nouns } from './components/Nouns';
import { useContext } from 'react';
import { AppContext } from './AppContext';

const App = () => {
	const { nouns, setNouns, appTitle, books } = useContext(AppContext);

	return (
		<div className="App">
			<h1>{appTitle}</h1>
			<AppTitle title="German Tech Books"/>
			<p>There are {books.length} books:</p>
			<ul className="books">
				{books.filter(m => m.language === 'german').map((book: any, i: number) => {
					return (
						<li key={i}>{book.title}</li>
					)
				})}
			</ul>
			<AppTitle />
			<p>There are {nouns.length} nouns:</p>
			<Nouns />
		</div>
	);
};

export default App;
