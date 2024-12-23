import i18next from "i18next"
import { initReactI18next } from "react-i18next"
import Backend from 'i18next-http-backend'
import languageDetector from 'i18next-browser-languagedetector'
import uzTranslation from './languages/uz.json'
import enTranslation from './languages/en.json'
import ruTranslation from './languages/ru.json'

const language = localStorage.getItem('i18nextLng') || 'uz'

i18next
    .use(Backend)
    .use(languageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        },
        lng: language,
        debug: true,
        resources: {
            uz: { translation: uzTranslation },
            en: { translation: enTranslation },
            ru: { translation: ruTranslation }
        }
    })

export default i18next