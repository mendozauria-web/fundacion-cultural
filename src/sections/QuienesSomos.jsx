import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const QuienesSomos = () => {
  const targetRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-66.66%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-brand-beige">
      
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        
        <motion.div style={{ x }} className="flex w-[300vw] h-full">
          
          <div className="w-[100vw] h-full relative flex items-start p-10 md:p-20 pt-32">
            <div className="absolute top-20 left-10 font-title text-[20rem] text-[#30928f]/5 select-none pointer-events-none">
              01
            </div>

            <div className="flex flex-col md:flex-row w-full h-full gap-4 relative z-10">
              <div className="w-full md:w-1/2 flex flex-col justify-start pt-10">
                <span className="font-body text-[#30928f] tracking-[0.5em] uppercase text-sm mb-6 font-bold">
                  — Nuestra Esencia
                </span>
                <h2 className="font-title text5xl md:text-[110px] text-[#30928f] leading-[0.8] tracking-tighter">
                  IDENTIDAD <br />
                  CONSCIENTE <br />
                  PARA UN <br />
                  <span className="italic font-light">FUTURO MEJOR</span>
                </h2>
              </div>
              
              <div className="w-full md:w-1/2 relative flex items-center justify-end">
                <div className="relative w-full h-[85vh]">
                   <img 
                    src="/assets/images/quien1.jpg" 
                    alt="Equipo Fundación" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -left-20 bg-[#30928f] p-10 max-w-md text-white z-10 shadow-2xl border-l-8 border-white">
                    <p className="font-body text-lg leading-relaxed font-medium">
                      Ayudamos a preservar la cultura y crear nuevas oportunidades. Creemos que nuestras raíces son el motor de nuestra gente.
                    </p>
                    <div className="mt-8 border-t border-white/30 pt-4 flex justify-between items-center font-bold uppercase text-xs tracking-widest">
                      <span>Inicia el viaje</span>
                      <span className="text-2xl">→</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100vw] h-full relative flex items-center justify-center p-12">
            <div className="w-full h-[90vh] bg-brand-blue relative border-[6px] border-[#30928f] p-12 md:p-24 flex flex-col justify-center">
              <div className="absolute top-2 left-2 w-8 h-8 border-t-4 border-l-4 border-[#30928f]"></div>
              <div className="absolute top-2 right-2 w-8 h-8 border-t-4 border-r-4 border-[#30928f]"></div>
              <div className="absolute bottom-2 left-2 w-8 h-8 border-b-4 border-l-4 border-[#30928f]"></div>
              <div className="absolute bottom-2 right-2 w-8 h-8 border-b-4 border-r-4 border-[#30928f]"></div>
              
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="h-full w-[1px] bg-[#30928f] absolute" style={{ left: `${i * 5}%` }} />
                ))}
              </div>

              <span className="absolute top-12 left-20 font-body uppercase tracking-[0.4em] text-[#30928f] text-sm font-bold">
                02 / Qué hacemos
              </span>

              <div className="max-w-5xl relative z-10">
                <h3 className="font-title text-7xl md:text-[120px] text-[#30928f] mb-10 leading-none tracking-tighter">
                  UN PUENTE AL <br/> <span className="italic">DESARROLLO DE NUESTRO PAIS</span>
                </h3>
                
                <div className="w-32 h-2 bg-[#30928f] mb-10"></div>

                <p className="font-body text-[#30928f] text-2xl md:text-4xl font-light leading-tight max-w-3xl">
                  Transformamos el patrimonio en activos poderosos. Descubrimos el valor único de nuestras comunidades.
                </p>
                
                <button className="mt-12 group flex items-center gap-4 text-[#30928f] font-bold font-body uppercase tracking-widest text-lg">
                  <span className="border-b-2 border-[#30928f] pb-1">Conoce nuestra historia</span>
                  <span className="bg-[#30928f] text-white p-2 rounded-full group-hover:translate-x-2 transition-transform">→</span>
                </button>
              </div>
              <div className="absolute right-[-15vw] top-[200px] -translate-y-1/2 z-20 w-[35vw]">
                <img 
                  src="/assets/images/quien2.jpeg" 
                  alt="Ilustración o Arte" 
                  className="w-full h-auto object-contain drop-shadow-2xl mix-blend-luminosity"
                />
              </div>
              <div className="absolute right-[-25vw] top-[600px] -translate-y-1/2 z-20 w-[35vw]">
                <img 
                  src="/assets/images/quien3.jpeg" 
                  alt="Ilustración o Arte" 
                  className="w-[250px] h-auto object-contain drop-shadow-2xl mix-blend-luminosity"
                />
              </div>
            </div>
          </div>

          <div className="w-[100vw] h-full relative flex items-center p-10 md:p-32 bg-[#30928f]">
            <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
              
              <div className="flex flex-col justify-center">
                <span className="font-title italic text-white/60 text-3xl block mb-6">
                  Metodología
                </span>
                <h2 className="font-title text-8xl text-white leading-none tracking-tighter">
                  CÓMO LO <br/> HACEMOS.
                </h2>
              </div>
              
              <div className="space-y-20">
                <div className="group">
                  <span className="text-white/40 font-title text-6xl block mb-4 group-hover:text-white transition-colors">01</span>
                  <h4 className="font-body text-white text-4xl font-bold uppercase mb-6">
                    Inmersión
                  </h4>
                  <p className="font-body text-white/80 text-xl leading-relaxed">
                    Investigamos y contactamos con distintos fondos tanto Nacionales como Internacionales
                  </p>
                </div>

                <div className="group">
                  <span className="text-white/40 font-title text-6xl block mb-4 group-hover:text-white transition-colors">02</span>
                  <h4 className="font-body text-white text-4xl font-bold uppercase mb-6">
                    Acción Real
                  </h4>
                  <p className="font-body text-white/80 text-xl leading-relaxed">
                    Llevamos estas ideas y estrategias usando el capital recolectado a la realidad.
                  </p>
                  <button className="mt-10 border-2 border-white text-white px-10 py-4 font-bold font-body uppercase text-sm hover:bg-white hover:text-[#30928f] transition-all">
                    Ver Proceso Completo
                  </button>
                </div>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default QuienesSomos;