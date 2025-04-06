
import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define our language types
export type Language = 'en' | 'ta';

// Define our translations interface
export interface Translations {
  [key: string]: {
    en: string;
    ta: string;
  };
}

// Define the context interface
interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// Create the context with a default value
const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: () => '',
});

// Export a hook for using the language context
export const useLanguage = () => useContext(LanguageContext);

// Define the translations
export const translations: Translations = {
  // Header translations
  'header.home': {
    en: 'Home',
    ta: 'முகப்பு',
  },
  'header.about': {
    en: 'About Us',
    ta: 'எங்களைப் பற்றி',
  },
  'header.programs': {
    en: 'Programs',
    ta: 'சேவைகள்',
  },
  'header.contact': {
    en: 'Contact',
    ta: 'தொடர்பு',
  },
  
  // Hero section translations
  'hero.title': {
    en: 'Vazhga Valamudan Yoga Center',
    ta: 'வாழ்க வளமுடன் யோகா மையம்',
  },
  'hero.subtitle': {
    en: 'Inspired by the Teachings of Yogiraj Vethathiri Maharishi (1911 – 2006)',
    ta: 'யோகி மற்றும் தத்துவஞானி வேதாத்திரி மகரிஷி (14 ஆகஸ்ட் 1911 – 28 மார்ச் 2006) அவர்களின் கற்றல்களை வழிகாட்டியாகக் கொண்டது',
  },
  'hero.description': {
    en: 'Balance the Body, Mind & Life Energy through Simplified Kundalini Yoga (SKY Yoga)',
    ta: 'தெளிவான மனம் – நலமான உடல் – ஒத்திசைந்த ஆன்மா! எளிமையான குண்டலினி யோகம் (SKY யோகா) மூலம் வாழ்க்கையின் ஒழுங்கை அடையுங்கள்',
  },
  
  // About section translations
  'about.title': {
    en: 'About Us',
    ta: 'எங்களைப் பற்றி',
  },
  'about.content': {
    en: 'At Vazhga Valamudan Yoga Center, we are dedicated to spreading the life-transforming teachings of Shri Vethathiri Maharishi – a revered Indian philosopher, spiritual leader, and founder of Simplified Kundalini Yoga (SKY). Rooted in ancient wisdom and structured for modern life, our center offers authentic SKY Yoga practices to help individuals attain inner peace, physical wellness, and spiritual harmony.',
    ta: 'வாழ்க வளமுடன் யோகா மையம், வேதாத்திரி மகரிஷி அவர்களின் ஆன்மிகக் கற்பனைகளை அடிப்படையாகக் கொண்டு இயங்கும் யோகா மையமாகும். பண்டைய ஆன்மிக அறிவையும், இன்றைய வாழ்க்கை முறைக்கும் பொருந்தும் வகையில் அமைந்த SKY யோகா, உடல் நலத்தையும், மன அமைதியையும், ஆன்ம நலத்தையும் வழங்குகிறது.',
  },
  'about.quote': {
    en: '"When the mind is clear and the body is healthy, the soul shines brighter."',
    ta: '"மனம் தெளிவாக இருந்தால், உடல் ஆரோக்கியமாக இருக்கும்; ஆன்மா ஒளிரும்."',
  },
  'about.author': {
    en: '– Vethathiri Maharishi',
    ta: '– வேதாத்திரி மகரிஷி',
  },
  
  // Programs section translations
  'programs.title': {
    en: 'What We Offer',
    ta: 'எங்கள் சேவைகள்',
  },
  'programs.simplifiedExercises': {
    en: 'Simplified Physical Exercises',
    ta: 'எளிய உடற்பயிற்சிகள்',
  },
  'programs.kundalini': {
    en: 'Kundalini Meditation',
    ta: 'குண்டலினி தியானம்',
  },
  'programs.kayakalpa': {
    en: 'Kayakalpa Yoga',
    ta: 'காயகல்ப யோகம்',
  },
  'programs.introspection': {
    en: 'Introspection Courses',
    ta: 'சிந்தனைக் பயிற்சிகள்',
  },
  'programs.wellness': {
    en: 'Wellness and Lifestyle Counseling',
    ta: 'வாழ்க்கை நல ஆலோசனைகள்',
  },
  'programs.workshops': {
    en: 'Workshops & Retreats',
    ta: 'வகுப்புகள் மற்றும் ஒருநாள் முகாம்கள்',
  },
  'programs.note': {
    en: 'All courses are conducted under trained and certified SKY Yoga instructors following Maharishi\'s methods as described on Vethathiri.edu.in.',
    ta: 'https://www.vethathiri.edu.in/pages/sky-yoga இல் குறிப்பிடப்பட்டுள்ள முறைகளைக் கடைப்பிடித்து, பயிற்சியறிஞர்களால் வகுப்புகள் நடத்தப்படும்.',
  },
  
  // Contact section translations
  'contact.title': {
    en: 'Contact Us',
    ta: 'தொடர்பு கொள்ள',
  },
  'contact.location': {
    en: 'Location',
    ta: 'இருப்பிடம்',
  },
  'contact.address.line1': {
    en: 'Vazhga Valamudan Yoga Center',
    ta: 'வாழ்க வளமுடன் யோகா மையம்',
  },
  'contact.address.line2': {
    en: 'No. 123, Main Street',
    ta: 'எண் 123, மெயின் தெரு',
  },
  'contact.address.line3': {
    en: 'Vazhga Valamudan, Tamil Nadu – 600001',
    ta: 'வாழ்க வளமுடன், தமிழ்நாடு – 600001',
  },
  'contact.address.line4': {
    en: '(Near Central Bus Stand)',
    ta: '(மத்திய பேருந்து நிலையம் அருகில்)',
  },
  'contact.phone': {
    en: 'Phone',
    ta: 'தொலைபேசி',
  },
  'contact.phone.number': {
    en: '+91 98765 43210',
    ta: '+91 98765 43210',
  },
  'contact.email': {
    en: 'Email',
    ta: 'மின்னஞ்சல்',
  },
  'contact.email.address': {
    en: 'info@vazhgavalamudanyoga.com',
    ta: 'info@vazhgavalamudanyoga.com',
  },
  'contact.timings': {
    en: 'Timings',
    ta: 'நேரம்',
  },
  'contact.timings.hours': {
    en: '6:00 AM – 8:00 PM (All Days)',
    ta: 'காலை 6:00 – இரவு 8:00 (அனைத்து நாட்களும்)',
  },
  'contact.follow': {
    en: 'Follow us',
    ta: 'எங்களை பின்தொடர',
  },
  
  // Footer section translations
  'footer.join': {
    en: 'Join the Journey Within',
    ta: 'ஆன்மிக பயணத்தில் இணையுங்கள்',
  },
  'footer.join.description': {
    en: 'Whether you are a beginner or looking to deepen your practice, we welcome you to experience the holistic path of SKY Yoga.',
    ta: 'நீங்கள் ஒரு ஆரம்ப நிலையில் இருந்தாலும் அல்லது உங்கள் பயிற்சியை ஆழப்படுத்த விரும்பினாலும், SKY யோகாவின் முழுமையான பாதையை அனுபவிக்க உங்களை வரவேற்கிறோம்.',
  },
  'footer.vazhga': {
    en: 'Vazhga Valamudan!',
    ta: 'வாழ்க வளமுடன்!',
  },
  'footer.wellness': {
    en: 'Let wellness, peace, and bliss flow through you.',
    ta: 'நலமும், அமைதியும், பேரின்பமும் உங்கள் வழியாக பாயட்டும்.',
  },
  'footer.copyright': {
    en: '© 2025 Vazhga Valamudan Yoga Center. All rights reserved.',
    ta: '© 2025 வாழ்க வளமுடன் யோகா மையம். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
  }
};

// Create the provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  // Translation function
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key "${key}" not found.`);
      return key;
    }
    return translations[key][language];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
