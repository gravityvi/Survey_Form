# Survey_Form

## How to run
1. Clone the repository  
`git clone https://github.com/james222424/Survey_Form.git`

2. navigate to the folder

3. Install node modules
`npm install`

4. Start the server. Run the following command in terminal
`node server.js`


## Files  in the Project
 
 1. Server.js: contains the main functions for rest API
 2. Website contains the basic layout for static website
 3. Data.json is the local database file created for storing the response
 4. Package.json: contains project dependencies and structure

 ## Flow of the app

 1. Start the server
 2. navigate to http://localhost:3000/
 3. fill up the form
 4. press submit

 ## Working of the app
 
Whenever the form is filled up and submit is pressed all the details are stored in Data.json and in response a json message is sent

you can get make a get request to see all response in json format by navigating to http://localhost:3000/all which is a get request for the server.




