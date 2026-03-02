const Footer = () => {
  return (
    <footer className="bg-brand-blue text-brand-beige py-12 px-10 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="space-y-4">
          <h3 className="font-title text-2xl">Fundación Cultural</h3>
          <p className="font-body text-sm opacity-80">Preservando el legado, construyendo el futuro.</p>
        </div>
        <div className="font-body text-sm space-y-2">
          <h4 className="font-bold uppercase tracking-tighter mb-4">Navegación</h4>
          <p><a href="#" className="hover:underline">Archivo Histórico</a></p>
          <p><a href="#" className="hover:underline">Biblioteca</a></p>
          <p><a href="#" className="hover:underline">Patrocinadores</a></p>
        </div>
        <div className="font-body text-sm space-y-2">
          <h4 className="font-bold uppercase tracking-tighter mb-4">Contacto</h4>
          <p>Email: mendozauria@fundacionboliviainterculturalunidaparaeldesarrollo.com</p>
          <p>Dirección: Dirección Calle Figueroa 680 Piso 1 Ofi. 3</p>
        </div>
      </div>
      <div className="border-t border-brand-beige/10 mt-10 pt-6 text-center text-xs opacity-50 font-body">
        © {new Date().getFullYear()} Fundación Cultural. Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;