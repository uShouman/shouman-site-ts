import Box from "@src/components/Box"
import theme from "@src/theme"
import styled from "styled-components"

const MeuComponente = styled.div`
  color: purple;
`;

export default function HomeScreen() {
  return (
    <Box
      tag="main"
      styleSheet={{
        fontFamily: theme.tipography.fontFamily
      }}
    >
      <MeuComponente><h1>Opaaa</h1></MeuComponente>

    </Box>
  )
}