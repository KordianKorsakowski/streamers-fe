import React from 'react';
import { Header } from '../components/header/components/Header';
import { Footer } from '../components/footer/components/Footer';
import { WrapperLayout } from './LayoutStyles.styles';

type Props = {
  children?: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <WrapperLayout>
      <Header />
      <div>{children}</div>
      <Footer />
    </WrapperLayout>
  );
};
