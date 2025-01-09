import styled from "@emotion/styled/macro";

const Header = () => (
    <>
    <StyledHeader>Welcome to Sharpe Home</StyledHeader>
    </>
);

const StyledHeader = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    height: 1em;
    width: 100%;
`

export { Header };