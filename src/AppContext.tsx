import { Dispatch, SetStateAction, createContext, useState } from 'react';
import { INoun } from './types';
import rawNouns from './data/nouns.json';

interface IAppContext {
	nouns: INoun[];
	setNouns: Dispatch<SetStateAction<INoun[]>>;
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

	return (
		<AppContext.Provider
			value={{
				nouns,
				setNouns
			}}
		>
			{children}
		</AppContext.Provider>
	);
};