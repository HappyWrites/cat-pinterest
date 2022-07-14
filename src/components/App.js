import React from "react";
import api from "../utils/Api";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [cards, setCards] = React.useState([]);


  React.useEffect(() => {
    api.getInitialCards()
      .then((res) => {
        setCards(res)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  return (
    <div className="page">
      <Header />
      <Main cards={cards} />
    </div>
  )
}

export default App;
