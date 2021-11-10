# **Acceptance Tests For Our 4 Core Features** :white_check_mark: <br>

## :one: &nbsp; Account Creation and Log in

**_Scenario #1_**

Given I am `NOT a Registered User`.
Then I can click on the button "Create Account" in order to register.
When I enter an invalid email, an error is displayed "Invalid email".

**_Scenario #2_**

Given I am `NOT a Registered User`.
Then I can click on the button "Create an Account" in order to register.
When I enter a valid email and password, a message is displayed "Account successfully created. If you wish to log in, head to the log in page".

**_Scenario #3_**

Given I am `NOT a Registered User`.
Then I can click on the button "Create an Account" in order to register,
When I enter a valid email address that is already associated with a pre-existing user, an error is displayed "User already exists".


**_Scenario #4_**

Given I am `NOT a Registered User`,
Then I can click on the "Login" button in order to attempt to sign in,
When I do so, I get the error message "Wrong credentials".


**_Scenario #5_**

Given that I am `NOT a Logged-in User`,
Then I can click on the "Login" button in order to sign in,
When I enter an invalid email or password is entered, an error message displays "Wrong credentials".


**_Scenario #6_**

Given that I am `NOT a Logged-in User`,
Then I can click on the "Login" button in order to sign in,
When I enter the correct login credentials associated with my account, I will be forwarded to the "Top Questions Page".


## :two: &nbsp; Ask & Answer Questions

**_Scenario #1_**


**_Scenario #2_**


**_Scenario #3_**


**_Scenario #4_**



## :three: &nbsp; Upvote An Answer and Select The Best Answer


**_Scenario #1_**


**_Scenario #2_**


**_Scenario #3_**


**_Scenario #4_**



## :four: &nbsp; Add Comment Sections Under Both Questions And Answers (W/ Voting Functionality)


**_Scenario #1_**


**_Scenario #2_**


**_Scenario #3_**


**_Scenario #4_**










