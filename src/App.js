import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

 const PLACEHOLDER = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a volutpat urna. Suspendisse quis ex felis. Praesent ultrices posuere dolor, ac ultrices massa suscipit sed. Donec ornare congue ligula in gravida. Ut sollicitudin euismod ligula iaculis vulputate. Nullam non diam ut augue convallis varius quis vitae elit. Maecenas finibus, sapien sit amet accumsan sodales, nisi massa imperdiet metus, ac tincidunt lacus odio in est. Sed vel ultrices augue, nec egestas dolor. Integer vitae porta urna. Cras quis dapibus libero. Sed eget facilisis elit. Donec luctus, elit non aliquam volutpat, nisi nulla accumsan diam, nec placerat leo mauris vel velit. Morbi ac fringilla lectus. Maecenas porttitor sapien elit, id aliquet metus porttitor at. Donec et sapien eu velit vulputate gravida quis ac nibh. Quisque nec eros nec libero tempor ultricies. Aliquam erat volutpat. Nam ipsum magna, mollis a dignissim tristique, scelerisque ac libero. Aliquam erat volutpat. Sed posuere est dui, vel semper lacus posuere at. Etiam nec tincidunt ipsum. Etiam congue magna quis dignissim mollis. Fusce aliquet vehicula volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a volutpat urna. Suspendisse quis ex felis. Praesent ultrices posuere dolor, ac ultrices massa suscipit sed. Donec ornare congue ligula in gravida. Ut sollicitudin euismod ligula iaculis vulputate. Nullam non diam ut augue convallis varius quis vitae elit. Maecenas finibus, sapien sit amet accumsan sodales, nisi massa imperdiet metus, ac tincidunt lacus odio in est. Sed vel ultrices augue, nec egestas dolor. Integer vitae porta urna. Cras quis dapibus libero. Sed eget facilisis elit. Donec luctus, elit non aliquam volutpat, nisi nulla accumsan diam, nec placerat leo mauris vel velit. Morbi ac fringilla lectus. Maecenas porttitor sapien elit, id aliquet metus porttitor at. Donec et sapien eu velit vulputate gravida quis ac nibh. Quisque nec eros nec libero tempor ultricies. Aliquam erat volutpat. Nam ipsum magna, mollis a dignissim tristique, scelerisque ac libero. Aliquam erat volutpat. Sed posuere est dui, vel semper lacus posuere at. Etiam nec tincidunt ipsum. Etiam congue magna quis dignissim mollis. Fusce aliquet vehicula volutpat.";

class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            markdown: ""
        };
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
                                <Card.Header> <h2>Editor</h2> </Card.Header>
                                <Card.Body>
                                    <textarea id="editor" placeholder={PLACEHOLDER} className="p-4"></textarea>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card id="Preview-Card">
                                <Card.Header> <h2>Preview</h2> </Card.Header>
                                <Card.Body id="preview">
                                
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
