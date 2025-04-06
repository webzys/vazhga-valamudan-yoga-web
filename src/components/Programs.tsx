
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Lotus, 
  Brain, 
  Leaf, 
  Search, 
  Heart, 
  Users 
} from 'lucide-react';

const Programs = () => {
  const { t, language } = useLanguage();

  const programs = [
    {
      id: 'simplifiedExercises',
      icon: <Lotus className="h-8 w-8 text-yoga-primary" />,
    },
    {
      id: 'kundalini',
      icon: <Brain className="h-8 w-8 text-yoga-primary" />,
    },
    {
      id: 'kayakalpa',
      icon: <Leaf className="h-8 w-8 text-yoga-primary" />,
    },
    {
      id: 'introspection',
      icon: <Search className="h-8 w-8 text-yoga-primary" />,
    },
    {
      id: 'wellness',
      icon: <Heart className="h-8 w-8 text-yoga-primary" />,
    },
    {
      id: 'workshops',
      icon: <Users className="h-8 w-8 text-yoga-primary" />,
    },
  ];

  return (
    <section id="programs" className="bg-yoga-primary/5 py-16 md:py-24">
      <div className="section-container">
        <h2 className={`section-heading text-center mb-16 mx-auto ${language === 'ta' ? 'tamil' : ''}`}>
          {t('programs.title')}
          <span className="block w-16 h-1 bg-yoga-accent mt-2 mx-auto"></span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card 
              key={program.id} 
              className="program-card animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-2">
                <div className="mb-4">{program.icon}</div>
                <CardTitle className={`text-xl text-yoga-primary ${language === 'ta' ? 'tamil' : ''}`}>
                  {t(`programs.${program.id}`)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-yoga-dark/70">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center text-yoga-dark/80 max-w-3xl mx-auto">
          <p className="italic">
            {t('programs.note')}
          </p>
        </div>
        
        <div className="lotus-divider mt-16"></div>
      </div>
    </section>
  );
};

export default Programs;
