import React from "react";
import Footer from "component/Footer";
import Header from "component/Header";

interface IHeaderFooterLayoutProps {
  children: any;
}

const HeaderFooterLayout: React.FC<IHeaderFooterLayoutProps> = ({
  children,
}) => {
  return (
    <div id="header-footer-layout">
      <Header />
      <div className="content">
        <section className="blank"></section>
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default HeaderFooterLayout;
