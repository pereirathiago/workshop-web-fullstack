import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home';
import { Create } from './Pages/Create';
import { Edit } from './Pages/Edit';
import { View } from './Pages/View';

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/edit/:id" element={<Edit/>} />
        <Route path="/view/:id" element={<View/>} />
      </Routes>
    </BrowserRouter>
  );
}