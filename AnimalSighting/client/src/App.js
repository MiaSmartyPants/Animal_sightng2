import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
	from 'react-router-dom';
import Home from './pages';
import About from './pages/about';
import Sighting from './pages/sighting';
import Forms from './pages/Forms';
import Endangered from './pages/endangered';


function App() {

	
	  
	  


return (		
	<Router>
	<Navbar />
	<Routes>
		<Route exact path='/' index element={<Home />} />
		<Route path='/about' element={<About/>} />
		<Route path='/endangered' element={<Endangered/>} />
		<Route path='/sighting' element={<Sighting/>} />
		<Route path='/forms' element={<Forms/>} />
	</Routes>
	</Router>
);
}

export default App;
