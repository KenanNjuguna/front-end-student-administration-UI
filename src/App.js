
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './Components/login';
import Register from './Components/Register';
import Home from './Components/Home';
import AddStudent from './Components/AddStudent';
import Navbar from './Components/Navbar';
import GetStudents from './Components/GetStudents';
import UpdateStudent from './Components/UpdateStudent';
import DeleteStudent from './Components/DeleteStudent';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-student" element={<AddStudent />} />
          <Route path="/GetStudents" element={<GetStudents />} />
          <Route path="/UpdateStudent/:id" element={<UpdateStudent />} />
          <Route path="/deleteStudent/:id" element={<DeleteStudent />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;