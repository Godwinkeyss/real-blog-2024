
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Layout from './components/Layout/Layout';
import HomeScreen from './pages/HomeScreen';

function App() {
  return (
    <div className="app">
     <BrowserRouter>
       <Routes>
        <Route path='/' element={<Layout />}>
           <Route path='/' element={<HomeScreen />}/>
        </Route>
       </Routes>
     </BrowserRouter>
      
    </div>
  );
}

export default App;
