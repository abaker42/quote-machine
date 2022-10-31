import React, { Fragment } from 'react';
import { useParams, Outlet, Link } from 'react-router-dom';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
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

const QuoteDetails = () => {
	const params = useParams();

	console.log(params);

	const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
	if (!quote) {
		return <p>No Quote Found</p>;
	}
	/**How do we make the Load comment link disapper when comments are loaded? in V6 */
	return (
		<Fragment>
			<HighlightedQuote text={quote.text} author={quote.author} />
			<div className='centered'>
				<Link className='btn--flat' to={`/quotes/${params.quoteId}/comments`}>
					Load Comments
				</Link>
			</div>

			<Outlet />
		</Fragment>
	);
};

export default QuoteDetails;
