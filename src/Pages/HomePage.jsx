import React from 'react'
import styled from 'styled-components'
import Images from '../Assets/images'
import Layout from '../Components/Layout/Layout'
const LayoutProp = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}
const HomePage = () => {
 
  return (
    <Layout LayoutProp={LayoutProp} >
        <Card>
            <Paragraph>
                <h1>MD TAWHIDUR RAHMAN</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis illo sit eum suscipit porro expedita magnam, modi at deserunt commodi quam blanditiis ratione! Non mollitia numquam est in consectetur ipsam.</p>
                <div>
                  <button><ion-icon name="chatbubble-ellipses-outline"></ion-icon> Hire me</button>
                  <button><ion-icon name="shield-checkmark-outline"></ion-icon> Support me</button>
                </div>
            </Paragraph>
            <ProfileImage>
              <img src="https://www.seekpng.com/png/full/60-604032_face-businessman-png-dummy-images-for-testimonials.png" alt="" />
            </ProfileImage>
        </Card>
    </Layout>
  )
}

export default HomePage

const Card = styled.div`
  display: flex;
  flex-direction: row;

`
const Paragraph = styled.div`
  width: 500px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding:1rem;
  h1{
    margin-bottom: .5rem;
  }
  p{
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
  div {
    margin-top: 1rem;
    display: flex;
    button {
      background: transparent;
      border: 1px solid ${props => props.theme.primary};
      color: ${props => props.theme.primary};
      font-size: 1rem;
      padding: 10px;
      border-radius: 5px;
      transition: all 0.5s ease;
      margin: 0 8px;
      display: flex;
      justify-content: center;
      ion-icon.md.hydrated {
        margin-right: 5px;
      }
      align-items: center;
      &:hover {
        color: ${props => props.theme.text};
        cursor: pointer;
      }
      &:first-child {
        margin-left: 0;
      }
    }
  }
`

const ProfileImage = styled.div`
  max-width: 450px;
  max-height: 444px;
  min-width: 450px;
  min-height: 444px;
  overflow: hidden;
  background-image: url(${Images.imageBg});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  img{
    width: 250px;
    height: 250px;
    object-fit: contain;
    border: 5px solid ${props => props.theme.primary};
    border-radius: 100%;
  }
`
