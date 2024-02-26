import React from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const languages = [
  {
    code: 'fr',
    name: 'Français',
    country_code: 'fr',
  },
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
  {
    code: 'es',
    name: 'Español',
    country_code: 'es'
  }
]


function App() {
  const { t } = useTranslation()
  const releaseDate = new Date('2024-02-25')
  const timeDiffernce= new Date() - releaseDate
  const number_of_days = Math.floor(timeDiffernce / (1000 * 60 * 60 *24))
  return (
    <div className="container">
      <div className="d-Flex justify-content-end">
      <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Change language
  </button>
  <ul className="dropdown-menu">
    {languages.map(({ code, name, country_code}) => (
      <li key={country_code}>
        <button className="dropdown-item" onClick= {() => i18next.changeLanguage(code)}>
          <span className={`flag-icon flag-icon-${country_code} mx-2`}>

          </span>
          {name}
          </button>
      </li>
    ))}
    
  </ul>
</div> 
      </div>
      <div clasName= "d-flex flex-column align-itmes-start">
        <h1 className="font-weight-normal mb-3">{t('welcome_message')}</h1>
        <p>{t('days_since_release', {number_of_days })}</p>
      </div>
    </div>
  );
}

export default App;
