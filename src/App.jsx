
import React from 'react'
import Form from './form/Form'
import Answer from './answer/Answer';
import { useState } from 'react';
import { Container }  from "./styles/StyledComponents";



const App = () => {
  const [view, setView] = useState("form");
  const [values, setValues] = useState(null);
  const handleView = (page) => {
    setView(page);
  }

  const handleFetchValues = (userInformation) => {
    setValues(userInformation);
    setView("answer")
  }

  return (
    <Container content="evenly"> 
    {
          view === "form" && (<Form handleFetchValues={handleFetchValues} />)

    }

    {
          view === "answer" && (<Answer {...values}/>)

    }
    </Container> 
  )
}

export default App
