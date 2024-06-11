import { SignUpForm } from '../components/signform';
import { Brand } from '../components/navbar';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SignUp = () => {
    return(
        <>
            <Brand/>
            <Page/>
        </>
    );
}

const Page = () => {
    return(
        <Container>
            <Row>
                <Col xs={12} md={4}>
                <SignUpForm/>
                </Col>
                <Col xs={6} md={8}>
                xs=6 md=8
                </Col>
            </Row>
        </Container>
    );
}

export default SignUp;