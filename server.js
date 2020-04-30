const express=require('express')
const {MongoClient, ObjectID}=require('mongodb')
const bodyParser=require('body-parser')
const assert=require('assert')

const app=express()
app.use(bodyParser.json())

const mongo_URL='mongodb://localhost:27017'
const database='app-wedding'
MongoClient.connect(mongo_URL, (err, client)=>{
    assert.equal(err, null ,'database connection failed')
    const db=client.db(database)


//Add new Troupes
app.post('/newTroupe', (req,res)=>{
    db.collection('Troupes').insertOne(req.body, (err, troupe)=>{
        if(err)
        res.send('something went wrong')
        else
        res.send(troupe)
   })
})
//Get all Troupes
app.get('/Troupes', (req,res)=>{
    db.collection('Troupes').find().toArray((err,Troupe)=>{
        if(err) throw err
        
        res.send(Troupe)
    })
})
//Get one troupe by ID
app.get('/Troupe/:id', (req,res)=>{
   let Troupeid= ObjectID(req.params.id)
   db.collection('Troupes').findOne({_id:Troupeid}, (err,troupe)=>{
       if(err)throw err
       res.send(troupe)
   })
})
//delete one troupe by Id
app.delete('/deleteTroupe/:id', (req,res)=>{
    let Troupeid=ObjectID(req.params.id)
    db.collection('Troupes').findOneAndDelete({_id:Troupeid}, (err, data) =>{
        
        if(err) throw err
        if(data.value){
            db.collection('Troupes').find().toArray((err,Troupe)=>{
                if(err) throw err
                
                res.send(Troupe)
            })
        

        }else
        {res.send('Troupe not found')}  
    })
})
app.put('/editTroupe/:id', (req,res)=>{
    let Troupeid=ObjectID(req.params.id)
    db.collection('Troupes').findOneAndUpdate({_id:Troupeid}, {$set:{...req.body}},(err,data)=>{
        if(err) throw err
        // res.send('Troupe updated')
        db.collection('Troupes').findOne({_id:Troupeid}, (err,troupe)=>{
            if(err)throw err
            res.send(troupe)
        })
    })
})

/***********/
//Add new Salles
app.post('/newSalle', (req,res)=>{
    db.collection('Salles').insertOne(req.body, (err, salle)=>{
        if(err)
        res.send('something went wrong')
        else
        res.send(salle)
   })
})
//Get all Salles
app.get('/salles', (req,res)=>{
    db.collection('Salles').find().toArray((err,salle)=>{
        if(err) throw err
        
        res.send(salle)
    })
})
//Get one salle by ID
app.get('/salle/:id', (req,res)=>{
   let salleid= ObjectID(req.params.id)
   db.collection('Salles').findOne({_id:salleid}, (err,salle)=>{
       if(err)throw err
       res.send(salle)
   })
})
//delete one salle by Id
app.delete('/deletesalle/:id', (req,res)=>{
    let salleid=ObjectID(req.params.id)
    db.collection('Salles').findOneAndDelete({_id:salleid}, (err, data) =>{
        
        if(err) throw err
        if(data.value){
            db.collection('Salles').find().toArray((err,salle)=>{
                if(err) throw err
                
                res.send(salle)
            })
        

        }else
        {res.send('Salle not found')}  
    })
})
app.put('/editSalle/:id', (req,res)=>{
    let salleid=ObjectID(req.params.id)
    db.collection('Salles').findOneAndUpdate({_id:salleid}, {$set:{...req.body}},(err,data)=>{
        if(err) throw err
        // res.send('Salle updated')
        db.collection('Salles').findOne({_id:salleid}, (err,salle)=>{
            if(err)throw err
            res.send(salle)
        })
    })
})
/***************/
//Add new Gateaux
app.post('/newGateaux', (req,res)=>{
    db.collection('Gateaux').insertOne(req.body, (err, Gateaux)=>{
        if(err)
        res.send('something went wrong')
        else
        res.send(Gateaux)
   })
})
//Get all Gateaux
app.get('/Gateaux', (req,res)=>{
    db.collection('Gateaux').find().toArray((err,Gateaux)=>{
        if(err) throw err
        
        res.send(Gateaux)
    })
})
//Get one Gateaux by ID
app.get('/Gateaux/:id', (req,res)=>{
   let Gateauxid= ObjectID(req.params.id)
   db.collection('Gateaux').findOne({_id:Gateauxid}, (err,Gateaux)=>{
       if(err)throw err
       res.send(Gateaux)
   })
})
//delete one Gateaux by Id
app.delete('/deleteGateaux/:id', (req,res)=>{
    let Gateauxid=ObjectID(req.params.id)
    db.collection('Gateaux').findOneAndDelete({_id:Gateauxid}, (err, data) =>{
        
        if(err) throw err
        if(data.value){
            db.collection('Gateaux').find().toArray((err,Gateaux)=>{
                if(err) throw err
                
                res.send(Gateaux)
            })
        

        }else
        {res.send('Gateaux not found')}  
    })
})
app.put('/editGateaux/:id', (req,res)=>{
    let Gateauxid=ObjectID(req.params.id)
    db.collection('Gateaux').findOneAndUpdate({_id:Gateauxid}, {$set:{...req.body}},(err,data)=>{
        if(err) throw err
        // res.send('Gateaux updated')
        db.collection('Gateaux').findOne({_id:Gateauxid}, (err,Gateaux)=>{
            if(err)throw err
            res.send(Gateaux)
        })
    })
})
/*****************/
//Add new Décor
app.post('/newDécor', (req,res)=>{
    db.collection('Décors').insertOne(req.body, (err, Décor)=>{
        if(err)
        res.send('something went wrong')
        else
        res.send(Décor)
   })
})
//Get all Décors
app.get('/Décors', (req,res)=>{
    db.collection('Décors').find().toArray((err,Décor)=>{
        if(err) throw err
        
        res.send(Décor)
    })
})
//Get one Décor by ID
app.get('/Décor/:id', (req,res)=>{
   let Décorid= ObjectID(req.params.id)
   db.collection('Décors').findOne({_id:Décorid}, (err,Décor)=>{
       if(err)throw err
       res.send(Décor)
   })
})
//delete one Décors by Id
app.delete('/deleteDécors/:id', (req,res)=>{
    let Décorid=ObjectID(req.params.id)
    db.collection('Décors').findOneAndDelete({_id:Décorid}, (err, data) =>{
        
        if(err) throw err
        if(data.value){
            db.collection('Décors').find().toArray((err,Décors)=>{
                if(err) throw err
                
                res.send(Décors)
            })
        

        }else
        {res.send('Décors not found')}  
    })
})
app.put('/editDécors/:id', (req,res)=>{
    let Décorid=ObjectID(req.params.id)
    db.collection('Décors').findOneAndUpdate({_id:Décorid}, {$set:{...req.body}},(err,data)=>{
        if(err) throw err
        // res.send('Décors updated')
        db.collection('Décors').findOne({_id:Décorid}, (err,Décor)=>{
            if(err)throw err
            res.send(Décor)
        })
        
    })
})
/***************/
//Add new VéhiculePrestige
app.post('/Véhicules', (req,res)=>{
    db.collection('Véhicules').insertOne(req.body, (err, Véhicule)=>{
        if(err)
        res.send('something went wrong')
        else
        res.send(Véhicule)
   })
})
//Get all Véhicules
app.get('/Véhicules', (req,res)=>{
    db.collection('Véhicules').find().toArray((err,Véhicule)=>{
        if(err) throw err
        
        res.send(Véhicule)
    })
})
//Get one Véhicules by ID
app.get('/Véhicules/:id', (req,res)=>{
   let Véhiculeid= ObjectID(req.params.id)
   db.collection('Véhicules').findOne({_id:Véhiculeid}, (err,Véhicule)=>{
       if(err)throw err
       res.send(Véhicule)
   })
})
//delete one Véhicules by Id
app.delete('/deleteVéhicules/:id', (req,res)=>{
    let Véhiculeid=ObjectID(req.params.id)
    db.collection('Véhicules').findOneAndDelete({_id:Véhiculeid}, (err, data) =>{
        
        if(err) throw err
        if(data.value){
            db.collection('Véhicules').find().toArray((err,Véhicule)=>{
                if(err) throw err
                
                res.send(Véhicule)
            })
        

        }else
        {res.send('Véhicules not found')}  
    })
})
app.put('/editVéhicules/:id', (req,res)=>{
    let Véhiculeid=ObjectID(req.params.id)
    db.collection('Véhicules').findOneAndUpdate({_id:Véhiculeid}, {$set:{...req.body}},(err,data)=>{
        if(err) throw err
        // res.send('Véhicules updated')
        db.collection('Véhicules').findOne({_id:Véhiculeid}, (err,Véhicule)=>{
            if(err)throw err
            res.send(Véhicule)
        })
    })
})
/******************/
//Add new Client
app.post('/Clients', (req,res)=>{
    db.collection('Clients').insertOne(req.body, (err, Client)=>{
        if(err)
        res.send('something went wrong')
        else
        res.send(Client)
   })
})
//Get all Clients
app.get('/Clients', (req,res)=>{
    db.collection('Clients').find().toArray((err,Client)=>{
        if(err) throw err
        
        res.send(Client)
    })
})
//Get one Clients by ID
app.get('/Clients/:id', (req,res)=>{
   let Clientid= ObjectID(req.params.id)
   db.collection('Clients').findOne({_id:Clientid}, (err,Client)=>{
       if(err)throw err
       res.send(Client)
   })
})
//delete one Clients by Id
app.delete('/deleteClients/:id', (req,res)=>{
    let Clientid=ObjectID(req.params.id)
    db.collection('Clients').findOneAndDelete({_id:Clientid}, (err, data) =>{
        
        if(err) throw err
        if(data.value){
            db.collection('Clients').find().toArray((err,Client)=>{
                if(err) throw err
                
                res.send(Client)
            })
        

        }else
        {res.send('Client not found')}  
    })
})
app.put('/editClient/:id', (req,res)=>{
    let Clientid=ObjectID(req.params.id)
    db.collection('Clients').findOneAndUpdate({_id:Clientid}, {$set:{...req.body}},(err,data)=>{
        if(err) throw err
        // res.send('Clients updated')
        db.collection('Clients').findOne({_id:Clientid}, (err,Client)=>{
            if(err)throw err
            res.send(Client)
        })
    })
})
/****************/

//Add new réservation
app.post('/réservations', (req,res)=>{
    db.collection('réservations').insertOne(req.body, (err, réservation)=>{
        if(err)
        res.send('something went wrong')
        else
        res.send(réservation)
   })
})
//Get all réservations
app.get('/réservations', (req,res)=>{
    db.collection('réservations').find().toArray((err,réservation)=>{
        if(err) throw err
        
        res.send(réservation)
    })
})
//Get one réservations by ID
app.get('/réservations/:id', (req,res)=>{
   let réservationid= ObjectID(req.params.id)
   db.collection('réservations').findOne({_id:réservationid}, (err,réservation)=>{
       if(err)throw err
       res.send(réservation)
   })
})
//delete one réservations by Id
app.delete('/deleteréservations/:id', (req,res)=>{
    let réservationid=ObjectID(req.params.id)
    db.collection('réservations').findOneAndDelete({_id:réservationid}, (err, data) =>{
        
        if(err) throw err
        if(data.value){
            db.collection('réservations').find().toArray((err,réservation)=>{
                if(err) throw err
                
                res.send(réservation)
            })
        

        }else
        {res.send('réservation not found')}  
    })
})
app.put('/editréservation/:id', (req,res)=>{
    let réservationid=ObjectID(req.params.id)
    db.collection('réservations').findOneAndUpdate({_id:réservationid}, {$set:{...req.body}},(err,data)=>{
        if(err) throw err
        // res.send('réservations updated')
        db.collection('réservations').findOne({_id:réservationid}, (err,réservation)=>{
            if(err)throw err
            res.send(réservation)
        })
    })
})




})

app.listen(5000, (err)=>{
    if(err)
    console.log('server is not running')
    else
    console.log('server is running on port 5000')
})
