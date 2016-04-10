Tech Workouts
===================

This is a web-app for doing daily workouts in tech. Before you get confused, please allow me to explain :)

Have you used [Duolingo](http://www.duolingo.com)? If not, you should check that out first. You can learn any language like German or French for free. I love the way the app is teaching me. I am learning French and German from Duolingo for the past 1 year and I am addicted to it.

When I was using Duolingo, I thought, why not we can create a similar thing for technology/programming languages? At that time I came across [Enki](http://www.enki.com) This is what exactly I was looking for. But since the app is very popular, it became invite only. I had to wait a month to get my hand on to the app.

The app is too good and am using it for the past 1 month regularly. They have made this app only and it is available for Android and iOS. Happy waiting to get an invite for that ;)

Enki didn't have a web-app (or not yet made public). So i thought of creating one for Enki. Since their API's are not open, I created this web-app from scratch. Though this is not as powerful as Enki, I have created a solid base. The web-app reads the languages to be taught from a JSON file and the lessons for a topic are loaded from a MD file.

I have React+Redux for the implementation. (I am becoming a big fan of React these days)

Setup
-----

 1)  Clone this repo using the following command

    git clone https://github.com/subramaniashiva/tech-workouts.git


2)  Move to the repo that you have just clone and run the following command

`npm install`

3) This project is enabled with **ESLint**. Any JS file that you write must be linted using ESLint. To run the linting command type

`npm run lint`

5) To start the app, run the following command and navigate to http://localhost:8080 in your browser

`npm start`

7) To build the app for production run the following command. After the command runs successfully, you can copy the files from 'dist' folder for production

`npm run build`


Tech Stack
----------
Following is the tech stack:


 - **ReactJS** - Used as a View Library. Technically the 'V' in MVC architecture
 - **Redux** - Used a State container for the app. Technically the 'MC' in the MVC architecture
 - **SASS** - Using SASS files instead of plain CSS
 - **Webpack** - Module bundler. This also replaces front-end build tools like grunt or gulp
 - **Babel** - Transpile ES6 to ES5. This project uses ES6. Since the browser support for ES6 is not complete, this tool allows us to write code in ES6 which can be transpiled into ES5.
 - **ESLint** - Used to lint the JS code

Directory Structure
-------------------
 - **data** - Contains the static data in form of **.json** and **.md** files. The lessons for topics are stored as .md files. This gives us a greater flexibility when adding/editing the content for a lesson

src directory
-----------------
 - **components** - Dumb or presentational react components 
 - **containers** - Stateful or container react components
 - **layouts** - React components that dictate the layout of the app
 - **redux** - Code related to redux
 - **routes** - Routes in the application
 - **static** - Static assets in the application
 - **styles** - SASS files for the application
 -  **utils** - Utility .js files for the application

To Do/ Future Improvements
-----------------

As I told earlier, this is a working prototype web-app for the enki mobile app. Following are the important items to work on

 - Setup a server to serve the JSON and MD files for the content
 - Update the content (for technologies like HTML, CSS, JS) and serve this changed content
 - User management
 - Updating the blog and social-media pages to have the content pulled from respective URLs
 - Adding games once the work out is done
 - Marking the content/lesson as favorite by the user and ability by the user to view back this content