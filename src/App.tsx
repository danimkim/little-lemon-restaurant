import Header from "./components/Header";
import Footer from "./components/Footer";
import { Global } from "@emotion/react";
import { global } from "./styles/global";

function App() {
  return (
    <>
      <Global styles={global} />
      <Header />
      <main></main>
      <Footer />
    </>
  );
}

export default App;
