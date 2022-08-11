# Setup
1. Clone repo
2. Install [Node](https://nodejs.org/en/download/) to your PC (ensure npm is added to path) 
3. From your terminal run `npm install` within the project directory

# Development
From your terminal run `npm start` to locally start the project

# Deployment
1. Execute `npm build` within the project directory from your terminal
2. TODO: do rest of steps xd (do something with newly generated 'builds' directory)

# Customization
1. Change the title and meta content in the `index.html` file
2. Change the `public/favicon.ico` image (leave name the same otherwise update in `index.html`)
3. Change title in `src/components/Header.js` file

# Adding new pages
1. Create a component for the new page in the `components/pages` directory (copy existing component)
2. Add the route of the new page to the `App.js` router switch
3. Add new entry to the navbar in the `src/components/Header.js`

# Adding new projects
1. Create a component for the new project in the `components/projects` directory (copy existing component)
2. Add the route of the new project to the `App.js` router switch (with `/projects` prefix)
3. Add a new entry to the `data.js`. See [Project card data](#project-card-data) for details
4. Check out [Styling](#styling) to see how to arrange layout

# Project card data
Ordering of this data matters somehow but I forget xd
Attributes  
- key: unique ID  
- description: info shown on the back of the card  
- image: relative link to the image to display on the card (eg. /images/example/example.png)  
- slug: slug appended to the URL for the card (eg. 'example' will result in the link being `/projects/example`)  
- group: section to group this project under on the 'projects' page  
- (optional) icon: List of font awesome icon to put on card image (eg. `["fas", "address-card"]`) (See [Font Awesome](https://fontawesome.com/docs/apis/javascript/import-icons) for more)
- (optional) gradiant: if populated will add a gradiant to the card image  

# Styling
- Styles are stored in the `src/styles` directory. Check out [SASS](https://sass-lang.com/documentation/style-rules)  
- Also check out react bootstrap [docs](https://react-bootstrap.github.io/layout/breakpoints/) on layout to understand responsiveness  

# Custom Components
### ProjectTextCard
Wrapper for text content used in project components.  
Props:
- className: additional class names to add to component

### ProjectVideoCard
Wrapper for videos used in project components  
Props:
- src: link to the source of the video (eg. `/videos/example/example.mp4`)
- type: video type (eg. video/mp4)

### ProjectImageCard
Wrapper for images used in project components
Props:
- className: class names to add to component

### GroupedProjects
Component that groups project flip card components 

# Project Structure
public: contains all media resources (eg. images and videos)  
src: contains all the html + javascript content  
src/components: all react components  
src/components/pages: all custom page components  
src/components/projects: all custom project components
src/styles: all style sheets
node_modules: all npm package content  
build: all transpiled content once the `npm build` command has been run