**login hint **
only json server user can be registrated like
username: atuny0
password: 9uQFF1Lh

**Project Documentation: Social Networking Website**

**1. Introduction:**

Our social networking website allows registered users to log in using their username and password. Upon successful login, users receive a token, which they can use to access their data. The website features posts listed on the main page, comments displayed upon clicking on a specific post, user search functionality, and user listings on the right side. Additionally, the logged-in user's data is displayed, retrieved from localStorage.


**2. Features:**

- **User Authentication:**
-  Users can log in with their username and password. The credentials are verified against a JSON server's user database.

- **Token-Based Authentication:**
- Upon successful login, users receive a token. This token is used to access the user's data and is stored securely.
- 
<img width="960" alt="login" src="https://github.com/muhammadshehryar565s/social-media-project/assets/123178301/42dcfa7b-4961-4bba-af78-fa0145698c31">
- **Main Page Posts:**
- Posts are listed on the main page, showcasing various user-generated posts .
<img width="953" alt="home page" src="https://github.com/muhammadshehryar565s/social-media-project/assets/123178301/a71317a7-cb8a-4bc5-ba14-6f2b359e5434">

- **Post Comments:**
-  Users can view comments on a particular post by clicking on the comments section of that post.
<img width="952" alt="comments of particular post" src="https://github.com/muhammadshehryar565s/social-media-project/assets/123178301/9d88e2ef-0307-4f4d-97b7-3cedcbc0e789">

- **User Search:**
-  A search functionality allows users to find specific users and his  posts by their username or name by clicking on it.
<img width="960" alt="search post by user" src="https://github.com/muhammadshehryar565s/social-media-project/assets/123178301/aabcef74-15e5-4237-8322-9b66c295e4e2">

- **User Listings:**
-
- All registered users are listed on the right side of the website, facilitating easy navigation and interaction.
-
- in right hand side
<img width="953" alt="home page" src="https://github.com/muhammadshehryar565s/social-media-project/assets/123178301/a71317a7-cb8a-4bc5-ba14-6f2b359e5434">
- **Logged-In User Data Display:**
-  The logged-in user's data is retrieved from localStorage and displayed prominently, providing a personalized experience.

in left hand side
<img width="953" alt="home page" src="https://github.com/muhammadshehryar565s/social-media-project/assets/123178301/a71317a7-cb8a-4bc5-ba14-6f2b359e5434">
**3. Implementation:**

- **User Authentication:**
- Implemented using JSON server for storing user credentials. Username and password validation is performed during login.

- **Token authentification:**
- user is authenticated by token in json server and get complete data of user and stored in localstroge

- **Data Access:**
-  User data is accessed securely using the token. The website interacts with the JSON server to fetch user information and posts.

- **Post and Comment Display:**
- Posts are fetched from the server and displayed on the main page. Comments are fetched and displayed dynamically upon user interaction.

- **User Search:**
- Implemented a search functionality allowing users to search for other users by username or name and posts by clicking on username or name.

- **User Listings:**
- All registered users are listed on the right side of the website for easy navigation and interaction.

- **Logged-In User Data:**
- The logged-in user's data is retrieved from localStorage and displayed prominently on the website.
- 
**Logout**
  user can logout click on logout button and redireced to login page
  
**4. Future Enhancements:**

 - **Comments enhancement:**

    enhancet the functionliy by post delete and edit the comments 

- **Responsive Design:**
-  Ensure the website is fully responsive across various devices for optimal user experience.
-**Show user with post**
   show user image and name of particular post
**5. Conclusion:**

Our social networking website provides a platform for users to connect, share, and interact with each other and make contents. With features like user authentication, post listings, comment display, user search, and personalized user data display, the website offers a comprehensive social networking experience. Through continuous enhancements and updates, we aim to create a vibrant and engaging community for our users.
