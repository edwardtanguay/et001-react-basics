import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { INoun } from './interfaces';
import rawNouns from './data/nouns.json';

interface IAppContext {
	nouns: INoun[];
	setNouns: Dispatch<SetStateAction<INoun[]>>;
	appTitle: string;
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

export const AppContext = createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<IAppProvider> = ({ children }) => {
	const [nouns, setNouns] = useState(_nouns);

	const appTitle = 'German Learning Site';

	return (
		<AppContext.Provider
			value={{
				nouns,
				setNouns,
				appTitle
			}}
		>
			{children}
		</AppContext.Provider>
	);
};
