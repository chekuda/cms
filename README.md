# Monty Components 'Builder' Prototype

This will be the main project for creating an output JSON for ECMC.
Arcadia brands will be able to use this UI in order to create new responsive grids which contain Monty CMS components for feature pages.


## Running the project.

Clone this repo and run:

```
npm install
```
This will install all of the dependencies.

To run the development server:

```
npm run dev
```
Then navigate to [http://localhost:8080](http://localhost:8080)

### Content preview (alpha)

To enable, put this command into the developer console:
```
document.querySelector('.ContentPreview-enabler').click()
```

To disable, remove the `enable_preview` cookie (or all cookies) and refresh the page.

Note: On dev, both full-monty and monty-cms-server have to be run in order to use the preview.