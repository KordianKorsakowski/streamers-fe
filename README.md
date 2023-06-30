# STREAMER - Front End React App
Currently used and tested, stable Nodejs version - 16.15.1
Stack - Typescript, React.js, React-Query, React-Router, Unstated-Next, Formik, Yup, Axios, React Testing Library, Jest, Material UI, styled-components

### BACKEND-info
To ensure the proper functioning of the frontend part of the application, a backend is required. Please use the following link: [LINK](https://github.com/KordianKorsakowski/stremers-be) to access that portion of the application. All the configuration information can be found in the readme file.
### General Info 

An application that combines multiple elements within two pages:

Page "/streamers":

Form: 
Allows adding a streamer to the list.   
List: 
Displays a list of streamers existing in the database.
Allows liking and unliking a selected streamer.
By clicking on the streamer's name in the list, you can navigate to a second page with details about that streamer.
The list is ordered by popularity, with the most popular streamer at the top.

Page "/streamer/:id":

Details: 
Allows displaying information about the streamer, such as their photo, description, streamer name, and the platform they use.

### Setup

I would like to present a front-end project built using React.js with TypeScript. This project has been carefully developed to achieve excellent code quality and adhere to best programming practices.

To handle the application's routing, the react-router-dom library was utilized.

For efficient data management across different parts of the application, the unstated-next library was employed.

To ensure proper form handling, two libraries were used: Formik for managing form state and Yup for form validation.

API communication was implemented using the Axios library, providing easy and transparent HTTP request creation. For retrieving the list of streamers, react-query was introduced to maintain data consistency across multiple browser windows. Additionally, an interval was set to communicate with the database every minute, and a new request is sent when the user returns to the application window.

The react-virtualized library was employed to efficiently handle the streamer list, preventing the rendering of items outside the view. Lazy loading of images within the application was achieved using the lazy loading technique provided by react-lazy-load-image-component. A debouncer with a 0.5-second delay was introduced to prevent multiple clicks on the "like" and "unlike" buttons.

The user interface of the application was created using the Material UI library, offering a wide range of pre-built components, along with styled-components for easy customization of component styles. To provide feedback on the user's requests, a notification system was implemented. Additionally, animated loaders were added to enhance the user experience, and the wait() function introduced a delay of 0.5-1 second before displaying data.

Tests were implemented using the React Testing Library along with Jest (in the future).

To maintain a consistent coding style and syntax, tools such as ESLint and Prettier were utilized, with their rules defined in configuration files.

Git was used as the version control system, and the repository is hosted on GitHub. The project structure was carefully designed to facilitate development and maintenance. The adoption of good programming practices (DRY, KISS, DDD) aims to ensure clean and readable code.

## Installation
Installing dependencies:

```cmd
streamers-fe> npm i
```

## Development
Serve app locally:

```cmd
streamers-fe> npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build

```cmd
streamers-fe> npm build
```
## Test

```cmd
streamers-fe> npm test
```

## Eslint
Fix problem with prettier:
```cmd
streamers-fe> npm lint-fix
```
Check prettier:
```cmd
streamers-fe> npm lint-check
```
