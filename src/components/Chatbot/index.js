import React, { Component } from 'react';

 class Chatbot extends Component {
    render() {
        return (
            <div>
                <iframe className='chatbot' title='chatbot'
                    allow="microphone;"
                    width="350"
                    height="430"
                    src="https://console.dialogflow.com/api-client/demo/embedded/3c56fb62-78e0-41fe-800e-66318eaf9bd2">
                </iframe>
            </div>
        )
    }
}

export default Chatbot;
