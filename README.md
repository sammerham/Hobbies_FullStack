**Hoobies FullStack Application:**

**This application’s Server:**
                                                                        
Utilizes a Node / Express server.

Contains an array of strings.

Has one endpoint to fetch all strings.

Has one endpoint to prepend a new string to the array.


**The application’s Client:**

Has one page to display all strings stored on server.

Has one page with UI to input a string and send to server.


**Development**

npm start

Starts the development server and makes your application accessible at localhost:3000. Changes in the application code will be hot-reloaded.


**Production**

npm run start:production

Runs tests (see npm test)

Builds your app (see npm run build)

Starts the production server (see npm run start:prod)

The app is built for optimal performance: assets are minified and served gzipped.



Host and Port

To change the host and/or port the app is accessible at, pass the --host and/or --port option to the command with --. E.g. to make the app visible at my-local-hostname:5000, run the following: npm start -- --host my-local-hostname --port 5000


**Building**

npm run build

Preps your app for deployment (does not run tests). Optimizes and minifies all files, piping them to the build folder.


Upload the contents of build to your web server to see your work live!


**Testing**

See the testing documentation for detailed information about our testing setup!


**Unit testing**

npm test

Tests your application with the unit tests specified in the **/tests/*.js files throughout the application.

All the test commands allow an optional -- [string] argument to filter the tests run by Jest. Useful if you need to run a specific test only.


**Watching**

npm run test:watch

Watches changes to your application and re-runs tests whenever a file changes.


**Remote testing**

npm run start:tunnel

Starts the development server and tunnels it with ngrok, making the website available worldwide. Useful for testing on different devices in different locations!


Dependency size test

**npm run analyze**

This command will generate a stats.json file from your production build, which you can upload to the webpack analyzer or Webpack Visualizer. This analyzer will visualize your dependencies and chunks with detailed statistics about the bundle size.


**Linting**

npm run lint

Lints your JavaScript and your CSS.


npm run lint:eslint:fix -- .

Lints your code and tries to fix any errors it finds.
