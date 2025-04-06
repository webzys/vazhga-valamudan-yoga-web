
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  MessageSquare 
} from 'lucide-react';

const Contact = () => {
  const { t, language } = useLanguage();

  return (
    <section id="contact" className="section-container">
      <h2 className={`section-heading text-center mb-16 mx-auto ${language === 'ta' ? 'tamil' : ''}`}>
        {t('contact.title')}
        <span className="block w-16 h-1 bg-yoga-accent mt-2 mx-auto"></span>
      </h2>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Contact Information */}
        <div className="space-y-6 animate-fade-in">
          <Card className="p-6 border-yoga-light/20">
            <div className="flex items-start">
              <div className="mr-4 p-2 bg-yoga-primary/10 rounded-full">
                <MapPin className="h-6 w-6 text-yoga-primary" />
              </div>
              <div>
                <h3 className={`font-medium text-lg mb-2 ${language === 'ta' ? 'tamil' : ''}`}>
                  {t('contact.location')}
                </h3>
                <address className="not-italic text-yoga-dark/80">
                  <p>{t('contact.address.line1')}</p>
                  <p>{t('contact.address.line2')}</p>
                  <p>{t('contact.address.line3')}</p>
                  <p>{t('contact.address.line4')}</p>
                </address>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 border-yoga-light/20">
            <div className="flex items-start">
              <div className="mr-4 p-2 bg-yoga-primary/10 rounded-full">
                <Phone className="h-6 w-6 text-yoga-primary" />
              </div>
              <div>
                <h3 className={`font-medium text-lg mb-2 ${language === 'ta' ? 'tamil' : ''}`}>
                  {t('contact.phone')}
                </h3>
                <p className="text-yoga-dark/80">
                  <a href="tel:+919876543210" className="hover:text-yoga-primary">
                    {t('contact.phone.number')}
                  </a>
                </p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 border-yoga-light/20">
            <div className="flex items-start">
              <div className="mr-4 p-2 bg-yoga-primary/10 rounded-full">
                <Mail className="h-6 w-6 text-yoga-primary" />
              </div>
              <div>
                <h3 className={`font-medium text-lg mb-2 ${language === 'ta' ? 'tamil' : ''}`}>
                  {t('contact.email')}
                </h3>
                <p className="text-yoga-dark/80">
                  <a href="mailto:info@vazhgavalamudanyoga.com" className="hover:text-yoga-primary">
                    {t('contact.email.address')}
                  </a>
                </p>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 border-yoga-light/20">
            <div className="flex items-start">
              <div className="mr-4 p-2 bg-yoga-primary/10 rounded-full">
                <Clock className="h-6 w-6 text-yoga-primary" />
              </div>
              <div>
                <h3 className={`font-medium text-lg mb-2 ${language === 'ta' ? 'tamil' : ''}`}>
                  {t('contact.timings')}
                </h3>
                <p className="text-yoga-dark/80">
                  {t('contact.timings.hours')}
                </p>
              </div>
            </div>
          </Card>
          
          <div className="flex justify-start space-x-4 pt-4">
            <Button variant="outline" size="icon" className="rounded-full border-yoga-primary text-yoga-primary hover:bg-yoga-primary hover:text-white">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-yoga-primary text-yoga-primary hover:bg-yoga-primary hover:text-white">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button variant="outline" size="icon" className="rounded-full border-yoga-primary text-yoga-primary hover:bg-yoga-primary hover:text-white">
              <MessageSquare className="h-5 w-5" />
              <span className="sr-only">WhatsApp</span>
            </Button>
          </div>
        </div>
        
        {/* Map */}
        <div className="h-full min-h-[400px] rounded-lg overflow-hidden shadow-lg animate-fade-in-slow">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.8485792944396!2d80.24015281535862!3d13.048476990806084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52664274db2e9f%3A0xf514c8eb9e39ab0e!2sChennai%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sus!4v1649015345719!5m2!1sen!2sus" 
            className="w-full h-full"
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy" 
            title="Map to Vazhga Valamudan Yoga Center"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
