import React, { useState } from "react";

import Search from "./../searchComponent/search";
import ThemeContext from './../appContext/themeContext';



const App = () => {
  const theme = useState('peru');

  return (
    <React.StrictMode>
      <ThemeContext.Provider value={theme}>
      <div>
          <h2>hello</h2>
          <Search/>
       </div>
      </ThemeContext.Provider>
      
    </React.StrictMode>  );

  
}

export default App;