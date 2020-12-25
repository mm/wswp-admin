import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <Auth0Provider
    domain={process.env['REACT_APP_AUTH_DOMAIN']}
    clientId={process.env['REACT_APP_AUTH_CLIENT_ID']}
    audience={process.env['REACT_APP_AUTH0_AUDIENCE']}
    redirectUri={window.location.origin}
  >
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Auth0Provider>,
  document.getElementById('root')
);
