import { useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/145</p>
      </Main>
    </div>
  );
}

export default App;
