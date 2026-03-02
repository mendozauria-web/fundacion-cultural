import Hero from '../sections/Hero';
import QuienesSomos from '../sections/QuienesSomos';
import ProyectosProximos from '../sections/Proyectos';

const Home = () => {
  return (
    <main className="bg-brand-beige min-h-screen">
      <Hero />
      <QuienesSomos />
      <ProyectosProximos/>
    </main>
  );
};

export default Home;