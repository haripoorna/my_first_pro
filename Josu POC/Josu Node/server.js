const app = require('./server/app')

app.set('port', (process.env.PORT || 9000));
app.listen(app.get('port'), function() {
    console.log("Server Running @ " + app.get('port'));
})
