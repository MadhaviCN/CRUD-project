var express = require('express');
var bodyParser = require('body-parser');
var mongo = require('mongoose');

var db = mongo.connect('mongodb://localhost:27017/Developer-Challenge', function(err, resp) {
    if(err) {
        console.log(err);
    } else {
        console.log('connected to' + db, ' + ' , resp);
    }
})

var app = express();
app.use(bodyParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE, PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
})

var Schema = mongo.Schema;

var ProductSchema = new Schema({
    device_id: {type: String},
    device_type: {type: String},
    device_risk: {type: String},
    productdate: {type: String}
}, {versionKey: false});

var model = mongo.model('products', ProductSchema, 'products')

app.post('/api/addProducts', function(req, res) {
    var mod = new model(req.body);
    if(req.body.mode === 'Save') {
        mod.save(function(err, data) {
            if(err) {
                res.send(err);
            } else {
                res.send({data: 'Record has been inserted'});
            }
        })
    } else {
        model.updateOne({_id: req.body.id}, {device_id: req.body.device_id, device_type: req.body.device_type, device_risk: req.body.device_risk, productdate: req.body.productdate}, function(err, data) {
            if(err) {
                res.send(err);
            } else {
                res.send({data: 'Record has been updated'});
            }
        })
    }
})

app.get('/api/getProducts', function(req, res) {
    model.find(function(err, data) {
        if(err) {
            res.send(err);
        } else {
            res.send(data);
        }
    })
})

app.post('/api/deleteProduct', function(req, res) {
    model.deleteOne({_id: req.body}, function(err, data) {
        if(err) {
            res.send(err);
        } else {
            res.send({data: 'Record deleted succefully'});
        }
    })
})

app.listen(8080, function() {
    console.log('app listening on port 8080');
})