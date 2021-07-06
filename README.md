# Journal

Journaling app built with Node.js and React. MongoDB was used for storing data and Cloudinary for storing images. 
[You can find the app and test it on Heroku.](https://mamelukki-journal.herokuapp.com/)

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

### What could be improved

- Creating CSS files for all the styles instead of the current combination of inline styles and MaterialUI styles
- After token expiration, the user should be logged out
- Adding images should be possible already while creating entries, not just after creating
- At least part of the data in the database should be encrypted because of the nature of the application (ursers might add sensitive data that should not be readable by others)
- Adding multiple images at once
- Adding CI/CD pipeline
- Adding more (comprehensive) tests
