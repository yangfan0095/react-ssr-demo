const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const path = require('path')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const index = require('./routes/index')
const reactview = require('./plugin/reactview')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

// logger
app.use(async(ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});
// 注入 reactview
const viewpath = path.join(__dirname, '/views');
app.config = {
  reactview: {
    viewpath: viewpath, // the root directory of view files
    doctype: '<!DOCTYPE html>',
    extname: '.js', // view 层直接渲染文件名后缀
    beautify: true, // 是否需要对 DOM 结构进行格式化
    writeResp: false, // 是否需要在 view 层直接输出
  },
}
reactview(app);

module.exports = app