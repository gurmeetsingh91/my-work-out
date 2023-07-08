import { Routes, Route } from 'react-router-dom';


import NavBar from './components/navbar/navbar.component';
import Home from './routes/home/Home.component';


const App = () => {

  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
