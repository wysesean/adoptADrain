let Router = require('express').Router;
const apiRouter = Router()
let helpers = require('../config/helpers.js')

let User = require('../db/schema.js').User
let StormDrain = require('../db/schema.js').Firehydrant

//User Routes  
apiRouter
  .get('/users', function(req, res){
    User.find(req.query , "-password", function(err, results){
      if(err) return res.json(err) 
      res.json(results)
    })
  })

apiRouter
  .get('/users/:_id', function(req, res){
    User.findById(req.params._id, "-password", function(err, record){
      if(err || !record ) return res.json(err) 
      res.json(record)
    })
  })
  .put('/users/:_id', function(req, res){
    User.findByIdAndUpdate(req.params._id, req.body, function(err, record){
        if (err) {
          res.status(500).send(err)
        }
        else if (!record) {
          res.status(400).send('no record found with that id')
        }
        else {
          res.json(Object.assign({},req.body,record))
        }
    })
  })

  .delete('/users/:_id', function(req, res){
    User.remove({ _id: req.params._id}, (err) => {
      if(err) return res.json(err)
      res.json({
        msg: `record ${req.params._id} successfully deleted`,
        _id: req.params._id
      })
    })  
  })


//Fire hydrant Routes
apiRouter
  .post('/stormdrain', function(req, res){
    let newFireHydrant = new FireHydrant(req.body)
    newFireHydrant.save((err, hydrantRecord)=>{
      if(err) return res.status(500).json(`Problem adding hydrant to database`)
      res.json(newFireHydrant)
    })
  })

  .get('/stormdrain/:_id', function(req, res){
    FireHydrant.findById(req.params._id, function(err, results){
     if(err || !results) return res.json(err)
     res.json(results)
    })
  })

  .get('/stormdrain', function(req, res){
    FireHydrant.find(req.query, function(err, results){
      if(err) return res.json(err)
      res.json(results)
    })
  })

  .put('/stormdrain/:_id', function(req, res){
    FireHydrant.findByIdAndUpdate(req.params._id, req.body, function(err, record){
        if (err) {
          res.status(500).send(err)
        }
        else if (!record) {
          res.status(400).send('no record found with that id')
        }
        else {
          res.json(Object.assign({},req.body,record))
        }
    })
  })

  .delete('/stormdrain/:_id', function(req, res){
    FireHydrant.remove({ _id: req.params._id}, (err) => {
      if(err) return res.json(err)
      res.json({
        msg: `record ${req.params._id} successfully deleted`,
        _id: req.params._id
      })
    })  
  })

module.exports = apiRouter