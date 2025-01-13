import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { Palette } from "../../fixtures/pallette";

// Styled components
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  position: relative;
`;

const Header = styled.header<{ backgroundColor?: string; textColor?: string }>`
  background: ${({ backgroundColor }) => backgroundColor || Palette.pumpkin};
  font-weight: bold;
  color: ${({ textColor }) => textColor || Palette.white};
  padding: 40px;
  text-align: center;
  font-size: 2.5rem;
`;

const MainContent = styled.main<{ background: "mountains" | "buildings" }>`
  flex: 1;
  background-color: #f5f5f5;
  background: url(../../assets/${({ background }) => background}.svg);
`;

const Footer = styled.footer`
  background-color: #333;
  color: white;
  text-align: center;
  padding: 10px;
  font-size: 0.9rem;
`;

// Define Props Interface
interface PageProps {
  title: string; // The header title
  headerColor?: string;
  headerTextColor?: string;
  children: ReactNode; // The main content (ReactNode to allow flexibility)
  footerText?: string; // Optional footer text
  background?: "buildings" | "mountains";
}

// Functional Component
const Page: React.FC<PageProps> = ({
  title,
  headerColor,
  headerTextColor,
  children,
  footerText,
  background,
}) => {
  return (
    <PageWrapper>
      <Header backgroundColor={headerColor} textColor={headerTextColor}>
        {title}
      </Header>
      <MainContent background={background || "mountains"}>
        {children}
      </MainContent>
      {footerText && <Footer>{footerText}</Footer>}
    </PageWrapper>
  );
};

export { Page };
