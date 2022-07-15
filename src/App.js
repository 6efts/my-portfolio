import Home from './components/Home'
import Project1 from './components/Project1'
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/project1" element={<Project1/>}></Route>
    </Routes>
  );
};

export default App;
