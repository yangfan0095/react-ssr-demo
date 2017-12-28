const router = require('koa-router')()


let microdata = {
  styleDomain: "//localhost:3000/assets/",
  styleVersion: '1.1.1',
};

// router.get('/', async(ctx, next) => {
//   ctx.body = ctx.render('Home', {
//     microdata: microdata,
//     mydata: {
//       nick: 'server render body'
//     }
//   }, true)
// })
router.get('/', async(ctx, next) => {
  ctx.body = ctx.render('App', {
    microdata: microdata,
    mydata: {
      nick: 'server render body'
    }
  }, true)
})

router.get('/app/:id', async(ctx, next) => {
  ctx.body = ctx.render('App', {
    microdata: microdata,
    mydata: {
      nick: 'server render body'
    }
  }, true)
})

router.get('/json', async(ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router