import styled from "@emotion/styled";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const FooterContainer = styled.footer`
  display: flex;
  position: sticky;
  bottom: 0;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #2c3e50;
  color: #ecf0f1;
  font-size: 0.9rem;
  box-sizing: border-box;
  width: 100%;
  bottom: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
    text-align: center;
  }
`;

const Copyright = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;

  a {
    text-decoration: none;
    color: #ecf0f1;
    font-size: 1.2rem;

    &:hover {
      color: #1abc9c;
    }
  }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <Copyright>
                &copy; {new Date().getFullYear()} Sharpe Inc.
            </Copyright>
            <SocialLinks>
                <a href="https://github.com/jmtsharpe" target="_blank" rel="noopener noreferrer">
                    <FaGithub/>
                </a>
                <a href="https://linkedin.com/in/jmtsharpe" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin/>
                </a>
            </SocialLinks>
        </FooterContainer>
    );
};

export {Footer};
