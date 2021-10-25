import { Reset } from 'styled-reset';
import styled, {createGlobalStyle} from 'styled-components';
import Header from './Header';
import QuestionsPage from './QuestionsPage';
import AskQuestionPage from './AskQuestionPage';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


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
  
      <Router> 
        <Header />
        <Switch>
            <Route exact path="/" component={QuestionsPage} />
          <Route exact path="/ask" component={AskQuestionPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
