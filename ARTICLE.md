# React project localization with i18next

## What is software localization?

Software localization is the process of adapting a software product to the linguistic, cultural and technical requirements of a target market. This process is labour-intensive and often requires a significant amount of time from the development teams.

> [Rony; plz write something why localization is important]

## Installation

Create react project using `create-react-app`

```sh
npx create-react-app app-name
```

Go to inside project folder

```sh
cd app-name
```

## Install required packages

We will install required i18next packages here

```sh
npm install i18next react-i18next i18next-browser-languagedetector
```

## Configure i18n file

1. Create `locale` folder inside `src` directory

2. Create `en.json` file inside `locale` directory and add your translations

```json
{
    "Hello world": "Hello world",
    "This is a simple react application": "This is a simple react application"
}
```

and create `fr.json` file beside `en.json`

```json
{
    "Hello world": "Bonjour le monde",
    "This is a simple react application": "Ceci est une simple application de réaction"
}
```

3. Create `i18n` configuration file inside `locale` directory

```javascript
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./en.json";
import fr from "./fr.json";

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: resources,
  });

export const _t = i18n.t.bind(i18n);
export default i18n;
```

### Final Steps

Import `i18n` file inside `index.js` file

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import "./locale/i18n";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
```

### Using translations

import `_t` function anywhere you want to translate the text

```javascript
<p>{_t('Hello world')}</p>
```

Changing the langauge

```javascript
const { i18n } = useTranslation();
```

```javascript
i18n.changeLanguage("en")
```

Bellow is our `App.js` file looks like

```javascript
import logo from "./logo.svg";
import "./App.css";
import { _t } from "./locale/i18n";
import { useTranslation } from "react-i18next";

function App() {
  const { i18n } = useTranslation();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{ marginBottom: 0 }}>{_t("Hello world")}</h1>
        <p>{_t("This is a simple react application")}</p>
        <div>
          <button onClick={() => i18n.changeLanguage("en")}>English</button>
          <button onClick={() => i18n.changeLanguage("fr")}>French</button>
        </div>
      </header>
    </div>
  );
}

export default App;
```

That's it.