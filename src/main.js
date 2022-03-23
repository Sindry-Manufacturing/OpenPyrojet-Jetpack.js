import 'bootstrap';
import './scss/app.scss';

import  { Application } from './Application.js';

window.application = null;

$(document).ready(function() {
    window.application = new Application();
});
