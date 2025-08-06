import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const LangToggle = () => {
  const { i18n } = useTranslation();
  // Detect default language
  const getDefaultLang = () => {
    const userLang = navigator.language || navigator.userLanguage;
    return userLang.startsWith('es') ? 'es' : 'en';
  };
  const [lang, setLang] = useState(i18n.language || getDefaultLang());

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang, i18n]);

  return (
    <div style={{ display: 'flex', alignItems: 'center', background: '#222', borderRadius: '20px', padding: '4px 10px', minWidth: 80 }}>
      <button
        onClick={() => setLang('es')}
        style={{
          background: lang === 'es' ? '#fff' : 'transparent',
          color: lang === 'es' ? '#222' : '#fff',
          border: 'none',
          borderRadius: '16px',
          padding: '4px 12px',
          fontWeight: 'bold',
          cursor: lang === 'es' ? 'default' : 'pointer',
          transition: 'background 0.2s, color 0.2s',
        }}
        aria-pressed={lang === 'es'}
      >
        ESP
      </button>
      <span style={{ color: '#888', margin: '0 6px', fontWeight: 'bold' }}>|</span>
      <button
        onClick={() => setLang('en')}
        style={{
          background: lang === 'en' ? '#fff' : 'transparent',
          color: lang === 'en' ? '#222' : '#fff',
          border: 'none',
          borderRadius: '16px',
          padding: '4px 12px',
          fontWeight: 'bold',
          cursor: lang === 'en' ? 'default' : 'pointer',
          transition: 'background 0.2s, color 0.2s',
        }}
        aria-pressed={lang === 'en'}
      >
        ENG
      </button>
    </div>
  );
};

export default LangToggle;
