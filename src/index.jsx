import React from 'react';
import ReactDOM from 'react-dom';
import {
    Container,
    Row,
    Col,
    Nav,
    Navbar,
    Form,
    FormControl,
    Button,
    Card,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom";


class Header extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand as={Link} to="/">Jiajun的编程随想</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form inline className="mr-auto">
                        <FormControl type="text" placeholder="搜索" className="mr-sm-2" />
                        <Button variant="outline-success">搜索</Button>
                    </Form>
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/aboutme">关于我</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

class Content extends React.Component {
    render() {
        return (
            <p>{this.props.content}</p>
        )
    }
}

class Sidebar extends React.Component {
    render() {
        return (
            <Card>
                <Card.Img variant="top" src="./mp.jpg" />
                <Card.Body>
                    <Card.Title>微信公众号</Card.Title>
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
                        <Content content={this.props.content} />
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


class Index extends React.Component {
    render() {
        return (
                <Container>
                    <Header />
                    <Body content="index"/>
                    <Footer />
                </Container>
        )
    }
}

class About extends React.Component {
    render() {
        return (
                <Container>
                    <Header />
                    <Body content="about"/>
                    <Footer />
                </Container>
        )
    }
}


class Blog extends React.Component {
    componentDidMount() {
        document.title = "Jiajun的编程随想";
    }

    render() {
        return (
            <Router>
                <Route path="/" exact component={Index} />
                <Route path="/aboutme" component={About} />
            </Router>
        )
    }
}


ReactDOM.render(
    <Blog />,
    document.getElementById('root')
);
