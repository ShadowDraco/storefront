# LAB - Application State with Redux

## Author: Ethan Storm

## Collaboration: Code Fellows Lab

## Links and Resources

[Code sand box][]
![Lab 36 UML](../assets/Lab36.png)

### What is this

4 day LAB build of the **storefront application**, written in React. using React Redux and Material UI.

### Phase 1 Requirements

- As a user, I expect to see a list of available product categories in the store so that I can easily browse products.
- As a user, I want to choose a category and see a list of all available products matching that category.
- As a user, I want a clean, easy to use user interface so that I can shop the online store with confidence.

- Create a visually appealing site using [Material UI](https://material-ui.com/).
- Use a Redux Store to manage the state of categories and items in the store.
- Display a list of categories from state.
- When the user selects (clicks on) a category:
  - Identify that category as selected (change of class/display).
  - Show a list of products associated with the category.

### Application Architecture

Virtual Store application using Vite, Material UI, and React-redux:

- A `<Header />` component which shows the name of your virtual store.
- A `<Footer />` component which shows your copyright and contact information.
- A `<Categories />` component:
  - Shows a list of all categories.
  - Dispatches an action when one is clicked to "activate" it.
- A `<Products />` component:
  - Displays a list of products associated with the selected category.

### Testing

- Testing for the core behaviors (user stories) of the application is required.
- Consider leveraging a chatbot as needed.
