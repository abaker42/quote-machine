import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Comments from './components/comments/Comments';
import Layout from './components/layout/Layout';
import AllQuotes from './pages/AllQuotes';
import NewQuote from './pages/NewQuote';
import NotFound from './pages/NotFound';
import QuoteDetails from './pages/QuoteDetails';

function App() {
	return (
		<Layout>
			<Routes>
				<Route exact path='/' element={<Navigate replace to='/quotes' />} />
				<Route exact path='quotes' element={<AllQuotes />} />
				<Route path='quotes/:quoteId' element={<QuoteDetails />}>
					{/* <Route
						path=''
						exact
						element={
							<div className='centered'>
								<Link className='btn--flat' to={`/quotes/:quoteId/comments`}>
									Load Comments
								</Link>
							</div>
						}
					/> */}
					<Route path='comments' element={<Comments />} />
				</Route>
				<Route path='/new-quote' element={<NewQuote />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</Layout>
	);
}

export default App;
