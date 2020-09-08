# Main Features

- 1 Books

  - Details/Author/Genre/Publisher
  - Organization by book info
  - Image/description/about the author
  - Other books by author
    - Purchasing a book
    - Take advantage of API pricing data
    - Maybe a link to external purchasing option

- 2 BookShelves feature
  - Will read
  - Have read
  - Currently reading/amount read? percentage?
- 3 Reviews feature

  - shrek rating system EX: 5/5 shreks or 3.5 shreks.
  - maybe if the rating is bad it has a, "get out of my swamp" feature.

- 4 Book search

  - Case insensitivity through sequel queries
  - API has a good search function

- 5 Login feature
  - oAuth
  - Password/confirm password
    - password constraints
  - Username? Email? Unique constraint
- 6 The most average books of the month (feature section)

# Databse

- users table
  - User has many books
    - Book ID
  - User has many comments
- comments
  - Comments has a belongs to realtionship with a user
    - user ID
  - Comments has a belongs to relationship with a book
    - Book ID
- books
  - A book has many comments

# Pages

- Home page

  - '/'
  - redirects to login without authorization

- About us
  - Our hero shrek?
  - Inspiration?
  - Mission? make money, profit.
- Login

  - less access but still home page?
  - /login

- Profile page

  - /user
  - book shelf
    - user/bookshelf?

- Book details
  - /:id/book?

/ - start page
  - /books
    - result of 50 books
    - search functionality
    - /books/:id
      - shows individual book w/ reviews, bookshelf operations
  - /users/username
    - /users/username(or id)/bookshelf


Roles:
UX Lead - Dan, (THE MAN) Black

Model Lead - Jony(designing the database)

Project Lead(the cool guy) - John M.

???? - Miah
