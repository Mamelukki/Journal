### Schedule

Date | Hours | Description
----- | ----- | ------
11.04.2021 | 3 | Create the project repository and the basic backend structure, connect the app to MongoDB, add journal entry schema and add the possiblity to add journal entries, configure ESLint for the backend
12.04.2021 | 3 | Create the basic frontend structure, create a component for showing journal entries and a form for adding them, configure ESLint for the frontend
13.04.2021 | 3 | Start using Redux to control the state and make necessary changes to the existing code (I run into a lot of issues and fixing them took time)
14.04.2021 | 3 | Add simple router structure, add possibility to remove journal entries, bug fixing 
15.04.2021 | 4 | Add user schema, add backend and frontend support for creating users, start to use token based login (app is partly broken due to it, will fix it tomorrow)
16.04.2021 | 4 | Add login option and show the current user (adding a journal entry is still broken and needs to be fixed), prepare notification component and reducer for the future
19.04.2021 | 2 | Fix bug of adding journal entries, make deleting a journal entry possible only for the creator
20.04.2021 | 0,5 | Start using notifications
26.04.2021 | 2 | Separate local storage from the login reducer and fix issues
30.04.2021 | 5 | Work with styles and navbar
05.05.2021 | 8 | Add a possibility for adding pictures into journal entries and show them to the user, fix smaller issues
06.05.2021 | 5 | Add editing option for journal entries, fix bugs, do some styling
11.05.2021 | 4 | Create profile view, bug fixing
12.05.2021 | 6 | Store the uploaded images to Cloudinary (instead of local uploads folder), do the required changes to controllers and image model, refactor (move multer to its own module)
13.05.2021 | 2 | Improve usability (hide edit and add forms after submit, show existing content while editing, reset chosen file after upload and show more messages)
17.05.2021 | 0,5 | Fix edit form bug and make notifications always visible (no matter where you are on the page)
20.05.2021 | 5 | Fix user info route, create list component for journal entries and add possibility to view single journal entries, create test database and add two tests for the backend
21.05.2021 | 3 | Add possibility to remove user
24.05.2021 | 4 | Fix bugs in the backend controllers, create more tests for the backend
24.05.2021 | 3 | Improve tests (check also user's data in journal entry addition and deletion tests) and add one new test
27.05.2021 | 6 | Add more tests for the backend and fix the password validation, start to use Material-UI and style the application
28.05.2021 | 5 | Make small improvements and fixes (e.g. joining date for user, better editing possibilities for journal entries, notification for deleting a journal entry), work on UI
31.05.2021 | 4 | Show error message when the uploaded image is in wrong format, add possibility to delete images
01.06.2021 | 5 | Add filter for journal entries
02.06.2021 | 3 | Create a profile dropdown with possiblity to logout and view account information
07.06.2021 | 6 | Work on navbar and UI
08.06.2021 | 5 | Add some tests for the frontend, bug fixing, small improvements (for the UI and backend tests)
10.06.2021 | 6 | Work on UI (for example make a delete button appear on image when hovering on it), fix bugs, make other small improvements
14.06.2021 | 7 | Add home page, make it possible to view the images as bigger, work on UI, different kind of small improvements and bug fixes
14.06.2021 | 4 | Make backend run on Heroku
17.06.2021 |??5 | Create a frontend production build for Heroku, improve home page and work on UI, add token expiration, make the application run on Heroku
22.06.2021 |??6 | Fix routing error (where refreshing the page gives unknown endpoint), change error handling of image file type error, other small fixes 
24.06.2021 | 9 | Create footer, improve home page, fix token expiration time, refactor journal entry component, fix journal entry deletion (and relevant notifications), make other small improvements
06.07.2021 | 4 | Add more tests for the frontend and refactor the existing tests
15.10.2021 | 0,5 | Small fixes
Hours in total | 145,5
