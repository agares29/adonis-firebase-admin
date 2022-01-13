'use strict'

const firebase = require('firebase/app')

class Firebase {
  constructor (config) {
    return firebase.initializeApp(config)
  }
}

module.exports = Firebase
