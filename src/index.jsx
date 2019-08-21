import React from 'react';
import ReactDOM from 'react-dom';
import {
    Container,
    Row,
    Col,
    Nav,
    Navbar,
    NavDropdown,
    Form,
    FormControl,
    Button,
    Card,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


class Header extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

class Content extends React.Component {
    render() {
        return (
            <p>content</p>
        )
    }
}

class Sidebar extends React.Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        )
    }
}

class Body extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col sm={8}>
                        <Content />
                    </Col>
                    <Col sm={4}>
                        <Sidebar />
                    </Col>
                </Row>
            </Container>
        )
    }
}

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer mt-2 mb-2">
                <span className="text-muted">
                    <p>
                        <a href="https://github.com/jiajunhuang">@jiajunhuang</a>
                        2015-2019, All Rights Reserved。你可以转载本站的文章，但是要注明文章作者和原文链接。感谢Cloudflare提供免费服务。
                    </p>
                </span>
            </footer>
            )
    }
}


class Blog extends React.Component {
    render() {
        return (
            <Container>
                <Header />
                <Body />
                <Footer />
            </Container>
        )
    }
}


ReactDOM.render(
    <Blog />,
    document.getElementById('root')
);
