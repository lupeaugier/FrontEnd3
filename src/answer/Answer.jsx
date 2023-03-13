import React from 'react'
import { Container } from '../styles/StyledComponents'

const styles = {
    headers: {
      margin: 0,
      color: "#443C68"
    },
    info: {
      color: "#443C68"
    }
  }

const Answer = ({ name, answer }) => {
  return (
    <Container>
        <h1 style={styles.headers}>Gran Respuesta, {name}!</h1>
        <h3 style={styles.info}>Lamentablemente no podemos saber si {answer} es la respuesta correcta.</h3>
        <h4>Pero gracias por intentarlo.</h4>
    </Container>
  )
}

export default Answer