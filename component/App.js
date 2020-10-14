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
                <div className="container">
                    <div>
                        {`<input error/>`}
                        <br/>
                        <Input error label="Enter your name..." name="Name (4 to 8 characters):"/>
                    </div>
                    <div>
                        {`<input disabled/>`}
                        <br/>
                        <Input disabled label="Enter your name..." name="Name (4 to 8 characters):"/>
                    </div>
                </div>
                
                <div className="container">
                    <div>
                        {`<input helperText="Some interesting text"/>`}
                        <br/>
                        <Input helperText="Your name must be 4-8 characters in length." label="Enter your name..." name="Name (4 to 8 characters):"/>
                    </div>
                    <div>
                        {`<input helperText="Some interesting text" error/>`}
                        <br/>
                        <Input helperText="Your name must be 4-8 characters in length." error label="Enter your name..." name="Name (4 to 8 characters):"/>
                    </div>
                </div>
                
                <div className="container">
                    <div>
                        {`<input startIcon/>`}
                        <br/>
                        <Input startIcon label="Enter your name..." name="Name (4 to 8 characters):"/>
                    </div>
                    <div>
                        {`<input endIcon/>`}
                        <br/>
                        <Input endIcon label="Enter your name..." name="Name (4 to 8 characters):"/>
                    </div>
                </div>
                <br/>
                <div>
                    {`<input value="Text"/>`}
                    <br/>
                    <Input label="Enter your name..." value="Text" name="Name (4 to 8 characters):"/>
                </div>
                <br/>
                <div className="container">
                    <div>
                        {`<input size="sm"/>`}
                        <br/>
                        <Input label="Enter your name..." size="sm" name="Name (4 to 8 characters):"/>
                    </div>
                    <div>
                        {`<input size="md"/>`}
                        <br/>
                        <Input label="Enter your name..." size="md" name="Name (4 to 8 characters):"/>
                    </div>
                </div>
                <br/>
                <div>
                    {`<input fullWidth/>`}
                    <br/>
                    <Input label="Enter your name..." fullWidth name="Name (4 to 8 characters):"/>
                </div>
                <br/>
                <div>
                    {`<input rows = "4"/>`}
                    <br/>
                    <Input rows = "4" label="Enter your description ..." name="Your description (< 200 words):"/>
                </div>
            </main>
        )
    }
}

export default App;