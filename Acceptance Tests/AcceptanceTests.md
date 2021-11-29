# **Acceptance Tests For Our 4 Core Features** :white_check_mark: <br>

## :one: &nbsp; Account Creation and Log in

**_Scenario #1_**

Given I am `NOT a Registered User`,
When I can click on the button "Create Account" in order to register and I enter an invalid email,
Then I get an error that says "Invalid email".

**_Scenario #2_**

Given I am `NOT a Registered User`,
When I can click on the button "Create an Account" in order to register and I enter a valid email and password,
Then I get a message saying "Account successfully created. If you wish to log in, head to the log in page".

**_Scenario #3_**

Given I am `NOT a Registered User`,
When I can click on the button "Create an Account" in order to register and I enter a valid email address that is already associated with a pre-existing user.
Then I will get an error message saying "User already exists".


**_Scenario #4_**

Given I am `NOT a Registered User`,
When I can click on the "Login" button in order to attempt to sign in,
Then I will get an error message saying "Wrong credentials".


**_Scenario #5_**

Given that I am `NOT a Logged-in User`,
When I can click on the "Login" button in order to sign in and I enter an invalid email or password,
Then I get an error message saying "Wrong credentials".


**_Scenario #6_**

Given that I am `NOT a Logged-in User`,
When I can click on the "Login" button in order to sign in and I enter the correct login credentials associated with my account,
Then I will be forwarded to the "Top Questions" Page.


## :two: &nbsp; Ask & Answer Questions

**_Scenario #1_**

Given that I am `a Logged-in User`,
When I click the "Ask Question" button,
Then I will be redirected to the "Ask Question page.


**_Scenario #2_**

Given that I am `NOT a Logged-in User`,
When I click "Post question" button, after having filled in the question title and question body (upon Ask Question button redirection),
Then I will get an error message displaying "Please log in first".

**_Scenario #3_**

Given that I am `a Logged-in User`,
When I click on the "Ask Question" button which redirects me to the "Ask Question" page and I forget to fill in either the question title or question body fields,
Then I will get an error message saying "Please fill out this field".

**_Scenario #4_**

Given that I am either `a Logged-in User OR a Not Logged-in User`,
When I click on a specific question's title from the list of "Top Questions",
Then I will be redirected to the "Specific question" page of that question.

**_Scenario #5_**

Given that I am a `NOT a Logged-in User`,
When I click on a specific question's title from the list of "Top Questions" which will redirect me to the specific page of that question and I attempt to provide an answer and press the "Post answer" button,
Then my answer fails to get posted and I will not be redirected to the "Specific Question" page (system does nothing).

**_Scenario #6_**

Given that I am `a Logged-in User`,
When I click on a specific question's title from the list of "Top Questions" which will redirect me to the specific page of that question and I attempt to provide an answer and press the "Post answer" button,
Then my answer will get successfully posted and I will be redirected to the "Specific Question" page where I can see my posted answer.


## :three: &nbsp; Vote On A Question Or An Answer and Select The Best Answer


**_Scenario #1_** 

Given I am `NOT a Logged-in User`,
When I try to vote on a question or an answer,
Then my vote will fail to get through and the counter will NOT update its value (system does nothing).

**_Scenario #2_**

Given I am `a Logged-in User`,
When I try to vote on a question or an answer,
Then my vote will successfully get through and the counter will update its value accordingly.

**_Scenario #3_**

Given I am `a Logged-in User and NOT the Question Author`,
When I attempt to click the best answer button for one of the answers provided to a question I haven't posted,
Then the system will disable the cursor and prevent me from being able to click the best answer button.

**_Scenario #4_**

Given I am `a Logged-in User and Question Author`,
When I click the best answer button to an answer provided to my question,
Then that answer will become the current best answer to my question. 


## :four: &nbsp; Add Comment Sections Under Both Questions And Answers (W/ Voting Functionality)


**_Scenario #1_**

Given I'm `a Logged-in User`, 
When I try to comment under a question,
Then my comment will get successfully appended to that question's thread.

**_Scenario #2_**

Given I'm `a Logged-in User`, 
When I try to vote on a comment under a question,
Then my vote will successfully get through and the counter will update its value accordingly.

**_Scenario #3_**

Given I'm `NOT a Logged-in User`, 
When I try to comment under a question,
Then my comment will fail to get appended to that question's thread (system does nothing).

**_Scenario #4_**

Given I'm `NOT a Logged-in User`, 
When I try to vote on a comment under a question,
Then my vote will fail to get through and the counter will NOT update its value (system does nothing).


**_Scenario #5_**

Given I'm `a Logged-in User`, 
When I try to comment under an answer,
Then my comment will get successfully appended to that answer's thread.

**_Scenario #6_**

Given I'm `a Logged-in User`, 
When I try to vote on a comment an answer,
Then my vote will successfully get through and the counter will update its value accordingly.

**_Scenario #7_**

Given I'm `NOT a Logged-in User`, 
When I try to comment under an answer,
Then my comment will fail to get appended to that answer's thread (system does nothing).

**_Scenario #8_**

Given I'm `NOT a Logged-in User`, 
When I try to vote on a comment under an answer,
Then my vote will fail to get through and the counter will NOT update its value (system does nothing).










