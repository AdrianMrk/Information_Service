import * as React from "react";
import {App} from "./App"

export const AppHeader = () => {
  return (
    <header className="ui fixed menu">
      <div className="myButtons" style={{ backgroundColor: 'white' }} onClick={App.onClickRSS()} >Strona główna</div>
        <p style={{ position: 'absolute', left:'122px', top:'48px', backgroundColor: 'rgb(247, 247, 247)',paddingRight:'4px',paddingLeft:'4px',  }}>Strefa forum</p>
        <div className="myButtons" onClick={App.onClickHot()}>Gorące</div>
        <div className="myButtons" onClick={App.onClickTop()}>TOP</div>
        <div className="myButtons" onClick={App.onClickNew()}>Najnowsze</div>
    </header>
  );
};
