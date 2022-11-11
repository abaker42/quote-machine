import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Comments from './components/comments/Comments';
import Layout from './components/layout/Layout';
import LoadingSpinner from './components/UI/LoadingSpinner';
import AllQuotes from './pages/AllQuotes';
//import NewQuote from './pages/NewQuote';
//import NotFound from './pages/NotFound';
//import QuoteDetails from './pages/QuoteDetails';

const NewQuote = React.lazy(() => import('./pages/NewQuote'));
const QuoteDetails = React.lazy(() => import('./pages/QuoteDetails'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
function App() {
	return (
		<Layout>
			<Suspense
				fallback={
					<div className='centered'>
						<LoadingSpinner />
					</div>
				}>
				<Routes>
					<Route exact path='/' element={<Navigate replace to='/quotes' />} />
					<Route exact path='quotes' element={<AllQuotes />} />
					<Route path='quotes/:quoteId' element={<QuoteDetails />}>
						<Route path='comments' element={<Comments />} />
					</Route>
					<Route path='/new-quote' element={<NewQuote />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Suspense>
		</Layout>
	);
}

export default App;
