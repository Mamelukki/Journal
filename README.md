# Journal

Hobby project built with Node.js and React. The goal of the project is to build a journaling app with a possibility to create users and make personal notes once you are logged in. Work is still in progress. Following features will be implemented on the application:

- Registeration
- Login
- Editing account
- Deleting account
- Adding journal entries
- Editing journal entries
- Deleting journal entries
- Filtering journal entries
- Searching for journal entries

However, the features might not be limited to those. 

### Instructions

Application can so far only be run on localhost. In case you want to test the application while it is still in development, follow these instructions. The backend will expect that there's an .env file with values MONGODB_URI, PORT and SECRET specified. 

Start by cloning the repository.

Open both the backend and the frontend folders on your command line and install required dependencies by running 
``` 
npm install
``` 

Start the backend by running

``` 
npm run dev
``` 

when you are in the backend folder. This should make the backend run on the port you defined in the .env file. 


Start the frontend by running

``` 
npm start
``` 

when you are in the frontend folder. This should make the frontend run on port 3000. 

You should now be able to use the application on [http://localhost:3000](http://localhost:3000). Happy testing :) 
