# webpack-dev-server-bug

## Reproduce
- Clone this repo
- Install dependencies
- Run `npm start`
- At the same time, run `npm run forward`
- Open `http://localhost:3001`
- Open developer tools
- Open the network tab
- Find the request named `ws`
- Click on it
- The request url will be `ws://localhost:3000/ws`

The request url should actually be ws://localhost:300***1***/ws. In this case, hot reloading works since the request is successful, but in other cases it won't work.

If u do this on GitHub codespaces u'll get an error when you open the forwarded port.
