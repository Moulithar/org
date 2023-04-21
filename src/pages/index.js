import * as React from "react"
import Seo from "../components/seo"
import Header from "../components/Header/Header"
import We from "../components/We/We"
import About from "../components/About/About"
import Gallery from "../components/Gallery/Gallery"
import Testi from "../components/Testi/Testi"
import Team from "../components/Team/Team"
import Counter from "../components/Counter/Counter"
import Foot from "../components/Foot/Foot"
import Footer from "../components/Footer/Footer"
import "../styles/global.css";

const IndexPage = () => (
  <>
    <Header />
    <We />
    <About />
    <Counter />
    <Gallery />
    <Testi />
    <Team />
    <Foot />
    <Footer />
    
  </>
)
export const Head = () => <Seo title="Home" />

export default IndexPage
