# Lost in Translation

This is a single-page application built with [React](https://reactjs.org/) for translating words and sentences into [American Sign Language](https://en.wikipedia.org/wiki/American_Sign_Language).

### Contributors
[jessemaa](https://github.com/jessemaa) & [maijahaka](https://github.com/maijahaka/)

## How to use

The application is accessible at https://lost-in-translation.vercel.app/.

### Login page

The applications opens on a login page, which has an input field for entering a name. The name should have 1-30 characters. Once the name has been entered, the application is started by clicking the 'Start' button.

### Translation page

The translation page has an input box, where the word or sentence to be translated can be entered. The length of the input should be between 1 and 40 characters.

Translation can be requested by clicking the 'Translate' button. After this, the translation of the input into American sign language becomes visible underneath the input box: the image of the sign for each letter in the input is shown.

Any characters that are not part of the English alphabet (uppercase or lowercase a-z) are ignored in the translation, i.e. only the signs for the letters a-z are shown in the translation. To make the separation of words clearer, each word starts on a new line.

Another translation can be requested by entering a new word or sentence in the input field and clicking 'Translate'.

### Profile page

The profile page shows the name of the current user as well a list of their recent translations. Up to 10 translations are presented, so if the user has made more translations than this, only the 10 most recent ones are shown.

The 'Clear translations' button at the bottom of the page clears the user's translation history.

The 'Logout' button logs out the current user and clears their translation history as well as directs them to the login page.

## Run the project locally

Use the following steps to run the project on your local machine.

### Clone the source code
```
git clone https://github.com/maijahaka/lost-in-translation.git
```

### Move to the project folder
```
cd lost-in-translation
```

### Install dependencies
```
npm install
```

### Run the application in development mode
```
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

### Build the app for production
```
npm run build
```

Builds the app for production to the `build` folder.
