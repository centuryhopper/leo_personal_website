# leo_personal_website

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### deploying to heroku
check https://cli.vuejs.org/guide/deployment.html#heroku

add static.json to project root folder

git add static.json
git commit -m "add static configuration"

static.json:
```
{
  "root": "dist",
  "clean_urls": true,
  "routes": {
    "/**": "index.html"
  }
}
```
after adding the static.json file type:

```npm run build```
```heroku login```

```heroku create [app_name] && heroku git:remote -a [app_name] && heroku buildpacks:add heroku/nodejs && heroku buildpacks:add https://github.com/heroku/heroku-buildpack-static```

set all necessary .env vars:
https://devcenter.heroku.com/articles/config-vars

type ```heroku config``` to check all currently stored config vars

Set a config var, type:
```heroku config:set GITHUB_USERNAME=joesmith```

Remove a config var, type:
```heroku config:unset GITHUB_USERNAME```


deploy to heroku:
```git push heroku master```


