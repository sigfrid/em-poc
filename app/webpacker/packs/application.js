/* eslint no-console:0 */

import { Application }            from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

import Rails from 'rails-ujs'
Rails.start()

import Turbolinks from 'turbolinks'
Turbolinks.start()

const application = Application.start()
const context = require.context("../src/javascript/controllers", true, /\.js$/)
application.load(definitionsFromContext(context))


//import { Cable } from "../src/javascript/channels/cable"


function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context("../src/javascript/channels/", true, /\.js$/));
