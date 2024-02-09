import { mainWhiteLogo } from "assets/images";
import React from "react";

interface ILoginLayoutProps {
  children: any;
}

const LoginLayout: React.FC<ILoginLayoutProps> = ({ children }) => {
  return (
    <section id="login-layout">
      <div id="group">
        <div className="text-center img-responsive main-image">
          <img src={mainWhiteLogo} alt="white-logo" />
        </div>
        <div className="login-layout-form-box">{children}</div>
      </div>
    </section>
  );
};

export default LoginLayout;
