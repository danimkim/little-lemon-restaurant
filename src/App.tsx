import Header from "./components/Header";
import Footer from "./components/Footer";
import { Global } from "@emotion/react";
import { global } from "./styles/global";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";

function App() {
  return (
    <>
      <Global styles={global} />
      <ThemeProvider theme={theme}>
        <Header />
        <main></main>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
