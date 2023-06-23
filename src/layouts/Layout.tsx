import React from 'react';
import { Header } from '../components/header/components/Header';
import { Footer } from '../components/footer/components/Footer';
import Divider from '../components/ui/components/Divider';

type Props = {
  children?: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Divider />
      <Footer />
    </div>
  );
};
