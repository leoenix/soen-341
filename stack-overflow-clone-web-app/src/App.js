import { Reset } from 'styled-reset';
import styled, {createGlobalStyle} from 'styled-components';
import Header from './Header';
import QuestionsPage from './QuestionsPage';


const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300,400;700&display=swap');
  body{
    background: EDF8F8;
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
      <QuestionsPage />
    </div>
  );
}

export default App;
