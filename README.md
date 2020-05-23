A Netlify deploy of the app can be checked from [https://distracted-hopper-b99c4d.netlify.com](https://distracted-hopper-b99c4d.netlify.com).

## image-search-app

![screenshot](https://nimbus-screenshots.s3.amazonaws.com/s/5d1252b1bc5dc86089bf54f257102942.png  "screenshot")

Image search app written in React. <br>
Uses Unsplash API to retrieve images with given parameters from user. Displays results in a masonry grid.

### Features

Follows the design outline with some changes to achieve responsiveness <br>
Used function components & Hooks to manage component level states and events.<br>
Implemented caching with local storage to reduce API calls. imageGetter module decides on local/remote data retrieval.<br>

### Packages Used
Husky<br>
Cypress<br>
Enzyme<br>
Jest<br>
axios<br>
react-spinners<br>
react-select<br>

### TO DO
Fix local storage quota exceeded issue<br>
Mobile responsiveness of header and list / Add @media queries<br>
Add custom dropdown instead of the package<br>
Add custom spinner instead of the package<br>
Add footer and about pages<br>
Add routing and url parameters for queries<br>
Add form validation for empty query with validation rules and exported validator function <br>
