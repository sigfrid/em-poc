/* eslint no-console:0 */

import { Application }            from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

const application = Application.start()
const context = require.context("../src/javascript/controllers", true, /\.js$/)
application.load(definitionsFromContext(context))


import Rails from 'rails-ujs'
Rails.start()

import Turbolinks from 'turbolinks'
Turbolinks.start()
