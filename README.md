# Welcome Claude

## Project Overview
This project is a **stepping stone** from an HTML design library project to another final project which is a fully functioning Jekyll static site generator. 
To better explain this, please see the following points:
* Our business is called Pendigital
* Our client is called OpenFlexure
* Our business has its own theme that extends Bootstrap 5
* We design using the Pinegrow Visual Editor, but we won't be using that in this project as all the design work has been completed and approved

## Git Setup
* There is no remote repo for this project
* There is a main and dev branch
* Any work must be done in an approproately named feature branch derived from dev
* Once approved, work can be merged into dev (from the feature branch) and then into main (from dev)

## Project Goals
The main goal is to slim down the size of this project so only necessary files are copied over to the new Jekyll project, as well as creating some new Sass classes for light and dark versions of the HTML components
Specific goals include, **please note subsequent sections will give more detail**:
* Identifying **used Sass classes** by looking through the HTML files and copying to new files in a new folder
* Identifying **used JS** by again looking through the HTML files, and copying in use files to a new folder
* Identifying **used images** by looking through the images folder and comparing to images used in the HTML (there are many library images in our library folder, and we don't want to export these all to Jekyll)
* Creating a **light and dark version** of specific classes for specific components
* Creating **partials** of all the HTML components

### About Our Sass and Sass Objectives
* The Sass files are located within the directory bootstrap_theme/openflexure (an original backup copy of our theme is in the folder bootstrap_theme/pendigital)
* Sass entry point is: bootstrap_theme/custom.scss
* There are some custom helper classes in the /bootstrap_theme/openflexure/utils.scss
* You will notice that we tend to name classes per component to give a clear separation of concerns.
* The Sass is for the following HTML:
  * /buttons.html
  * /contact.html
  * /get-started.html
  * /index.html
  * /standard-nav-cards.html
  * /standard-plain.html
  * /standard-small-header.html
  * /standard.html
  * /team-2.html
  * /team-3.html
  * /team.html
* There is another folder called /sass, which already has some Sass files in, including the Bootstrap 5 files, hamburger files and the new Sass main entry point (custom.scss). There is also an empty folder called openflexure. I would like all new Sass files with the separated out (plus new) classes to be added into here
* I tend to run Sass on the command line using npx sass. I ask it to output files to the css folder
* Currently all HTML files are linking to a stylesheet /bootstrap/css/bootstrap.min.css (last compiled when we were designing in Pinegrow), but they will need to link to the new CSS files generated in the /css folder
* In /sass the custom.scss file will need all its import statements updated

#### Sass Related Actions for Claude
* Please create an action plan with a checklist for checking off completed tasks
  * e.g. [x] the completed task
* For each aspect of work there needs to be test points, where we can pause the development and test your generated code
* These actions need to be completed on their own feature branch
* Look through all HTML files and make a list of all CSS classes used throughout this projeect. You may also need to check the JS to see if there are any other styles needed that are added dynamically. Add the list to a markdown file in the root of this project - give the file a meaningful name
* Create new .scss files (appropriately named) in the folder /sass/openflexure
* Copy the in-use classes from their current location to the newly created .scss files - do not rename any classes please
* Sass variables: Curently we have been hard-coding hex colours into the classes (sorry!). We need the following variables set up in custom.scss:
  * $light: #E7E7E7 
  * $dark: #2A2A2A
  * $info: #C5247F
* The above variables now need to replace the current hardcoded variables
* Create light and dark versions of each class requested in the markdown list of classes. I will annotate light+dark next to item in the list
* Light classes are the default. To make them dark they simply require the classname pd-is-dark added to their main class name
  * For example, the component with the classname pd-grid-3 defaults to its current light version, but the following code would make it dark
    * class="pd-grid-3 pd-is-dark"
* Please note that some classes are already dark, so they will need to be modified so their default is light
* Run npx sass with the new entry point and output the CSS to the CSS folder
* Amend the <link href="bootstrap/css/bootstrap.min.css" rel="stylesheet"> in each of the HTML files to reference the newly created Sass


### About our HTML Partials Objectives
In preparation for the Jekyll project, we'd like to separate out each component into its own HTML file within the /_includes folder

#### Partial Related Actions for Claude
* Please create an action plan with a checklist for checking off completed tasks
  * e.g. [x] the completed task
* For each aspect of work there needs to be test points, where we can pause the development and test your generated code
* These actions need to be completed on their own feature branch
* Look through all the HTML files and Identify individual HTML components. Each component starts in the root of the <body>
* They usually have a classname starting with pd-
  * e.g. pd-hero-16 - they'll often have Bootstrap 5 classes with them too
* The classnames of elements within are often derived from the outer elements classname, thus making them easier to identify
  * e.g. pd-hero-16-img or pd-hero-16-overlay
* Create a new .html file in the _includes folder - appropriately named: e.g. hero-large.html, and paste in the component
* There should be approximately 20 to 25 components

### About our JS Objectives
To do

### About our Image Objectives
To do
