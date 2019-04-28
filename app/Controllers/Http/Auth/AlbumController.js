'use strict'
const Request = require("request-promise-native");
const Hash = use('Hash')


class AlbumController {

  async albums ({ view }) {
    try {
      let result = await Request.get("https://jsonplaceholder.typicode.com/albums");

      return view.render("albums", {users:JSON.parse(result)});
    } catch (error) {
      console.log(error.message)
    }
  }
}

module.exports = AlbumController
