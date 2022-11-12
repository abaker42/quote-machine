Run:
To run this app locally, in a terminal run 'npm install' then 'npm start'. NodeJS must be
intall to run command

About:
This is the Quote Machine it lists memorable quotes and is able to add quotes and leave comments
on quotes. It using firebase as a backend so all new quotes added will be saved. Different branches
have different features. Develop- has dummy data and no backend. Master- Has a firebase backend and
sends http request locally ToDeploy- hosted on firebase and can be visited by anyone

Deployment:
This app is deployed using firebase. The url is https://react-http.30b70.web.app .
If app is nolonger deployed we can redeploy by

1. firebase init \*(select existing firebase project and use build foler as public directory)
2. firebase deploy \*(this hosts the app on firebase server)
3. firebase hosting:disable \*(this closes the hosting off)
