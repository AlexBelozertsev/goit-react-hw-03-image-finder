import React from 'react';
import AppBar from '../AppBar';
import Container from '../Container';

const Layout = ({ children }) => (
  <>
    <AppBar text="React. HomeWork-3.2. Image Finder." />
    <Container>{children}</Container>
  </>
);

export default Layout;
