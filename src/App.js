import Home from './views/Home'
import Project1 from './views/Project1'
import Project2 from './views/Project2'
import Project3 from './views/Project3'
import Project4 from './views/Project4'
import Project5 from './views/Project5'
import Project6 from './views/Project6'
import Project7 from './views/Project7'
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (

    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/project1" element={<Project1 />} />
      <Route path="/project2" element={<Project2 />} />
      <Route path="/project3" element={<Project3 />} />
      <Route path="/project4" element={<Project4 />} />
      <Route path="/project5" element={<Project5 />} />
      <Route path="/project6" element={<Project6 />} />
      <Route path="/project7" element={<Project7 />} />
    </Routes>
  );
};

export default App;
