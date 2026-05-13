import { NavLink, Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Pages whose hero is light-coloured (no dark video overlay) — nav needs dark text at top
const LIGHT_HERO_PAGES = ['/about', '/privacy', '/terms'];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const lightHero = LIGHT_HERO_PAGES.includes(pathname);
  // Show dark nav when scrolled OR when the page has a light hero
  const darkNav = scrolled || lightHero;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { path: '/', name: 'Home' },
    { path: '/services', name: 'Services' },
    { path: '/about', name: 'About' },
    { path: '/contact', name: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        darkNav
          ? 'bg-white/95 backdrop-blur-md shadow-warm py-3 border-b border-earth-200'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src="/images/vittorios logo.jpg"
              alt="Vittorios Trades"
              className="h-10 w-auto object-contain rounded"
            />
            <span
              className={`text-xl font-display font-bold tracking-tight transition-colors duration-300 ${
                darkNav ? 'text-earth-900' : 'text-white'
              }`}
            >
              Vittorios Trades
            </span>
          </NavLink>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, i) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.06 * i }}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-brand-500'
                        : darkNav
                        ? 'text-earth-600 hover:text-brand-500'
                        : 'text-white/90 hover:text-white'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.name}
                      {isActive && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-500 rounded-full"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </motion.div>
            ))}

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="ml-4">
              <Link
                to="/contact"
                className="block px-5 py-2 rounded-full text-sm font-semibold bg-brand-500 text-white hover:bg-brand-600 transition-colors duration-200 shadow-brand"
              >
                Get a Quote
              </Link>
            </motion.div>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              darkNav ? 'text-earth-700' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden mt-3 pb-4 overflow-hidden"
            >
              <div className="bg-white rounded-xl shadow-warm-lg border border-earth-100 p-3 space-y-1">
                {navItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'bg-brand-50 text-brand-600 font-semibold'
                          : 'text-earth-700 hover:bg-earth-100'
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block mt-2 px-4 py-3 rounded-lg text-sm font-semibold text-center bg-brand-500 text-white hover:bg-brand-600 transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

export default Header;
