<<<<<<< HEAD
# AdonisJsProject

=======
# Adonis fullstack application

This is the fullstack boilerplate for AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Session
3. Authentication
4. Web security middleware
5. CORS
6. Edge template engine
7. Lucid ORM
8. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick
```

or manually clone the repo and then run `npm install`.


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
### NODEPAGE

adonis install @adonisjs/bodyparser
adonis install adonisjs/auth
npm i request request-promise-native --save
sudo npm install -g nodemon
node server.js
npm insall -g gulp



### LoginPage
-Login route was created 
-Login controller was created (make:controller)
-Email	and	password controlled	with provided values
-When login	credentials	are	wrong, this situation is handled and status is return.	
-o Layout designed according to	mockups.
-Form validation was creadted
-when login users information is wrong,error message is return.


### AlbumPage

-Album route was created 
-Album controller was created (make:controller)
-o Layout designed according to	mockups.
-MyAlbums controller send request to https://jsonplaceholder.typicode.com/albums,	
and	handle response data.
-o After an	album title	is	clicked, an	AJAX request is made on	client-side	to https://jsonplaceholder.typicode.com/albums/ALBUM_ID/photos	and	response is used to	render photo thumbnails.
-thumbnail	is	clicked, a bigger photo	is shown at the bottom.
-in full screen,eight photos is shown on thumbnail but in mobile screen,fourth photos in shown.
-Gulp is instaled.css is minify
>>>>>>> no message
