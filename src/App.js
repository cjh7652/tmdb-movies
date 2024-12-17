import {Routes, Route} from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Movies from './pages/Movies';
import Users from './pages/Users';
import Event from './pages/Event';
import Movie from './pages/Movie';
import Comming from './pages/Comming';
import SearchDetail from './pages/SearchDetail';



function App() {
  return (
    <div className="App">
		<Navbar></Navbar>
		<Routes>
			<Route path="/" element={<Home />}  />
			<Route path="/movies" element={<Movies />}  />
			<Route path="/movies/:id" element={<Movie />}  />
			<Route path="/comming/:id" element={<Comming />}  />
			<Route path="/users" element={<Users />}  />
			<Route path="/event" element={<Event />}  />
			<Route path="/search/:movieId" element={<SearchDetail />}  />
		</Routes>
		<Footer />
    </div>
  );
}

export default App;
