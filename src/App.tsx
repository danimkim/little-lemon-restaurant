import { useState } from "react";
import "./App.css";
import "./reset.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main></main>
      <Footer />
    </>
  );
}

export default App;
