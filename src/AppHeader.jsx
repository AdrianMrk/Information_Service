import * as React from "react";

export const AppHeader = () => {
  return (
    <header className="ui fixed menu">
      <nav className="ui container">
        <div className="header item">
          <img
            className="logo"
            src="https://typeofweb.com/wp-content/uploads/2017/08/cropped-typeofweb_logo-04-white-smaller-1-e1504359870362.png"
            alt="logo"
          />
          Lista kontaktów
        </div>
        <div className="header item">
          <button className="ui button">Dodaj</button>
        </div>
      </nav>
    </header>
  );
};
