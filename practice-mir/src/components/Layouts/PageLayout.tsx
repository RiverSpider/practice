import Footer from '../Footer/Footer';
import Navigation from '../NavigationBar/Navigation';
import Header from './../Header/Header';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <Header />
      <Navigation />
      {children}
      <Footer />
    </>
  );
};

export default PageLayout;
