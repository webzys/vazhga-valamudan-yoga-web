
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ta' : 'en');
  };

  return (
    <header className="bg-white/80 backdrop-blur-md fixed w-full z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 font-serif">
            <a href="#" className="text-yoga-primary text-xl font-bold">
              {t('hero.title')}
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-yoga-dark hover:text-yoga-primary font-medium">
              {t('header.home')}
            </a>
            <a href="#about" className="text-yoga-dark hover:text-yoga-primary font-medium">
              {t('header.about')}
            </a>
            <a href="#programs" className="text-yoga-dark hover:text-yoga-primary font-medium">
              {t('header.programs')}
            </a>
            <a href="#contact" className="text-yoga-dark hover:text-yoga-primary font-medium">
              {t('header.contact')}
            </a>
          </nav>

          {/* Language Switcher Button */}
          <div className="hidden md:flex items-center">
            <Button
              variant="outline"
              size="sm"
              className="ml-4 border-yoga-primary text-yoga-primary hover:bg-yoga-primary hover:text-white"
              onClick={toggleLanguage}
            >
              <Globe className="h-4 w-4 mr-1" />
              {language === 'en' ? 'தமிழ்' : 'English'}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="outline"
              size="sm"
              className="mr-2 border-yoga-primary text-yoga-primary hover:bg-yoga-primary hover:text-white"
              onClick={toggleLanguage}
            >
              <Globe className="h-4 w-4" />
            </Button>
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-yoga-primary hover:bg-yoga-primary hover:text-white"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="block px-3 py-2 rounded-md text-base font-medium text-yoga-dark hover:bg-yoga-primary/10 hover:text-yoga-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.home')}
            </a>
            <a
              href="#about"
              className="block px-3 py-2 rounded-md text-base font-medium text-yoga-dark hover:bg-yoga-primary/10 hover:text-yoga-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.about')}
            </a>
            <a
              href="#programs"
              className="block px-3 py-2 rounded-md text-base font-medium text-yoga-dark hover:bg-yoga-primary/10 hover:text-yoga-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.programs')}
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-yoga-dark hover:bg-yoga-primary/10 hover:text-yoga-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('header.contact')}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
