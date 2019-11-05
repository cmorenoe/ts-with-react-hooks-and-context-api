import React from 'react';

const Store = React.createContext('');

export function Parent(props: any): JSX.Element {
	const text = 'random text';
	return <Store.Provider value={text}>{props.children}</Store.Provider>;
}

export function Child() {
	const hook = React.useContext(Store);
	return <div>{hook}</div>;
}
