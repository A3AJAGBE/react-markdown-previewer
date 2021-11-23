import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'

const App = () => {
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
                            <textarea id="editor"></textarea>
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

export default App;
