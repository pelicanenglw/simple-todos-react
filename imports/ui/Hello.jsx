import React, { useState } from 'react';

export const Hello = () => {
	const [counter, setCounter] = useState(0);

	const increment = () => {
		setCounter(counter + 1);
	};

	const getData = async () => {
		const res = await Meteor.call('getData');

		// try {
		// 	const response = await fetch('https://api.example.com/data');
		// 	const data = await response.json();
		// 	console.log(data);
		// } catch (error) {
		// 	console.error('Error:', error);
		// }
	};

	return (
		<div>
			<button onClick={increment}>Click Me</button>
			<p>You've pressed the button {counter} times.</p>
			<button onClick={getData}>Get Data</button>
		</div>
	);
};
