import React from 'react'
import Input from './Input'

class App extends React.Component {
    render() {
        return (
            <main>
                <h1>Inputs</h1>
                {`<input />`}
                <br/>
                <Input label="Enter your name..." name="Name (4 to 8 characters):"/>
                <br/>
                {`<input error/>`}
                <br/>
                <Input error label="Enter your name..." name="Name (4 to 8 characters):"/>
                <br/>
                {`<input disabled/>`}
                <br/>
                <Input disabled label="Enter your name..." name="Name (4 to 8 characters):"/>
                <br/>
                {`<input disabled/>`}
                <br/>
                <Input helperText="Your name must be 4-8 characters in length." label="Enter your name..." name="Name (4 to 8 characters):"/>
            </main>
        )
    }
}

export default App;