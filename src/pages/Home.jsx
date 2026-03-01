import Hero from '../sections/Hero';
import QuienesSomos from '../sections/QuienesSomos';

const Home = () => {
  return (
    <main className="bg-brand-beige min-h-screen">
      {/* 1. Sección Hero (Video) */}
      <Hero />

      {/* 2. Sección Quiénes Somos (Scroll Horizontal) */}
      <QuienesSomos />

      {/* Placeholder para la siguiente sección (Proyectos) */}
      <section className="h-screen flex items-center justify-center bg-brand-blue text-brand-beige">
        <h2 className="font-title text-5xl">Sección de Proyectos (Próximamente)</h2>
      </section>
    </main>
  );
};

export default Home;