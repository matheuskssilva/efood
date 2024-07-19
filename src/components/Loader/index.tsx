
import { PacmanLoader } from 'react-spinners'
import { colors } from '../../styles'
import { Container } from './styles'

export const Loader = () => {
  return (
    <Container>
        <PacmanLoader color={colors.rose} />
    </Container>
  )
}
