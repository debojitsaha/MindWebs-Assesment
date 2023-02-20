import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Header from "./components/Header";
import Articles from "./components/Articles";
import ArticleState from "./context/articles/ArticleState";
import Footer from "./components/Footer";

function App() {
  return (
    <ArticleState>
      <ChakraProvider>
        <Navbar />
        <Header />
        <Articles />
        <Footer />
      </ChakraProvider>
    </ArticleState>
  );
}

export default App;
