
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-yoga-primary text-white">
      <div className="section-container py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className={`text-2xl md:text-3xl font-serif mb-6 ${language === 'ta' ? 'tamil' : ''}`}>
            {t('footer.join')}
          </h2>
          
          <p className="text-white/80 mb-8">
            {t('footer.join.description')}
          </p>
          
          <div className="mb-8">
            <h3 className={`text-xl font-semibold mb-2 ${language === 'ta' ? 'tamil' : ''}`}>
              {t('footer.vazhga')}
            </h3>
            <p className="text-white/80">
              {t('footer.wellness')}
            </p>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/20 py-6">
        <div className="container mx-auto px-4 text-center text-white/60 text-sm">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
