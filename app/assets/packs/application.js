require.context('images', true, /\.(png|jpg|jpeg|svg)$/)
import 'babel-polyfill'
import '../javascripts/application'
import '../stylesheets/application'

// Support component names relative to this directory:
var componentRequireContext = require.context("javascripts/components", true)
var ReactRailsUJS = require("react_ujs")
ReactRailsUJS.useContext(componentRequireContext)

import * as Rails from 'rails-ujs'
Rails.start();

console.log('Hello World from Webpacker');
