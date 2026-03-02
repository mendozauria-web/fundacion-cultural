import { motion } from 'framer-motion';

const Hero = () => {
  const videoId = "7qgEXukAeZ4"; 
  const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&playlist=${videoId}&rel=0&iv_load_policy=3&enablejsapi=1&vq=hd1440`;
  
  const containerVariants = {
    hidden: { opacity: 0.5 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  return (
    <section className="relative h-[90vh] w-full overflow-hidden bg-[#0a192f]">
      <div className="absolute inset-0 z-0 scale-110">
        <iframe
          className="w-full h-full object-cover pointer-events-none"
          src={videoSrc}
          allow="autoplay; fullscreen"
          style={{ width: '100vw', height: '56.25vw', minHeight: '100vh', minWidth: '177.77vh', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        ></iframe>
      </div>

      <div className="absolute inset-0 z-10 bg-black/10"></div> 
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-transparent to-black/10"></div>
      
      <div className="absolute inset-y-0 right-0 z-15 w-full md:w-[60%] lg:w-[70%] bg-gradient-to-l from-white/90 via-white/70 to-transparent pointer-events-none"></div>

      <div className="absolute inset-0 z-10 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

      <div className="relative z-20 h-full w-full px-[400px] md:px-[100px] flex items-center justify-end">

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-[1100px] text-right"
        >
          <motion.span 
            variants={itemVariants}
            className="block font-body text-[#30928f] tracking-[0.8em] text-xs mb-4 uppercase opacity-90"
          >
            Patrimonio • Identidad • Futuro
          </motion.span>

          <motion.h1 
            variants={itemVariants}
            className="font-title text-[6xl] md:text-8xl lg:text-9xl text-[#000000] leading-[0.85] tracking-tighter"
          >
            FUNDACIÓN BOLIVIA <br />
            <span className="text-brand-beige italic font-light">INTERCULTURAL</span> <br />
            <span className="text-4xl md:text-6xl lg:text-7xl block mt-2 opacity-90">PARA EL DESARROLLO</span>
          </motion.h1>

          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, delay: 1 }}
            className="h-[1px] bg-gradient-to-l from-brand-beige/50 to-transparent my-8 ml-auto w-full max-w-md" 
          />
          
          <motion.p 
            variants={itemVariants}
            className="font-body text-[#30928f] text-lg md:text-xl font-light max-w-md ml-auto leading-relaxed opacity-80"
          >
            Uniendo voces y raíces para el <span className="font-semibold text-black">desarrollo social</span> para la educacion y la salud.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-12 flex justify-end gap-6 items-center">
            <button className="group relative px-10 py-4 overflow-hidden border border-brand-beige text-[#309285] font-body text-sm uppercase tracking-widest transition-all">
              <span className="relative z-10 group-hover:text-[#309285] transition-colors duration-500">Explorar Archivo</span>
              <div className="absolute inset-0 bg-brand-beige translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
            </button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-12 left-12 z-20 flex items-center gap-6">
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: 60 }}
          transition={{ duration: 1, delay: 2 }}
          className="w-[1px] bg-brand-beige/30"
        />
        <div className="overflow-hidden">
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.2 }}
            className="font-body text-[10px] uppercase tracking-[0.3em] text-[#309285] [writing-mode:vertical-lr] rotate-180"
          >
            TRANQUILITY HORIZON
          </motion.p>
        </div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 right-1/2 translate-x-1/2 z-20"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand-beige to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;