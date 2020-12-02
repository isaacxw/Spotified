# Spotified

Spotified helps you visualize your listening habits and offer insights into your favorite artist, song, and playlist. 


### Technologies Used

- React JS
    - styled-components
    - reach/router
- Node.js
    - Express
- Chart.js
- Spotify Developer API
- Heroku

## Local Setup

This project utilizes Node Version Manager - `nvm`, which may need to be invoked before each session.
Refer to https://github.com/nvm-sh/nvm for more information. 

1. Create a Spotify account and [register a new Spotify app](https://developer.spotify.com/dashboard/login "Spotify for Developers").
2. Add `https://localhost:8888/callback` as a Redirect URI in the settings of your newly created Spotify app.
3. Create a `.env` file in the root of the project like so
    ```
    SPOTIFY_CLIENT_ID=YOUR-CLIENT-ID
    SPOTIFY_CLIENT_SECRET=YOUR-CLIENT-SECRET
    FRONTEND_URI=example.com
    REDIRECT_URI=example.com/callback
    LOGIN_URI=example.com/login
    ```
4. `nvm use` 
5. `yarn && yarn client:install`
6. `yarn dev`