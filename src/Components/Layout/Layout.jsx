import styled from 'styled-components'
import Navbar from '../Navigation/Navbar'
const Layout = ({children, LayoutProp}) => {
  console.log(LayoutProp);
  return (<>
    <Container>
        <Navbar />
        <Wrapper style={LayoutProp !== null ? LayoutProp :""} >
          {children}
        </Wrapper>
    </Container>
  </>)
}

export default Layout

const Container = styled.div`
    width: calc(100vw - 80px);
    height: calc(100vh - 80px);
    background: ${props => props.theme.body};
    border-radius: 15px;
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
    overflow: hidden;
    position: relative;
`
const Wrapper = styled.div`
    width: 100%;
    height: calc(100vh - 175px);
    padding: 1rem;
   
`