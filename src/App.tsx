import Header from "./components/Header";
import Footer from "components/Footer";
import { Global } from "@emotion/react";
import { global } from "./styles/global";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import { HeroSection } from "@containers/Hero";
import Highlights from "@containers/Highlights";
import Testimonials from "@containers/Testimonials";
import About from "@containers/About";

function App() {
  return (
    <>
      <Global styles={global} />
      <ThemeProvider theme={theme}>
        <Header />
        <main>
          <HeroSection />
          <Highlights />
          <Testimonials />
          <About />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
