const router = require('koa-router')()


let microdata = {
  styleDomain: "//localhost:3000/assets/",
  styleVersion: '1.1.1',
};

router.get('/', async(ctx, next) => {
  ctx.body = ctx.render('Home', {
    microdata: microdata,
    mydata: {
      nick: 'server render body'
    }
  }, true)
})

router.get('/string', async(ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async(ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router