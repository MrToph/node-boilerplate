# node-boilerplate
Has set up for
* babel
* eslint
* prettier

## Running
```shell
npm run start:dev
```

or

```shell
npm run start
```

### On a server with pm2
http://pm2.keymetrics.io/docs/usage/quick-start/#cheatsheet
```shell
pm2 start pm2.json
pm2 stop node-boilerplate
pm2 restart node-boilerplate

# See logs (also works while app is running)
pm2 logs node-boilerplate --lines 1000
```