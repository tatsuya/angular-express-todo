# Augular Express Todo Example App

An example AngularJS Todo app using [Express 4.x][express] + [Node.js][node] backend, inspired by [btford]'s [Angular Express Blog][angular-express-blog] and [Angular Express Seed][angular-express-seed].

## How to use

Clone the angular-express-todo repository, run `npm install` to install the dependencies, and run `npm start` to start the app. Now you can go to [http://localhost:3000](http://localhost:3000).

## Directory Layout

```
app.js              --> app config
package.json        --> for npm
public/             --> all of the files to be used in on the client side
  css/              --> css files
    app.css         --> default stylesheet
  img/              --> image files
  js/               --> javascript files
    app.js          --> declare top-level app module
    controllers.js  --> application controllers
    directives.js   --> custom angular directives
    filters.js      --> custom angular filters
    services.js     --> custom angular services
    lib/            --> angular and 3rd party JavaScript libraries
      angular/
        angular.js            --> the latest angular js
        angular.min.js        --> the latest minified angular js
        angular-*.js          --> angular add-on modules
routes/
  api.js            --> route for serving JSON
  index.js          --> route for serving HTML pages
  partials.js       --> route for serving HTML partials
views/
  index.jade        --> main page for app
  layout.jade       --> doctype, title, head boilerplate
  partials/         --> angular view partials (partial jade templates)
    partial1.jade
    partial2.jade
```

## References

For more information, please check [AngularJS][angular], [Express][express], and [Jade][jade].

## License

MIT

[angular]: http://angularjs.org
[angular-express-blog]: https://github.com/btford/angular-express-blog
[angular-express-seed]: https://github.com/btford/angular-express-seed
[btford]: https://github.com/btford
[express]: http://expressjs.com
[jade]: http://jade-lang.com
[node]: http://nodejs.org