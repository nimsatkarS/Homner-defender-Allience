const express = require('express');
const pg = require('pg');
const { pool } =require('pg');

const ejs = require('ejs');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.use(express.static('public'))
const Client = new pg.Client({
    host: 'tiny.db.elephantsql.com',
    user: 'jsdawjqh',
    password: 'EaGfh-f8IrBfBfH6rTRMqV1w3xQcqZXj',
    database: 'jsdawjqh'
});

Client.connect((err) => {
    if (err) console.error(err);
    else console.log('connect securly')
})

app.get('/', (req, res) => {
    res.render("homePage")
  })

  app.get('/Menu', (req, res) => {
    res.render("Menu.ejs")
  })
  
  app.get('/review', (req, res) => {
    res.render("review.ejs")
  })
  app.get('/owner', (req, res) => {
    res.render("Owner.ejs")
  })
  app.get('/owner-review', (req, res) => {
    res.render("Owner-Review.ejs")
  });
  app.get('/login', (req, res) => {
    res.render("login")
  })

app.get('/ownerdata', (req, res) =>{
    //console.log("STORING THE DATA....");
    //console.log(req.query);

    let name = req.query.name;
    let email = req.query.email;
    let contact = req.query.contact;
    let idcard = req.query.idcard;
    let homelocation = req.query.homelocation;
    let rentcharges = req.query.rentcharges;
    let criteriaarea = req.query.criteriaarea;

    console.log(name, email,contact, idcard, homelocation, rentcharges, criteriaarea);

    Client.query(
        "INSERT INTO ownerinfo (ownername, ownercontact, ownerAdhar, ownerlocation, ownercharge, ownercondition) VALUES ($1, $2, $3, $4, $5, $6)",
        [name, contact, idcard, homelocation, rentcharges, criteriaarea]
    ).then(result => {
        console.log(result);
    }).catch(err => console.log(err));
    
    //res.send('Data will sucessully stored');
    res.redirect('/');
})

/*
app.get('/Owner-Review', (req, res) =>{
    const selecctQuery = "SELECT * FROM ownerinfo WHERE ownerid = $1";
    client.query(selecctQuery)
    .then(rsult => {
        const reviews = result.row;
        res.render('Owner-Review', {reviews});
    })
    .catch(err => {
        console.error(err);
        res.status(500).send('Error Fetching Data');
})
});
*/
app.get('/reviews', (req, res) => {
    // Fetch reviews from the database
    Client.query("SELECT * FROM ownerinfo")
        .then(result => {
            const reviews = result.rows;
            // Render the review.ejs file with the reviews data
            res.render('reviews', { reviews });
        })
        .catch(err => console.log(err));
});

app.listen(3500, (err) => {
    if(err) console.error(err);
    else console.log('listen port in 3000');
});