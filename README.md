A Netlify deploy of the app can be checked from [https://distracted-hopper-b99c4d.netlify.com](https://distracted-hopper-b99c4d.netlify.com).

## image-search-app

Image search app written in React. <br>
Uses Unsplash API to retrieve images with given parameters from user. Displays results in a masonry grid.

### Features

Follows the design outline with some changes to achieve responsiveness <br>
Used function components & Hooks to manage component level states and events.<br>
Implemented caching with imageGetter module. Uses local storage & decides on local/remote data retrieval.<br>

### Packages Used

axios<br>
react-masonry-component<br>
react-spinners<br>
react-select<br>

### Future Improvements

Although the header and masonry is responsive, header sub-components may be further improved for a mobile friendly layout
