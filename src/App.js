import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import Chatbot from './components/Chatbot';
import image1 from './assets/img1.png';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  width: 100%;
  /*height: 100vh;*/
  top: 0;
  bottom: 0;
  background-image: linear-gradient(280deg, #ffa203, #f27202);
  /* background-color: black; */
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 2em;
    align-items: center;
    height: 30%;
    justify-content: space-around;
    
    background-color: transparent;
    padding: .5rem 1rem;
    width: 60%;
    font-family: 'Indie Flower', cursive;
    font-size: 50px;
`;

const StyledButton = styled.button`
  width: 20%;
  text-align: center;
  height: 30px;
`;

class App extends Component {

  state = {
    showModal: false
  }

  modalHandler = () => {
    this.setState({
        showModal: !this.state.showModal
    });
};

  render() {
    return (
      <StyledWrapper>
        <Header />
        
        {/* <Chatbot /> */}
        <StyledInfo>
          <div> Hi Liam, </div>
          <div> welcome to our semester school project. 
            Have you ever heard about modern slavery and how you can make the difference? </div>
            <div id='section-two'>Get ready to learn more </div>

            
            {this.state.showModal ? (
                    <Chatbot modalHandler={this.modalHandler}/>
                ) : null}
          <StyledButton onClick={() => this.modalHandler()}>Open Chat</StyledButton>
         
          {/* <div><img alt='chain' src={image1}/></div> */}


         <div> Or project will now take you to Bangladesh in South Asia. Have youheard of this country before?</div>
      <div id='section-three'> Here is some info on Bangladesh:</div>

      <div>It's sad, isn't it, to know that there are many children like Ravi? The good news is that you cand od something to help them!
          First, you need to answer a couple of questions: </div>
          <div>
      <ol>
      <li>Do you wear clothes from xxxx?</li>
      <li>Do you use a mobile phone?</li>
      <li>do you eat vegetables from greenhouses out of season?</li>
      </ol>
      </div>
      </StyledInfo>
      </StyledWrapper>
    )
  }
}


export default App;
