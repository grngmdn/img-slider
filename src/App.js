import React, { useState } from "react"
import data from "./Data"

function App() {

  const [people, setPeople] = useState(data)

  return (
    <div>
      <h1>/ Reviews</h1>
      <div>
        {people.map(
          (person, personIndex) => {

            const {id, image, name, title, quote} = person
            return(
              <div key={id}>
                <img src={image} width="150px"/>
                <h4>{name}</h4>
                <p>{title}</p>
                <p>{quote}</p>
              </div>
            )
          }
        )}
      </div>
      <button>prev</button>
      <button>next</button>

    </div>
  );
}

export default App;