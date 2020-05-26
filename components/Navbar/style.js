import styled from 'styled-components';

const Link = styled.a`
  color: #fff;
  text-decoration: none;
  cursor: pointer;
`;

export const StyledNav = styled.nav`
  padding: 1em 2em;
  margin-bottom: 2em;
  background-color: #008cba;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledNavbarCreate = styled(Link)`
  font-size: 1.5em;
`;

export const StyledNavbarBrand = styled(Link)`
  font-size: 2em;
`
