import React from 'react';
import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
	{
		id: 'q1',
		author: 'Albert Einstein',
		text: 'Life is like riding a bicycle. To keep your balance you must keep moving.',
	},
	{
		id: 'q2',
		author: 'Dalai Lama',
		text: 'The purpose of our lives is to be happy.',
	},
	{
		id: 'q3',
		author: 'Theodore Roosevelt',
		text: 'Believe you can and you are halfway there.',
	},
	{
		id: 'q4',
		author: 'Confucius',
		text: 'It does not matter how slowly you go as long as you do not stop.',
	},
	{
		id: 'q5',
		author: 'Nelson Mandela',
		text: 'A winner is a dreamer who never gave up.',
	},
];

const AllQuotes = () => {
	return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
