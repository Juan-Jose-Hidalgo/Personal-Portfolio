import { Environment } from "src/app/models/environment.interface";

export const environment:Environment = {
  production: false,
  URL: 'http://localhost:3500/contact/',
  firebase: {
    projectId: 'portfolio-projects-a8711',
    appId: '1:412421836064:web:5fb6ac8a08dc10b3e3db45',
    storageBucket: 'portfolio-projects-a8711.appspot.com',
    locationId: 'europe-west',
    apiKey: 'AIzaSyBlCUEW-_uMbW-BmxKCyTfOexdESV9EDQE',
    authDomain: 'portfolio-projects-a8711.firebaseapp.com',
    messagingSenderId: '412421836064',
  },
};

