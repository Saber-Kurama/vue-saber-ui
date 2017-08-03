/* eslint-disable import/no-unassigned-import */

// ./play/preview.js
import './index' // which is ./play/index.js
import preview from 'vue-play/preview'
import './2.css';

// actually render the scenarios in preview page
// when the preview page is ready
// it will tell the app interface what scenarios we have
preview()
