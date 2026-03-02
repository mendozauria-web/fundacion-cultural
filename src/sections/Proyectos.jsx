import { motion } from 'framer-motion';

const ProyectosProximos = () => {
  const categorias = [
    { id: "01", titulo: "Educación", descripcion: "Programas de formación cultural para jóvenes líderes." },
    { id: "02", titulo: "Salud", descripcion: "Digitalización y preservación del patrimonio histórico boliviano." },
    { id: "03", titulo: "Saneamiento de Aguas", descripcion: "Intervenciones artísticas que transforman el espacio público." }
  ];

  return (
    <section className="py-24 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="block font-body text-[#30928f] tracking-[0.4em] uppercase text-sm mb-4 font-bold">
              — Portafolio en construcción
            </span>
            <h2 className="font-title text-6xl md:text-8xl text-slate-900 leading-none tracking-tighter">
              NUESTRAS <br /> <span className="text-[#30928f] italic">INICIATIVAS.</span>
            </h2>
          </div>
          <p className="font-body text-slate-500 text-lg md:text-xl max-w-sm leading-relaxed">
            Estamos gestando proyectos que unen la tradición con la innovación social. <span className="text-[#30928f] font-bold">Próximamente</span> revelaremos nuestro impacto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categorias.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative h-[500px] border border-slate-100 bg-slate-50 overflow-hidden flex flex-col justify-end p-10"
            >
              <span className="absolute top-0 right-0 font-title text-[12rem] leading-none text-[#30928f]/5 group-hover:text-[#30928f]/10 transition-colors duration-500 select-none">
                {item.id}
              </span>

              <div className="relative z-10">
                <div className="w-12 h-[2px] bg-[#30928f] mb-6 transition-all duration-500 group-hover:w-full"></div>
                <h3 className="font-title text-3xl text-slate-900 mb-4 uppercase tracking-tighter">
                  {item.titulo}
                </h3>
                <p className="font-body text-slate-500 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {item.descripcion}
                </p>
                <div className="mt-8 flex items-center gap-2 text-[#30928f] font-bold text-xs uppercase tracking-widest">
                  <span>En desarrollo</span>
                  <motion.span 
                    animate={{ x: [0, 5, 0] }} 
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    ...
                  </motion.span>
                </div>
              </div>

              <div className="absolute inset-0 bg-[#30928f]/0 group-hover:bg-[#30928f]/5 transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 flex justify-center">
          <div className="flex flex-col items-center gap-6">
            <p className="font-body text-[10px] uppercase tracking-[0.5em] text-slate-400">
              ¿Tienes una idea? Trabajemos juntos
            </p>
            <button className="px-12 py-4 bg-slate-900 text-white font-bold uppercase text-xs tracking-widest hover:bg-[#30928f] transition-colors duration-300 shadow-xl">
              Proponer Alianza
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProyectosProximos;