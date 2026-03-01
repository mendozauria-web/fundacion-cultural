import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

// Componentes temporales para las otras rutas
const Historia = () => <div className="p-20 font-title text-3xl">Página de Historia en construcción...</div>;
const Contacto = () => <div className="p-20 font-title text-3xl">Página de Contacto en construcción...</div>;

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/historia" element={<Historia />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;