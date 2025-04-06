
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="section-container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <h2 className={`section-heading ${language === 'ta' ? 'tamil' : ''}`}>
            {t('about.title')}
          </h2>
          
          <p className="text-yoga-dark/90 mb-8 text-lg leading-relaxed">
            {t('about.content')}
          </p>
          
          <div className="p-6 bg-yoga-primary/5 border-l-4 border-yoga-primary rounded-r-lg mt-8">
            <p className="text-yoga-primary text-xl italic mb-2">
              {t('about.quote')}
            </p>
            <p className="text-yoga-dark font-medium">
              {t('about.author')}
            </p>
          </div>
        </div>
        
        <div className="relative animate-fade-in-slow">
          <div className="absolute inset-0 bg-yoga-primary/20 rounded-2xl transform rotate-3"></div>
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
            alt="Vethathiri Maharishi" 
            className="relative z-10 rounded-2xl shadow-xl object-cover w-full h-full max-h-[500px]"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
