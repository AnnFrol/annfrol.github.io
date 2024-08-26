import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
	translation: {
	  "MainHomeTitleBefore": "Hey, I am",
	  "HomeTitle": "Digital Designer",
	  "Menu": "Menu",
	  "SendMessage": "Send Message",
	  "About": "About",
	  "AboutText": "Learn more about us on this page.",
	  "Projects": "Projects",
	  "ProjectsText": "Explore our latest projects."
	}
  },
  es: {
	translation: {
	  "MainHomeTitleBefore": "Hola, soy",
	  "HomeTitle": "Diseñador Digital",
	  "Menu": "Menú",
	  "SendMessage": "Enviar Mensaje",
	  "About": "Sobre",
	  "Menu": "Menu",
	  "AboutText": "Aprende más sobre nosotros en esta página.",
	  "Projects": "Proyectos",
	  "ProjectsText": "Explora nuestros últimos proyectos."
	}
  }
};

i18n
  .use(initReactI18next)
  .init({
	resources,
	lng: "en", // язык по умолчанию
	interpolation: {
	  escapeValue: false
	}
  });

export default i18n;