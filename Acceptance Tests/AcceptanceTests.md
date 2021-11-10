# **Acceptance Tests For Our 4 Core Features** :white_check_mark: <br>

## :one: &nbsp; Account Creation and Log in

**_Scenario #1_**

Given I am `NOT a Registered User`.
When I can click on the button "Create Account" in order to register and I enter an invalid email,
Then I get an error that says "Invalid email".

**_Scenario #2_**

Given I am `NOT a Registered User`.
When I can click on the button "Create an Account" in order to register and I enter a valid email and password,
Then I get a message saying "Account successfully created. If you wish to log in, head to the log in page".

**_Scenario #3_**

Given I am `NOT a Registered User`.
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


**_Scenario #2_**


**_Scenario #3_**


**_Scenario #4_**



## :three: &nbsp; Vote On A Question Or An Answer and Select The Best Answer


**_Scenario #1_**


**_Scenario #2_**


**_Scenario #3_**


**_Scenario #4_**



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










