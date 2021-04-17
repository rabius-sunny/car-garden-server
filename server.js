const express = require('express')
const app = express()
const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster1.guizf.mongodb.net/carGarden?retryWrites=true&w=majority`

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    console.log(err ? err : 'database connected')
    const carCollection = client.db("carGarden").collection("cars");
    const bookingsCollection = client.db("carGarden").collection("bookings");
    const reviewsCollection = client.db("carGarden").collection("reviews");
    const adminCollection = client.db("carGarden").collection("admins");

    app.post('/addCar', (req, res) => {
        const car = req.body
        carCollection.insertOne(car)
            .then(result => res.send(insertedCount))
    })

    app.get('/cars', (req, res) => {
        carCollection.find()
            .toArray((err, cars) => res.send(cars))
    })

    app.get('/cars/:id', (req, res) => {
        carCollection.find({ _id: ObjectId(req.params.id) })
            .toArray((err, car) => res.send(car))
    })

    app.post('/bookThisCar', (req, res) => {
        const booking = req.body
        bookingsCollection.insertOne(booking)
            .then(result => res.send(insertedCount))
    })

    app.get('/bookings', (req, res) => {
        const email = req.query.email
        adminCollection.find({ email: email })
            .toArray((err, admin) => {
                if (admin.length > 0) {
                    bookingsCollection.find()
                        .toArray((err, allBookings) => res.send(allBookings))
                } else {
                    bookingsCollection.find({ email: email })
                        .toArray((err, bookings) => res.send(bookings))
                }
            })
    })

    app.post('/addReview', (req, res) => {
        const review = req.body
        reviewsCollection.insertOne(review)
            .then(result => res.send(insertedCount))
    })

    app.get('/review', (req, res) => {
        reviewsCollection.find()
            .toArray((err, allReviews) => res.send(allReviews))
    })

    app.post('/addAdmin', (req, res) => {
        const admin = req.body
        adminCollection.insertOne(admin)
            .then(result => res.send(insertedCount))
    })

    app.get('/admins', (req, res) => {
        adminCollection.find()
            .toArray((err, admin) => res.send(admin))
    })

});

app.listen(port, () => console.log('server is listening'))
