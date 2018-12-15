const express = require(`express`)
const middlewareLogin = require(`./middlewares/logincheck`)
const app = express()


app.set('view engine', 'html');
app.use(express.urlencoded({
    extended: false
}))
app.use(express.json())
app.use(express.static(__dirname));

//MAIN ROUTE
app.get('/',middlewareLogin, (req, res) => {
    res.render(`dashboard.ejs`)
});
app.get('/login', (req, res) => {
    res.render(`login.ejs`)
});

app.get('/tables', (req, res) => {
    res.render(`tables.ejs`)
});

app.listen(3000, () => {
    console.log(__dirname);

    console.log('App listening on port 3000!');
});