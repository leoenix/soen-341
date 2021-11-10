# **Acceptance Tests For Our 4 Core Features** :white_check_mark: <br>

## :one: &nbsp; Account Creation and Log in

Scenario #1

**_Scenario #2_**

**_Scenario #3_**


**_Scenario #4_**




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










