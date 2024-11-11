import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import CategoryPage from './components/CategoryPage';
import SingleProduct from './components/SingleProduct';
import Header from './components/Header';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import AppContext from './utils/context';
import ScrollToTop from './utils/ScrollToTop';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <AppContext>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/category/:id' element={<CategoryPage />} />
                    <Route path='/product/:id' element={<SingleProduct />} />
                </Routes>
                <Newsletter />
                <Footer />
            </AppContext>
        </Router>
    );
}

export default App;
