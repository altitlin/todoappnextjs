import Link from 'next/link';

import { StyledNav, StyledNavbarBrand, StyledNavbarCreate } from './style';

const Navbar = () => (
  <StyledNav>
    <Link href='/'>
      <StyledNavbarBrand>Todo App</StyledNavbarBrand>
    </Link>
    <Link href='/new'>
      <StyledNavbarCreate> Create a new todo </StyledNavbarCreate>
    </Link>
  </StyledNav>
);

export default Navbar;
