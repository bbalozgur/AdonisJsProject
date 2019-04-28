'use strict'

const User = use('App/Models/User')
const Hash = use('Hash')

class LoginController {
  showLoginForm ({ view }) {
    
    return view.render('login')
  }

  async login ({ view,request, auth, session, response }) {
    // get form data
    const { email, password, remember } = request.all()

    if(email == "ozgur@ozgur.com" && password == "1234"){
    return response.redirect('/albums')
    }
    else{
        return view.render('login',{errorMessage:"Please check your email or password."}) 
    }
  }
}

module.exports = LoginController