import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        if (currentScrollY < 100) {
          setIsVisible(true);
        } 
        else if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } 
        else {
          setIsVisible(true);
        }
        
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  return (
    <header className="z-50 bg-[#f5f5dc]"> 
      <motion.nav
        animate={{ y: isVisible ? 0 : -150 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-full bg-[#f5f5dc] py-[10px] px-6 md:px-16 sticky top-0 z-50 backdrop-blur-sm shadow-none"
      >
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-8">
          <Link to="/" className="flex items-center gap-6 ">
            <div className="overflow-hidden rounded-lg">
              <img 
                src="/assets/images/logo1.png" 
                alt="Logo" 
                className="h-20 md:h-28 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </Link>

          <div className="flex flex-wrap text-[#30928f] justify-center items-center gap-4 font-body text-base md:text-lg font-bold uppercase tracking-[0.2em] text-[#083d77]">
            <Link to="/" className="relative px-6 py-3 overflow-hidden group">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Inicio</span>
              <span className="absolute inset-0 bg-[#434343] transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
            </Link>

            <Link to="/historia" className="relative px-6 py-3 overflow-hidden group">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Historia</span>
              <span className="absolute inset-0 bg-[#434343] transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
            </Link>

            <Link to="/proyectos" className="relative px-6 py-3 overflow-hidden group">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Proyectos</span>
              <span className="absolute inset-0 bg-[#434343] transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></span>
            </Link>

            <Link 
              to="/contacto" 
              className="ml-4 px-10 py-4 border-4 border-brand-blue text-brand-blue font-black hover:bg-brand-blue hover:text-black transition-all duration-300 transform hover:-translate-y-1 active:scale-95 shadow-[8px_8px_0px_0px_rgba(var(--brand-blue-rgb),0.2)] hover:shadow-none"
            >
              Únete
            </Link>
          </div>
        </div>
      </motion.nav>
    </header>
  );
};

export default Navbar;