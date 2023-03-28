# @pmmmwh/react-refresh-webpack-plugin bug

## Reproduce
- Clone this repo
- Install dependencies
- Run `npm start`
- Open `http://localhost:8080`
- Open developer tools
- Open the network tab
- There will be a ws request with the url `ws://localhost:8080/ws`

The request url should actually be ws://localhost:3000/*`path/`*ws, because of the `--client-web-socket-url` option.
