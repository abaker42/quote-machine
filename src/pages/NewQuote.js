import React from 'react';
import { useNavigate } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
	const handleAddQuote = (quoteData) => {
		console.log(quoteData);
		navigate('../quotes', { replace: true });
		//('quotes', { replace: true });
	};

	const navigate = useNavigate();

	return <QuoteForm onAddQuote={handleAddQuote} />;
};

export default NewQuote;
