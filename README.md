# Journal

[![codebeat badge](https://codebeat.co/badges/722f8062-037d-44a3-98b1-613e046e430d)](https://codebeat.co/projects/github-com-mamelukki-journal-main)

Journaling app built with Node.js and React. MongoDB was used for storing data, Cloudinary for storing images, codebeat for reviewing code quality and Heroku for running the application online.

### Heroku

[You can test the app by clicking here](https://mamelukki-journal.herokuapp.com/)

### Features

- Register
- Login
- Add entry
- Edit entry
- Add (max 10) images per entry
- Delete entry
- Delete account
- Filter entries

### What I learned during this project

- How to upload images (handling file input, storing images, using Multer middleware and Cloudinary) 
- How to show images to user smartly (how to deal with different sized images)
- How to better use CSS (Grid, Flexbox, text on images etc.)
- How to make tokens expire
- How to use MaterialUI
- Got more confident in programming and understand better the overall structure of web applications

### What could be improved / added

- Creating CSS files for all the styles instead of the current combination of inline styles and MaterialUI styles
- Optimizing UI for mobile users
- Improving existing features
  - After token expiration the user should be logged out 
  - Adding images should be possible already while creating entries, not just after creating
  - At least part of the data in the database should be encrypted because of the nature of the application (users might add sensitive data that should not be readable by others)
  - Adding multiple images at once
  - Adding possibility to delete multiple journal entries at once
- Adding CI/CD pipeline
- Adding more (comprehensive) tests
- Adding possibility to delete multiple journal entries at once
