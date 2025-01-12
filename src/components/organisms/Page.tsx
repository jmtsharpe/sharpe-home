import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import { Palette } from "../../fixtures/pallette";

// Styled components
const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, sans-serif;
`;

const Header = styled.header`
  background: ${Palette.pumpkin};
  font-weight: bold;
  color: white;
  padding: 10px;
  text-align: center;
  font-size: 2.5rem;
`;

const MainContent = styled.main<{ background: "mountains" | "buildings" }>`
  flex: 1;
  padding: 20px;
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
  children: ReactNode; // The main content (ReactNode to allow flexibility)
  footerText?: string; // Optional footer text
  background?: "buildings" | "mountains";
}

// Functional Component
const Page: React.FC<PageProps> = ({
  title,
  children,
  footerText,
  background,
}) => {
  return (
    <PageWrapper>
      s<Header>{title}</Header>
      <MainContent background={background || "mountains"}>
        {children}
      </MainContent>
      {footerText && <Footer>{footerText}</Footer>}
    </PageWrapper>
  );
};

export { Page };
