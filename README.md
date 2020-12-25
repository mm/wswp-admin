# What Should We Play? (Admin)

This repo is for the admin panel of [What Should We Play?](https://github.com/mm/wswp), a project I built for the [DigitalOcean App Platform Hackathon](https://dev.to/devteam/announcing-the-digitalocean-app-platform-hackathon-on-dev-2i1k). You can read over there about my motivation for starting the project and how to get started with setting up a dev environment! There's also an easy "Deploy to DigitalOcean" button there to deploy the whole project for yourself.

Since the project was designed to be an index anyone can submit games to, I built this really quick admin panel to view and approve submissions that come in (to reduce spam). It was written in [React](https://reactjs.org) with the [Chakra UI](https://chakra-ui.com/) component library. [Auth0](https://auth0.com/) is used to authenticate and send tokens to the backend when making requests at private endpoints. 

## Requirements

Before building this on your local computer, please make sure you go through the [back-end setup](https://github.com/mm/wswp) described in the README there because this depends on that!

You'll also need to have signed up for an Auth0 account and set up a single-page and API application there, similar to the [back-end setup](https://github.com/mm/wswp) process.

Please keep in mind if the `ADMIN_OFF` environment variable is set to `1` on the backend, the routes this application depends on will not work.

## Getting started

1. Clone this repo to your computer: `git clone https://github.com/mm/wswp-admin`

2. Create an `.env.local` file to hold some environment variables (particularly some Auth0 details as well as the base API URL the backend lives at):

    ```
    REACT_APP_AUTH_DOMAIN=your-domain.auth0.com
    REACT_APP_AUTH_CLIENT_ID=your-auth0-client-id
    REACT_APP_API_URL=http://localhost:8000/v1
    REACT_APP_AUTH0_AUDIENCE=your-auth0-api-audience
    ```

    The `REACT_APP_AUTH_DOMAIN` and `REACT_APP_AUTH0_AUDIENCE` should match up with the same values you had set up in the back-end setup. In my example, my API lives at `http://localhost:8000/v1`, but tweak this depending on how you got the API running.

3. In the project root, run `yarn start`. Assuming all dependencies install properly, you're good to go!