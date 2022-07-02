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
