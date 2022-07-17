import React from "react";
import api from "../utils/Api";
import Header from "./Header";
import Loader from "./Loader";
import Main from "./Main";

function App() {
  const [cards, setCards] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    api.getCards()
      .then((res) => {
        setCards(res)
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  function checkPosition() {
    const height = document.body.offsetHeight;
    const screenHeight = window.innerHeight;
    const scrolled = window.scrollY;
    const position = scrolled + screenHeight;

    if (position >= (height - 5)) {
      api.getCards()
        .then((res) => {
          setCards([...cards, ...res])
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }

  React.useEffect(() => {
    window.addEventListener("scroll", checkPosition);
    return () => window.removeEventListener("scroll", checkPosition);
  });

  return (
    <div className="page">
      <Header />
      {isLoading ? <Loader /> : <Main cards={cards} />}
    </div>
  )
}

export default App;
