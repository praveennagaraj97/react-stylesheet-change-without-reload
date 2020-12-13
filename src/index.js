import { render } from "react-dom"

import App from "./components/App"
import LanguageProvider from "./language"
import "./i18n"

render(
  <LanguageProvider>
    <App />
  </LanguageProvider>,
  document.querySelector("#root"),
)
