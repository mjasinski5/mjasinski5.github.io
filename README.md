# Run It

1. Set proper env, prod or stage: `export NODE_ENV=stage`
2. Start it on port 3000: `node server.js`

# Unit Tests

1. Set proper env, prod or stage: `export NODE_ENV=stage`
2. Start tests: `npm test`

# Endpoints for Blog Feeds

```
http://feedservice.yaas.io/feed/{location}
```
where ```location``` is **internal** or **external**

* http://feedservice.yaas.io/external<br/>
* http://feedservice.yaas.io/internal<br/>

# Plans

* [STAGE Bamboo Plan]<br/>
* [PROD Bamboo Plan]

[STAGE Bamboo Plan]:https://bamboo.hybris.com/browse/PTW-FS
[PROD Bamboo Plan]:https://bamboo.hybris.com/browse/PTW-NOD

# Feeds

* https://feeds.feedburner.com/yaas/devportalblog - PROD external blogs
* https://feeds.feedburner.com/yaas/internaldevportalblog - PROD internal blogs
* https://feeds.feedburner.com/yaas/devportalblog-stage - STAGE external blogs
* https://feeds.feedburner.com/yaas/internaldevportalblog-stage - STAGE internal blogs
