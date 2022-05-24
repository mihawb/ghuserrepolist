# Github User & Repo List
Web app built with React allowing you to browse Github users and their repositories as well as languages used within.

## Installation guide
1. Download and install current version of NodeJS (18.0.0) suitable for your operation system from [here](https://nodejs.dev/download)
1. Clone this repository or download the zip archive and extract it
2. Inside the main directory (the one that `package.json` is in) run `npm install` in your terminal of choice to install all dependencies

### Development build (sufficient for just checking out)
4. Run `npm start` to start the development server
5. The application should now open in your default browser. If that's not the case, copy local address from terminal and paste it to your browser
### Production build (optimised for web deployment, not so locally)
4. Run `npm run build` to compile deployment build
5. If you don't have it already, install static deployment server by running `npm install -g serve`
6. Run `serve -s build` to deploy the application
7. Copy local address from terminal and paste it to your browser

## Reflections
Github's public API used for this application has a very low rate limit for unauthenticated apps of ***60 calls per hour*** (sic!). Every method of authentication requires including some Github user's credentials in call's headers and is not recommended for client-side applications, so here we're rolling with the severely limited verion of aforementioned API Having said that, let's now discuss...

### Limitations and design choices
* Only the most suitable 4 out of all users relevant to specified query are being shown, so as not to exceed the rate limit too fast. Had I not wanted to display user's picture, description and full name, the limit wouldn't have been a problem, since search queries are not limited. However I went with the design over the functionality since this whole app is a proof of my ability.
* Debounce on search bar is set to 700ms. Although I believe 300ms-ish would feel more natural, rate limit is again getting in my way, because every debounce resolved is 4 more API calls made. If you feel like it, change it in `src/UserSearchBar.js` to see the difference.
* GH's API allows a maximum of 100 repositories fetched with a single call. Here, I went with 25 of the last updated repositories, assuming those would be the most relevant ones. **Notice:** every load of languages also takes one API call. Use with caution.
* Implementing proper error handling with such limited API would be unthinkably time-consuming, expecially that promises resolved after exceeding the limit are not rejected but fulfilled with error message object. Because of that, I just made sure no error is being swallowed on runtime, but logged to console instead.
* I noticed high latency of API calls in production build hosted locally. Since this repository is meant to stay private, I had no chance of trying out a remote host. Because of that I recommend checking the app out in development build.