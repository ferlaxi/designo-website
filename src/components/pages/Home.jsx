import Footer from "../sections/Footer"
import Header from "../sections/Header"
import HomePresentation from "../sections/Home/HomePresentation"
import HomeSecondSection from "../sections/Home/HomeSecondSection"
import HomeThirdSection from "../sections/Home/HomeThirdSection"
import HomeFourthSection from "../sections/Home/HomeFourthSection"
import { ScrollRestoration } from "react-router-dom"

const Home = () => {
  return (
    <>
      <Header />
      <HomePresentation />
      <HomeSecondSection />
      <HomeThirdSection />
      <HomeFourthSection /> 
      <Footer />
      <ScrollRestoration/>
    </>
  )
}

export default Home