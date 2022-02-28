import React, { useState } from "react"
import data from "./Data"
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

function App() {

  const [people, setPeople] = useState(data)
  const [index, setIndex] = useState(0)

  return (
    <Box>
      <Typography
        variant="h4"
      >/ Reviews
      </Typography>
      <Box>
        {people.map(
          (person, personIndex) => {

            const {id, image, name, title, quote} = person
            return(
              <Box key={id}>
                <img src={image} width="150px"/>
                <Typography
                  variant="h6"
                >{name}
                </Typography>
                <Typography
                  variant="p"
                >{title}
                </Typography>
                <Typography
                  variant="p"
                >{quote}
                </Typography>
                <FaQuoteRight />
              </Box>
            )
          }
        )}
      </Box>
      <Button>
        <FiChevronLeft />
      </Button>
      <Button>
        <FiChevronRight />
      </Button>

    </Box>
  );
}

export default App;