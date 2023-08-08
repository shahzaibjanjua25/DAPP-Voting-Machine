import React from "react";

const Login = (props) => {
  return (
    <div className="login-container">
      <div className="login-header">
        <h1 className="welcome-message">
          Welcome to the <br /> ArtiFatto Decentralized Voting Application 
        </h1>
      </div>
      <div className="login-content">
        <p className="description">
          Cast your vote using blockchain technology and <br /> participate in
          a secure and transparent process.
        </p>
        <div className="cta-container">
          <button className="login-button" onClick={props.connectWallet}>
            Connect with Metamask
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Login;
