import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Articles from "./components/Articles";
import ArticleState from "./context/articles/ArticleState";

function App() {
  return (
    <ArticleState>
    <ChakraProvider>
      <Navbar />
      <Header />
      <Articles />
    </ChakraProvider>
    </ArticleState>
  );
}

export default App;
