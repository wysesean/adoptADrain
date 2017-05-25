import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import init from './init'

import Login from './views/login.js'
import Register from './views/register.js'
import UserPage from './views/userPage.js'
import Home from './views/home.js'
import EsriMap from './views/esriMaps.js'


const app = function() {
	var MainRouter = Backbone.Router.extend({
		routes:{
			'login': 'showLogin',
			'register': 'showRegister',
			'userPage/:id': 'showUserPage',
			'home': 'showHome',
			'': 'handleRedirect'
		},
		showLogin(){
			ReactDOM.render(<Login />, document.querySelector(".leftContainer"))
		},
		showRegister(){
			ReactDOM.render(<Register />, document.querySelector(".leftContainer"))
		},
		showUserPage(id){
			ReactDOM.render(<UserPage userId={id}/>, document.querySelector(".leftContainer"))
		},
		showHome(){
			ReactDOM.render(<Home />, document.querySelector(".leftContainer"))
		},
		handleRedirect(){
			location.hash = "home"
		}
	})
	ReactDOM.render(<EsriMap />, document.getElementById("mapContainer"))		
	new MainRouter()
	Backbone.history.start()
}

// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..
// NECESSARY FOR USER FUNCTIONALITY. DO NOT CHANGE. 
export const app_name = init()
app()
// x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..x..