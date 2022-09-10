import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
import { RegisterPage } from './pages/RegisterPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RegisterPage/>}> </Route>
        <Route path="/conversations" element={<div><div>conversations</div><Outlet /></div>}>
          <Route path=":id" element={<div>conversation id page</div>} />
        </Route>


      </Routes>

    </>
  );
}

export default App;
