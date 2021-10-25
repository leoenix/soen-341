import { Reset } from 'styled-reset';
import styled, {createGlobalStyle} from 'styled-components';
import Header from './Header';


const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300,400;700&display=swap');
  body{
    background: #ff8b14;
    color: #fff;
    font-family: Roboto, sans-serif;
  }
`;

function App() {
  return (
    <div>
      <Reset />
      <GlobalStyles />
      <Header />

    </div>
  );
}

export default App;
