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



## :three: &nbsp; Vote On An Answer and Select The Best Answer


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


**_Scenario #2_**


**_Scenario #3_**


**_Scenario #4_**










