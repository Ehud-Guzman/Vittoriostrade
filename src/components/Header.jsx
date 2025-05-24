import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: "/", name: "Home" },
    { path: "/services", name: "Services" },
    { path: "/about", name: "About" },
    { path: "/contact", name: "Contact" }
  ];

  return (
    <motion.nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2 shadow-xl' : 'py-4'}`}
      style={{
        background: scrolled ? 'rgba(18, 18, 18, 0.95)' : '#121212',
        borderBottom: scrolled ? `1px solid #D4AF37` : 'none'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}

         <motion.div 
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="flex items-center"
>
  
  <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-goldenWheat to-warmBrown">
    Vittorios Trades
  </h1>
</motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative px-3 py-2 text-sm font-medium transition-all duration-300 ${isActive ? 'text-goldenWheat' : 'text-neutralSand hover:text-goldenWheat'}`
                  }
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-goldenWheat transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              </motion.div>
            ))}
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#14532D' }}
              whileTap={{ scale: 0.95 }}
              className="ml-4 px-6 py-2 rounded-full text-sm font-bold bg-goldenWheat text-charcoalBlack hover:bg-deepGreen hover:text-neutralSand transition-all duration-300"
            >
              Get Quote
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-neutralSand focus:outline-none"
            >
              {mobileMenuOpen ? (
                <svg className="h-8 w-8 text-goldenWheat" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 pb-4 space-y-3"
          >
            {navItems.map((item) => (
              <motion.div
                key={item.path}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <NavLink
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-lg text-base font-medium ${isActive ? 'bg-deepGreen text-goldenWheat' : 'text-neutralSand hover:bg-warmBrown hover:bg-opacity-20'}`
                  }
                >
                  {item.name}
                </NavLink>
              </motion.div>
            ))}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-full mt-4 px-6 py-3 rounded-full text-base font-bold bg-goldenWheat text-charcoalBlack hover:bg-deepGreen hover:text-neutralSand transition-all duration-300"
            >
              Get Quote
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}

export default Header;