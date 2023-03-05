import './App.css';
import { Routes,Route} from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Home from "./pages/home";
import Search from "./pages/search";


function App() {

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "https://countries.trevorblades.com",
  });
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/search" exact element={<Search/>} />
      </Routes>
    </div>
  </ApolloProvider>
  );
}

export default App;
