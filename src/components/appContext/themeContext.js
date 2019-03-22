import { createContext } from 'react';

/* default data 
optional parameter*/
const ThemeContext = createContext(['green', () => {}]);


export default ThemeContext;