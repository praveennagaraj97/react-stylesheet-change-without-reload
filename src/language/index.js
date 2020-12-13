import i18next from "i18next"
import { Suspense, useEffect, useState } from "react"
// import { useSelector } from "react-redux"

// import { reloadCss } from "../utils"

// const EnglishStyles = React.lazy(() => import("./EnglishStyle"))

// May be if arabic styles has custom style layout use this.
// const ArabicStyles = React.lazy(() => import("./ArabicStyle"))

export default function LanguageProvider({ children }) {
  //   const currentLang = useSelector(({ language: { lang } }) => lang)
  const [currentLang, setCurrentLang] = useState("en")

  useEffect(() => {
    i18next.changeLanguage(currentLang)
  }, [currentLang])

  if (currentLang === "ar") {
    const links = document.getElementsByTagName("link")

    for (let each of links) {
      if (each.getAttribute("lang") === "english") {
        each.href = ""
        each.rel = ""
        each.integrity = ""
        each.crossOrigin = ""
        each.setAttribute("lang", "")
      }
    }

    const bootstrapRTLLink = document.createElement("link")
    bootstrapRTLLink.rel = "stylesheet"
    bootstrapRTLLink.setAttribute("lang", "arabic")
    bootstrapRTLLink.href = "https://cdn.rtlcss.com/bootstrap/v4.2.1/css/bootstrap.min.css"
    bootstrapRTLLink.integrity =
      "sha384-vus3nQHTD+5mpDiZ4rkEPlnkcyTP+49BhJ4wJeJunw06ZAp+wzzeBPUXr42fi8If"
    bootstrapRTLLink.crossOrigin = "anonymous"

    document.head.appendChild(bootstrapRTLLink)
  } else {
    const links = document.getElementsByTagName("link")

    for (let each of links) {
      if (each.getAttribute("lang") === "arabic") {
        each.href = ""
        each.rel = ""
        each.integrity = ""
        each.crossOrigin = ""
        each.setAttribute("lang", "")
      }
    }
    const bootstrapLTRLink = document.createElement("link")
    bootstrapLTRLink.rel = "stylesheet"
    bootstrapLTRLink.href =
      "https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
    bootstrapLTRLink.integrity =
      "sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
    bootstrapLTRLink.crossOrigin = "anonymous"
    bootstrapLTRLink.setAttribute("lang", "english")

    document.head.appendChild(bootstrapLTRLink)
  }

  if (currentLang === "ar") {
    return (
      <>
        <Suspense fallback={<></>}>
          <button onClick={() => setCurrentLang("en")}>Switch To english</button>
        </Suspense>
        {children}
      </>
    )
  }

  return (
    <>
      <Suspense fallback={<></>}>
        <button onClick={() => setCurrentLang("ar")}>Switch to Arabic</button>
      </Suspense>
      {children}
    </>
  )
}
