import { Container, Row, Col } from 'react-bootstrap';
import { MailchimpForm } from './MailchimpForm';
import logo from '~/assets/img/logo.svg';
import navIcon1 from '~/assets/img/nav-icon1.svg';
import navIcon2 from '~/assets/img/nav-icon2.svg';
import navIcon3 from '~/assets/img/nav-icon3.svg';
import './Footer.scss';
import '~/components/Banner/Banner.scss';
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <MailchimpForm />
                    <Col size={12} sm={12} className="text-center">
                        <div className="social-icon">
                        <a href="www.linkedin.com/in/muhammad-usman-b32723228" target="blank">
                        <FaLinkedin style={{height:'30px',width:'30px',color:'white'}}/>
                            </a>
                            <a href="https://github.com/Usman245" target="blank" style={{marginLeft:'10px'}}>
                                <FaGithub style={{height:'30px',width:'30px',color:'white'}}/>
                            </a>
                        </div>
                        <p>Copyright 2022. Usman</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
