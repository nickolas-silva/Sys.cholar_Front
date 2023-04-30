import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Login ,Register,RegisterDisciplina,EditUser} from './pages/index';
import './App.css';

const App: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/edit/:user" element={<EditUser />} />
      <Route path="/register/disciplina" element={<RegisterDisciplina />} />
      <Route path="/register" element={<Register />}/>
    </Routes>
  );
};

export default App;
