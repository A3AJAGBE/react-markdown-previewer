import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import { marked } from 'marked';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faFileCode } from '@fortawesome/free-solid-svg-icons';

marked.setOptions({
    breaks: true
});

const EDIT = <FontAwesomeIcon icon={faCode} />
const PREVIEW = <FontAwesomeIcon icon={faFileCode} />

const PLACEHOLDER = `**This is an example of a bold text**

# Default previewer text

## This is heading 2 (Sub-heading)

[FCC Learn](https://www.example.com) 

Example of inline code: \` <p> Hello World <br /> </p> \`

\`\`\` 
// Example of Code block: 
const profile = {
    name: 'Aminat', 
    stack: 'Full Stack Dev'
    }  
\`\`\`

// List item
1. code 
2. Run 
3. Debug

> Block Quotes

![A3 Logo](https://raw.githubusercontent.com/A3AJAGBE/MyPortfolio/main/portfolio/static/images/A3.png?token=AGRFJCC3T6DKWGCBEPYPQFTBU7WIQ)

`;

class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            markdown: PLACEHOLDER,
        };
        
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({markdown: event.target.value});
    }

    render() {
        return (
            <Container fluid id="App-Container">
                <header className="d-flex justify-content-center py-3">
                    <h1 className="text-center">A3AJAGBE Markdown Previewer </h1>
                </header>
        
                <Container fluid className="pb-4">
                    <Row xs={1} md={2} className="g-4" id="MP-Row">
                        <Col>
                            <Card id="Editor-Card">
                                <Card.Header> <h2> {EDIT} Editor</h2> </Card.Header>
                                <Card.Body>
                                    <textarea className="p-4" id="editor" value={this.state.markdown} onChange={this.handleChange}></textarea>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card id="Preview-Card">
                                <Card.Header> <h2> {PREVIEW} Preview</h2> </Card.Header>
                                <Card.Body className="Preview-scroll" id="preview"  dangerouslySetInnerHTML={{
                                            __html: marked(this.state.markdown),}}>
                                
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
        
            </Container>
        );
    }
}

export default App;
