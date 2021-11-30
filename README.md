# :wave: StackOverflow Clone Web App (Soen 341) :wave: <br>


## Objective :trophy:

Implement a simplified version of StackOverflow, a Q&A platform, that enables users to ask and answer questions, vote for each other's answers, and authorize the OP (Original Poster) to accept the best answer


## Description :pencil2:

Build a simplified version of StackOverflow, which is essentially a Q&A website that enables users to ask questions or share their knowledge of programming by answering questions posted by other users.  The community can indicate which answers are most valuable and appropriate by upvoting them. Users can upvote any answer they want except for their own, and only the OP, the Original Poster of a question, gets to accept the best response

*Extra Feature: Add Comment Sections Under Both Questions And Answers (W/ Voting Functionality)*


## Core Features :point_down:
:one: &nbsp; Account Creation and Log in :computer: <br>
:two: &nbsp; Ask & Answer Questions :question: :memo: <br>
:three: &nbsp; Vote On A Question Or An Answer :arrow_up: &nbsp; And Select The Best Answer ✔️ <br>
:four: &nbsp; :sparkles: Add Comment Sections Under Both Questions And Answers (W/ Voting Functionality):sparkles:


## Progress :alarm_clock:

- [X]  Sprint 1
- [X]  Sprint 2
- [X]  Sprint 3
- [X]  Sprint 4


## Team Members :technologist:

| #   | Name                 | ID        | Github Username     |
| --- | :------------------- | :-------- | :------------------ |
| 1   | Nadine El-Mufti (Team Lead)| 40017347|  `njayem`       | 
| 2   | Eric Hanna           | 40113678  |  `leoenix`          |
| 3   | Michael Warner       | 40124302  |  `narroarrow`       |
| 4   | Arandeep Grewal      | 40129705  |  `Arandeep24`       |
| 5   | Raja Singh Chandi    | 40078603  |  `rajachandi`       |
| 6   | Warda Ahmed Salem    | 40085148  |  `wardasalem`       |
| 7   | Safaa Kadhim         | 40123596  |  `safaaraed99`      | 
| 8   | Nicolas Towa Kamgne  | 40154685  |  `nicotowa`         |







## Technology Stack :gear:

:black_square_button: &nbsp; Front-End <br>
&nbsp;&nbsp;&nbsp; :black_small_square: HTML <br>
&nbsp;&nbsp;&nbsp; :black_small_square: CSS <br>
&nbsp;&nbsp;&nbsp; :black_small_square: Bootstrap <br>
&nbsp;&nbsp;&nbsp; :black_small_square: React <br>
:white_square_button: &nbsp; Back-End: <br>
&nbsp;&nbsp;&nbsp; :white_small_square: Node.js<br>
&nbsp;&nbsp;&nbsp; :white_small_square: Express.js <br>
&nbsp;&nbsp;&nbsp; :white_small_square: MySQL <br>


## Workflow Tips :bulb:

:one: &nbsp; Make your changes and save your code <br>
:two: &nbsp; Checkout to a new_branch (using the above naming conventions) <br>
:three: &nbsp; Add, Commit, and Push these changes to the new_branch <br>
:four: &nbsp; Push this branch to Github <br>
:five: &nbsp; Address an Issue / have your code added to main/master by creating a PR: (Main) <--- (new_branch) <br>

## Naming Conventions (for Git & Github organization) :green_book:


**:green_circle: &nbsp; Naming Convention Used For Branches** <br>
* **Syntax:** feature-(#issue_number/Issue-Topic) <br>
* **Example:** feature-(#40/Add-a-README.md-File) <br><br>
   
**:green_circle: &nbsp; Naming Convention Used For Issues** <br>
* **Syntax:** [#issue_number: FEATURE/BUG] Issue Topic <br>
* **Example:** [#40: FEATURE] Add a README.md File <br><br>

**:green_circle: &nbsp; Naming Convention Used For Pull-Requests** <br>
* **Syntax:** [Solves #issue_number] Pull-Request Topic <br>
* **Example:** [Solves #40] Add a README.md File<br>

## Coding Style & Naming Convention :notebook: 

**Indentation**
Automatic indentation and formatting from webstorm IDE

**Variable names**
Chosen to be as clear and specific as possible. If they have to be long it doesn't matter.
Start with lowercase. As much as possible they are constants and use react states. If they have multiple words, the next words start in capital as such: allQuestions.
The setting variable always starts with "set" and continues with the variable name, first letter capital as such
[variable, setVariable]

   
**HTML components**
Very little css was used. Most style comes from javascript styled-components so the style is in the same javascript files.
HTML variables start with a capital letter and are chosen to be as specific and clear as possible regardless of length.
As little inline-style used as possible and no ids or other classes than the ones defined with styled-components

**Files**
Start with uppercase. As much as possible files are in javascript. Most components are functional components, VERY FEW CLASS COMPONENTS. Functions used repeatedly are put in a separate file which will be imported in the needed functions to not be redundant. Similarly, repeatedly used html components such as buttons are put in a separate file to be imported. 

**Architecture**
Code is writen with an MVC architecture in mind. Observer and state behavior patterns are used. Code is written with simplicity and pragmatism in mind first and foremost.
