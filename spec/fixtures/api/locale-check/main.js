const {app} = require('electron')

app.on('ready', () => {
  process.stdout.write(app.getLocale())
  process.stdout.end()

  setImmediate(() => {
    app.quit()
  })
})
