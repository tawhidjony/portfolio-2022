import React from 'react'
import styled from 'styled-components'
import Layout from '../Components/Layout/Layout'

const ProjectPage = () => {

    const ScrollImage = (e) => {
      const Scroll = e.target.className
      Scroll.scrollTop = 50;
    }
  return (
    <Layout>
        <Grid>
            <Item>
                <Card>
                    <CardBody onMouseOver={(e) => ScrollImage(e)} className="Hello" id="DEHHBD">
                        <ProjectImage src="https://images.unsplash.com/photo-1542144612-1b3641ec3459?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt=""/>
                    </CardBody>
                    <CardFooter>
                        <Button><ion-icon name="logo-github"></ion-icon></Button>
                        <Button><ion-icon name="play-circle-outline"></ion-icon></Button>
                    </CardFooter>
                </Card>
            </Item>
            <Item>
                <Card>
                    <CardBody>
                        <ProjectImage src="https://images.unsplash.com/photo-1542144612-1b3641ec3459?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt=""/>
                    </CardBody>
                    <CardFooter>
                        <Button><ion-icon name="logo-github"></ion-icon></Button>
                        <Button><ion-icon name="play-circle-outline"></ion-icon></Button>
                    </CardFooter>
                </Card>
            </Item>
            <Item>
                <Card>
                    <CardBody>
                        <ProjectImage src="https://images.unsplash.com/photo-1542144612-1b3641ec3459?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt=""/>
                    </CardBody>
                    <CardFooter>
                        <Button><ion-icon name="logo-github"></ion-icon></Button>
                        <Button><ion-icon name="play-circle-outline"></ion-icon></Button>
                    </CardFooter>
                </Card>
            </Item>
            <Item>
                <Card>
                    <CardBody>
                        <ProjectImage src="https://via.placeholder.com/150" alt=""/>
                    </CardBody>
                    <CardFooter>
                        <Button><ion-icon name="logo-github"></ion-icon></Button>
                        <Button><ion-icon name="play-circle-outline"></ion-icon></Button>
                    </CardFooter>
                </Card>
            </Item>
            <Item>
                <Card>
                    <CardBody>
                        <ProjectImage src="https://via.placeholder.com/150" alt=""/>
                    </CardBody>
                    <CardFooter>
                        <Button><ion-icon name="logo-github"></ion-icon></Button>
                        <Button><ion-icon name="play-circle-outline"></ion-icon></Button>
                    </CardFooter>
                </Card>
            </Item>
            <Item>
                <Card>
                    <CardBody onMouseOver={(e) => ScrollImage(e)} id="Scroll">
                        <ProjectImage src="https://via.placeholder.com/150" alt=""/>
                    </CardBody>
                    <CardFooter>
                        <Button><ion-icon name="logo-github"></ion-icon></Button>
                        <Button><ion-icon name="play-circle-outline"></ion-icon></Button>
                    </CardFooter>
                </Card>
            </Item>
        </Grid>
    </Layout>
  )
}

export default ProjectPage

const Grid = styled.div`
    display: grid;
    grid-auto-columns: minmax(20rem, auto);
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
    grid-gap: 1rem;
`

const Item = styled.div``
const Card = styled.div`
    overflow: hidden;
    height: 362px;
    border-radius: .4rem;
    display: flex;
    flex-direction: column;
    background:${props => props.theme.primary};
`
const CardBody = styled.div`
    width: 100%;
    height: 300px;
    overflow: hidden;
`
const CardFooter = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 62px;
    border-top: 1px solid ${props => props.theme.text};
`
const ProjectImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;

`
const Button = styled.button`
    background: ${props => props.theme.secondary};
    border: none;
    border-radius: 100%;
    color: ${props => props.theme.primary};
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin:0 .5rem;
    ion-icon.md.hydrated {
       font-size: 1.5rem;
    }
`