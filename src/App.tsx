import React from "react";

import Feed from "./feed/feed";

import "./App.css";

const App = () => {
  return (
    <>
      <header className="header">
        <div className="headerContent">4networks s.r.o. Entry Task</div>
      </header>
      <div className="content">
        <div className="leftMenu"></div>
        <div className="right">
          <Feed />
        </div>
      </div>
      <footer className="footer">
        <div className="footerContent">
          <h3 className="footerTitle">Užitočné linky</h3>
          <div className="links">
            <a
              className="link"
              href="https://reactjs.org/docs/getting-started.html"
            >
              React Docs
            </a>
            <a
              className="link"
              href="https://www.apollographql.com/docs/react/"
            >
              Apollo Graphql React Docs
            </a>
            <a className="link" href="https://developer.mozilla.org/en-US/">
              MDN Web Docs
            </a>
            <a
              className="link"
              href="https://create-react-app.dev/docs/getting-started"
            >
              Create React App Docs
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
