
import { Route, Routes } from 'react-router-dom'
import './App.css'

import Footer from './components/Footer'
import Header from './components/Header'

import DashboardProdutos from './components/Dashboard'
import Home from './components/Home'
import Contato from './components/Contato';
import DetalheProduto from './components/DetalheProduto'


function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<DashboardProdutos />} />
          <Route path="/produto/:id" element={<DetalheProduto />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}


export default App
