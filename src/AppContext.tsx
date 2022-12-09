import { Dispatch, SetStateAction, createContext, useState, useEffect } from 'react';
import { INoun } from './interfaces';
import rawNouns from './data/nouns.json';
import axios from 'axios';

interface IAppContext {
	nouns: INoun[];
	setNouns: Dispatch<SetStateAction<INoun[]>>;
	appTitle: string;
	books: any[];
}

interface IAppProvider {
	children: React.ReactNode;
}

const _nouns: INoun[] = [];
rawNouns.forEach((rawNoun) => {
	const noun: INoun = {
		...rawNoun,
		backIsShowing: false
	};
	_nouns.push(noun);
});

const booksUrl = 'https://edwardtanguay.vercel.app/share/techBooks.json'

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [nouns, setNouns] = useState(_nouns);
	const [books, setBooks] = useState([]);
	
	useEffect(() => {
		(async () => {
			setBooks((await axios.get(booksUrl)).data);
		})();
	}, []);

	const appTitle = 'German Learning Site';

	return (
		<AppContext.Provider
			value={{
				nouns,
				setNouns,
				appTitle,
				books
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
