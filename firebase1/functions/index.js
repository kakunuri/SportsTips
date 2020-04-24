const functions = require('firebase-functions');
const express = require('express');



const app = express();


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const db = admin.firestore()
const cors = require('cors')({origin: true});
// var isJsonEqual = require('lodash.isequal');
var deepEqual = require('deep-equal');
// var moment = require('moment');
const moment = require('moment-timezone');
app.use(cors);
const { check, validationResult } = require('express-validator');


const Busboy = require('busboy');
const fs = require('fs');

  


const {Storage} = require('@google-cloud/storage');
const gcs = new Storage({
    projectId: "ravi-e8d9a",
    keyFilename: "ravi-e8d9a-firebase-adminsdk-hb9yi-0ab1e84dc7.json"

});

const Multer = require('multer');
const bucket = gcs.bucket("ravi-e8d9a.appspot.com");
const multer = Multer({
    storage: Multer.memoryStorage(),
    limits: {
      fileSize: 5 * 1024 * 1024 // no larger than 5mb, you can change as needed.
    }
  });

  var fileupload = require('express-fileupload');
app.use(fileupload());

  const path = require("path");
  const os = require("os");

exports.updateFields = functions.firestore.document('product/{productId}').onUpdate((change, event) =>{
    const docId = event.params.productId;
    const productRef = admin.firestore().collection('product').doc(docId);
   
    const after = change.after.data();
    const createdData = after.name;
    console.log(createdData);
    return productRef.update({message:`hii  ${createdData}  c x`});
    
})

// exports.sendMessage = functions.firestore
//     .document('product/{productId}')
//     .onCreate((snapshot,event) => {
//         const docId = event.params.productId;

//         const createdData = snapshot.data().name;
//         console.log(createdData);
//         // const name = event.data.data().name;

//         console.log("jiiiiii");
//         const productRef = admin.firestore().collection('product').doc(docId)

//         return productRef.update({message:`hii  ${createdData}  c x`})

        
//     });


exports.getMethod = functions.https.onRequest((req,res) => {
    console.log(req.query.name)
    var s ='';
    for (const key in req.query){
        console.log(req.query[key]) ;
        console.log(req.query);
        console.log(req.query.name);
    }
    
    res.send(req.query.name)
})


// exports.testMethod = functions.https.onRequest((req,res) => {
    
//     res.send(req.files.image);
// })



app.get('/sports/tips',async(req,res)=>{
    try{
        let query = db.collection('bettingTips');

            for (const key in req.query){
                if(key==='startDateTime'){
                    // console.log(new moment(req.query[key]));
                    
                    var date = new moment(req.query[key]);
                    // date = date.valueOf();
                    console.log(date);
                    console.log(date.add(1,'days'));
                    query = query.where(key,'<', date.add(1,'days'));//query.where(key,'>', date);//.where(key,'<', date.add(1,'days').valueOf());
                    // query = query.where(key,'<', date.add(1,'days'));
                }
                else{
                    query = query.where(key,'==',req.query[key]);
                } 
            }    
            let list = []
            await query.get()
                .then(querySnapshot => {
                    querySnapshot.docs.forEach(match=>{
                        matchData = match.data();
                        // matchData[field] = matchData[field].toDate();
                        // matchData[field] = matchData[field].toDate();
                        let fieldList = ['lastModified', 'startDateTime'];
                        for(field in fieldList){
                            matchData[fieldList[field]] = matchData[fieldList[field]].toDate();

                            


                            // if(['lastModified', 'startDateTime'].includes(field)){
                            //     matchData[field] = matchData[field].toDate();
                            // }
                            // else if(['tips'].includes(field)){

                            // }
                        }
                        let net=0;
                        let success=0,failure=0,pending=0;
                        for(tip in matchData.tips){
                            matchData.tips[tip].insertDateTime = matchData.tips[tip].insertDateTime.toDate();
                            net += ((matchData.tips[tip].odds)-1) * (matchData.tips[tip].result==='success'?1:(matchData.tips[tip].result==='failure'?-1:0))*100;
                            // console.log(net);
                            if(matchData.tips[tip].result==='success') success++;
                            if(matchData.tips[tip].result==='failure') failure++;
                            if(matchData.tips[tip].result==='pending') pending++;
                        }
                        matchData['net'] = net;
                        matchData['winPercentage']=(success*100)/(success+failure);
                        list.push(matchData);
                    })
                    return list;
                })
            return res.send(list);
    }
    catch(e){
        console.log(e);
        return res.status(500).send(e);
    }
})


app.post('/sports/tips',
check('sport').notEmpty().withMessage('tip is required').bail().isString().withMessage('tip must be string'),
check('match').notEmpty().withMessage('user is required').bail().isString().withMessage('user must be string'),
check('series').notEmpty().withMessage('gamblingSite is required').bail().isString().withMessage('gambling must be string'),
check('status').notEmpty().withMessage('status is required').bail().isString().withMessage('status must be string'),
check('priority').notEmpty().withMessage('priority is required').bail().isString().withMessage('priority must be string'),
check('startDateTime').notEmpty().withMessage('startDateTime is required').bail().isISO8601().withMessage('startDateTime must be ISO8601 Datetime'),
(req, res) => {

    (async () => {
        try {
            // let docId = `${req.body.sport}:${req.body.match}:${req.body.series}`;
            let docId = `${req.body.sport}:${req.body.series}:${req.body.match}`;
            let match = await db.collection('bettingTips').doc(docId).get();
            const matchData = match.data();
            if(matchData !== undefined){
                throw new Error(`Match with matchId:"${docId}" already exists`);
            }
            else{
            let doc = {
                sport:req.body.sport,
                match:req.body.match,
                series:req.body.series,
                startDateTime:new Date(req.body.startDateTime),
                status:req.body.status,
                priority:req.body.priority,
                lastModified:new moment()

            }
            if(req.body.tips){
                let  tips = [];
                let tipIdList = [];    // using blank tipIdList as it is a new match so there won't be any existing tip.
                req.body.tips.forEach(tip => {
                    if(!tipIdList.includes(tip.tipId)){
                        tips.push({
                            insertDateTime:new Date(tip.insertDateTime),
                            gamblingSite: tip.gamblingSite,
                            tip: tip.tip ,
                            odds: tip.odds,
                            tipId: tip.tipId,
                            result: tip.result,
                            user:tip.user
                        })
                        tipIdList.push(tip.tipId);
                    }
                    else{
                        throw new Error(`Tip with tipId:${tip.tipId} already present`);
                    }
                })
                doc["tips"]=tips;
            }

            await db.collection('bettingTips').doc(`${req.body.sport}:${req.body.match}:${req.body.series}`)
            .create(doc)
            return res.status(200).send(doc);
        }
        }
        catch(e) {
            console.log(e);
            return res.status(400).send(e.message);
        }
    })();

});

app.put('/sports/tips/notToBeUsed',(req, res) => {    // not to be used
    (async () => {
        try{
            let newTipIdList = [];
            let needsTobeUpdated=false;
            let newTipAdded = false;
            let docId = `${req.body.sport}:${req.body.series}:${req.body.match}`;
            let match = await db.collection('bettingTips').doc(docId).get();
            const matchData = match.data();
            const tipList = matchData.tips;
            // const matchData = req.body;
            let matchJson = {}
            if(matchData===undefined){
                throw new Error(`Match with matchId:"${docId}" not found.`);
            }
            else{
                
                for(matchField in req.body){

                    if(['startDateTime','priority','status'].includes(matchField)){
                        
                        if(matchData[matchField]!==req.body[matchField]){ //add only if there is diff
                            console.log(matchField);
                            matchJson[matchField] = req.body[matchField];
                        }
                        
                    }
                    else if(matchField === 'tips'){
                        // db.collection('bettingTips').doc(`${req.body.sport}:${req.body.match}:${req.body.series}`).tips[0]
                        // db.collection('bettingTips').doc(`${req.body.sport}:${req.body.match}:${req.body.series}`).update({tips:req.body['tips'][0]})
                        // .collection('tips').add(req.body['tips'][0]);
                        
                        req.body[matchField].forEach(tip => {
                            let found = false;
                            for(let existingTip in tipList)  {
                                // console.log(tipList[existingTip]);
                                if(tip.tipId === tipList[existingTip].tipId){
                                     
                                    found = true;

                                    if(!deepEqual(tipList[existingTip],tip)){   // dont change existing tip there is no diff
                                    console.log(tipList[existingTip]);
                                        console.log(tip);
                                        needsTobeUpdated = true;
                                        for(const key in tip){    //can be removed of only tipId needs to be excluded
                                            if(!['tipId'].includes(key)){
                                                tipList[existingTip][key]=tip[key]
                                            }
                                        }
                                    }
                                    break;  //break as a tip is found
                                }
                        }

                            if(found===false){
                                if(newTipIdList.includes(tip.tipId)){
                                    throw new Error(`Multiple new Tips with tipId:${tip.tipId} present in the payload`);
                                }
                                newTipIdList.push(tip.tipId);

                                newTipAdded = true;
                                // console.log(newTipIdList);
                                console.log(found);
                                db.collection('bettingTips').doc(docId).update({
                                        'tips': admin.firestore.FieldValue.arrayUnion(tip)
                                });
                            }
                            
                            
                        })
                       if(needsTobeUpdated){
                            db.collection('bettingTips').doc(docId).update({'tips':tipList});
                       }
                    
                        
                    }
                    

                }
                // console.log(Object.keys(matchJson).length);
                if(Object.keys(matchJson).length>0){ //update only if there is diff
                    matchJson['lastModified'] = new Date().getTime();
                    await db.collection('bettingTips').doc(docId)
                            .update(matchJson);
                }
                else if(Object.keys(matchJson).length===0 && !needsTobeUpdated && !newTipAdded){

                    throw new Error(`There were no new changes.`);
                }
                
                
                
            }

            return res.status(200).send(req.body['tips'][0]);
        }
        catch(e) {
            console.log(e);
            return res.status(400).send(e.message);
        }

    })()
})






app.put('/sports/tips/match/:matchId/tip/:tipId',
check('tip').notEmpty().withMessage('tip is required').bail().isString().withMessage('tip must be string'),
check('user').notEmpty().withMessage('user is required').bail().isString().withMessage('user must be string'),
check('gamblingSite').notEmpty().withMessage('gamblingSite is required').bail().isString().withMessage('gambling must be string'),
check('odds').notEmpty().withMessage('odds is required').bail().isFloat().withMessage('odds must be float'),
check('result').notEmpty().withMessage('result is required').bail().isString().withMessage('result must be string').isIn(['success', 'failure', 'pending']).withMessage('result must be success,failure,pending'),
(req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }
    (async () => {
        try{
            let docId = req.params.matchId;
            let match = await db.collection('bettingTips').doc(docId).get();
            const matchData = match.data();

            let tip = {
                tipId:req.params.tipId,
                tip:req.body.tip,
                gamblingSite:req.body.gamblingSite,
                odds:req.body.odds,
                insertDateTime:new Date(),
                result:req.body.result,
                user:req.body.user
            }


            if(matchData === undefined){
                // throw new Error(`Match with matchId:"${docId}" not found.`);
                return res.status(404).send({"message":`Match with matchId:${docId} not found.`});
            }
            const tipList = matchData.tips;
            let found = false;

            for(let existingTip in tipList)  {
                if(req.params.tipId === tipList[existingTip].tipId){

                    found = true;
                    const insertDateTime = tipList[existingTip].insertDateTime;
                    delete tipList[existingTip].tipId
                    delete tipList[existingTip].insertDateTime
                    // return res.status(200).send(tipList[existingTip],req.p);
                    if(!deepEqual(tipList[existingTip],req.body)){
                        // throw new Error(`Tip with tipId:"${req.params.tipId}" already exists`);
                        return res.status(409).send({"message":`Tip with tipId:${req.params.tipId} already exists`});
                    }
                    else{
                        tipList[existingTip].insertDateTime = insertDateTime.toDate();//.toLocaleString();//getTimezoneOffset()//.toLocaleString('YYYY-MM-DD HH:mm:ss');
                        tipList[existingTip].tipId = req.params.tipId;
                        return res.status(200).send(tipList[existingTip]);
                    }
                }
            }
           
            if(found===false){
                db.collection('bettingTips').doc(docId).update({
                    'tips': admin.firestore.FieldValue.arrayUnion(tip)
                });
            }
            return res.status(200).send(tip);

        }
        catch(e) {
            console.log(e);
            return res.status(400).send({"message":e.message});
        }
    })()
})








app.patch('/sports/tips/match/:matchId',
(req, res) => {
    (async () => {
        try{
            let docId = req.params.matchId;
            let match = await db.collection('bettingTips').doc(docId).get();
            const matchData = match.data();
            if(matchData === undefined){
                // throw new Error(`Match with matchId:"${docId}" not found.`);
                return res.status(404).send({"message":`Match with matchId:${docId} not found.`});
            }

            matchJson={};
            for(field in req.body){
                if(['status','priority'].includes(field)){
                    if(matchData[field] !== req.body[field]){
                        matchJson[field] = req.body[field];
                        matchData[field] = req.body[field];
                    }
                }
                
            }
        
            if(Object.keys(matchJson).length>0){ //update only if there is diff
                matchJson['lastModified'] = new Date();
                await db.collection('bettingTips').doc(docId)
                        .update(matchJson);
            }
            
            tipList[tipIndex].insertDateTime = tipList[tipIndex].insertDateTime.toDate();
            return res.status(200).send(tipList[tipIndex]);

        }
        catch(e) {
            console.log(e);
            return res.status(400).send({"message":e.message});
        }
    })()
})





app.patch('/sports/tips/match/:matchId/tip/:tipId',
check('result').notEmpty().withMessage('result is required').bail().isString().withMessage('result must be string').isIn(['success', 'failure', 'pending']).withMessage('result must be success,failure,pending'),
(req, res) => {
    (async () => {
        try{
            let docId = req.params.matchId;
            let match = await db.collection('bettingTips').doc(docId).get();
            const matchData = match.data();
            if(matchData === undefined){
                // throw new Error(`Match with matchId:"${docId}" not found.`);
                return res.status(404).send({"message":`Match with matchId:${docId} not found.`});
            }
            const tipList = matchData.tips;

            let found = false;
            let tipIndex;
            let updated = false;
            for(let existingTip in tipList)  {
                if(req.params.tipId === tipList[existingTip].tipId){
                    found = true;
                    tipIndex = existingTip;
                    if(tipList[existingTip].result !== req.body.tipResult){
                        updated = true;
                        tipList[existingTip].result = req.body.tipResult;
                        matchJson['tips'] = tipList;
                        break;
                    }
                   
                }
            }
            
            if(found===false){
                throw new Error({"message":`Tip with tipId:"${req.params.tipId}" not found.`});   
            }
            else{
                if(updated){
                    db.collection('bettingTips').doc(docId).update({'tips':tipList});
                }
                // else{
                //     // throw new Error(`No new changes`); 
                // }
            }

            return res.status(200).send(tipList[tipIndex]);

        }
        catch(e) {
            console.log(e);
            return res.status(400).send({"message":e.message});
        }
    })()
})





app.get('/sports/bookmakers',async(req,res)=>{
    try{
        let query = db.collection('bookmakers');
            for (const key in req.query){
                query = query.where(key,'==',req.query[key]);
            }    
            let list = []
            await query.get()
                .then(querySnapshot => {
                    querySnapshot.docs.forEach(t=>{
                        console.log(t.data());
                        list.push(t.data())
                    })
                    return list;
                })
            return res.send(list);
    }
    catch(e){
        console.log(e);
        return res.status(500).send(e);
    }
})






app.put('/sports/bookmaker/:bookmakerId',
check('bookmakerId').notEmpty().withMessage('bookmakerId is required').bail().isString().withMessage('bookmakerId must be string'),
check('bonus').notEmpty().withMessage('bonusbonus is required').bail().isString().withMessage('user must be string'),
check('rating').notEmpty().withMessage('rating is required').bail().isString().withMessage('rating must be string'),
check('join').notEmpty().withMessage('join is required').bail().isString().withMessage('join must be string'),
check('review').notEmpty().withMessage('review is required').bail().isString().withMessage('review must be string').isIn(['success', 'failure', 'pending']).withMessage('result must be success,failure,pending'),
(req, res) => {

    (async () => {
        try {
            let docId = req.params.bookmakerId;
            let bookmaker = await db.collection('bookmakers').doc(docId).get();
            const bookmakerData = bookmaker.data();
            if(bookmakerData !== undefined){
                // throw new Error(`Match with matchId:"${docId}" not found.`);
                delete bookmakerData.bookmaker;
                if(!deepEqual(bookmakerData,req.body)){
                    return res.status(409).send({"message":`bookmaker with bookmakerId:${docId} already exists.`});
                }
                else{
                    bookmakerData.bookmaker = req.params.bookmakerId;
                    return res.status(200).send(bookmakerData);
                }
                
            }
            let doc = {
                bookmaker:req.params.bookmakerId,
                bonus:req.body.bonus,
                rating:req.body.rating,
                join:req.body.join,
                review:req.body.review,
            }     
            await db.collection('bookmakers').doc(docId).create(doc)
            return res.status(200).send(doc);
        }
        catch(e) {
            console.log(e);
            return res.status(400).send({"message":e.message});
        }
    })();

});



app.patch('/sports/bookmakers',(req, res) => {
    (async () => {
        try{
            let docId = `${req.body.bookmaker}`;
            let bookmaker = await db.collection('bookmakers').doc(docId).get();
            const bookmakerData = bookmaker.data();
            let bookmakerJson = {}
            if(bookmakerData===undefined){
                throw new Error(`Bookmaker with bookmakerId:"${docId}" not found.`);
            }
            else{
                
                for(bookmakerField in req.body){

                    if(['bonus','rating','join','review'].includes(bookmakerField)){
                        
                        if(bookmakerData[bookmakerField]!==req.body[bookmakerField]){ //add only if there is diff
                            console.log(bookmakerField);
                            bookmakerJson[bookmakerField] = req.body[bookmakerField];
                            bookmakerData[bookmakerField] = req.body[bookmakerField];
                        }
                        
                    }

                }
                console.log(bookmakerJson);
                console.log(Object.keys(bookmakerJson).length);
                if(Object.keys(bookmakerJson).length>0){ //update only if there is diff
                  
                    await db.collection('bookmakers').doc(docId)
                            .update(bookmakerJson);
                }
                else if(Object.keys(bookmakerJson).length===0 ){

                    // throw new Error(`There were no new changes.`);
                }
            }

            return res.status(200).send(bookmakerData);
        }
        catch(e) {
            console.log(e);
            return res.status(400).send(e.message);
        }

    })()
})






app.get('/images/:typeId',async(req,res)=>{
    try{
        let query = db.collection('images');

        query = query.where('type','==',req.params.typeId);
            // for (const key in req.query){
            //     query = query.where(key,'==',req.params[key]);
            // }    
            let list = []
            await query.get()
                .then(querySnapshot => {
                    querySnapshot.docs.forEach(t=>{
                        console.log(t.data());
                        list.push(t.data())
                    })
                    return list;
                })
            return res.send(list);
    }
    catch(e){
        console.log(e);
        return res.status(500).send(e);
    }
})






app.put('/images/:typeId/:imageId',(req, res) => {

    (async () => {
        try {
            let docId = req.params.imageId;
            let image = await db.collection('images').doc(docId).get();
            const imagesData = image.data();
            if(imagesData !== undefined){
                delete imagesData.image;
                delete imagesData.type;
                if(!deepEqual(bookmakerData,req.body)){
                    return res.status(409).send({"message":`Match with matchId:${docId} already present.`});
                }
                else{
                    imagesData.image = req.params.imageId;
                    imagesData.type = req.params.typeId;
                    return res.status(200).send(imagesData);
                }
                // throw new Error(`Match with matchId:"${docId}" not found.`);
                
            }
            let doc = {
                type:req.params.typeId,
                image:req.params.imageId
            }
            for(field in req.body){
                doc[field] = req.body[field];
            }
            await db.collection('images').doc(docId).create(doc)
            return res.status(200).send(doc);
        }
        catch(e) {
            console.log(e);
            return res.status(400).send({"message":e.message});
        }
    })();

});



app.patch('/images/typeId/:typeId/imageId/:imageId',(req, res) => {
    (async () => {
        try{
            let docId = req.params.typeId;
            let images = await db.collection('images').doc(docId).get();
            const imagesData = images.data();
            let imagesJson = {}
            if(imagesData===undefined){
                throw new Error(`Bookmaker with bookmakerId:"${docId}" not found.`);
            }
            else{
                
                for(bookmakerField in req.body){

                    if(['bonus','rating','join','review'].includes(bookmakerField)){
                        
                        if(bookmakerData[bookmakerField]!==req.body[bookmakerField]){ //add only if there is diff
                            console.log(bookmakerField);
                            bookmakerJson[bookmakerField] = req.body[bookmakerField];
                            bookmakerData[bookmakerField] = req.body[bookmakerField];
                        }
                        
                    }

                }
                console.log(bookmakerJson);
                console.log(Object.keys(bookmakerJson).length);
                if(Object.keys(bookmakerJson).length>0){ //update only if there is diff
                  
                    await db.collection('bookmakers').doc(docId)
                            .update(bookmakerJson);
                }
                else if(Object.keys(bookmakerJson).length===0 ){

                    // throw new Error(`There were no new changes.`);
                }
            }

            return res.status(200).send(bookmakerData);
        }
        catch(e) {
            console.log(e);
            return res.status(400).send(e.message);
        }

    })()
})



exports.uploadFile = functions.https.onRequest((req, res) => {
//   return cors(req, res, () => {
        console.log('hii');
      if (req.method !== "POST") {
        return res.status(500).send("not allowed");
      }
      var busboy = new Busboy({ headers: req.headers});
      let uploadData = null;
  
      busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
          
        const filepath = path.join(os.tmpdir(),filename);
        console.log(filename);
        console.log(filepath);
        uploadData = { file: filepath, type: mimetype };
        file.pipe(fs.createWriteStream(filepath));
      });
  
      busboy.on("finish", () => {
        //   console.log( firebase
        //     .storage()
        //     .ref()
        //     .child('s3.jpeg'));
        //     console.log('k');
        // const bucket = gcs.bucket("ravi-e8d9a.appspot.com");
        // bucket
        //   .upload(uploadData.file, {
        //     uploadType: "media",
        //     metadata: {
        //       metadata: {
        //         contentType: uploadData.type
        //       }
        //     }
        //   })
        var storage = firebase.storage();
        var storageRef = firebase.storage().ref();
        firebase.storage().ref().put(file)
    .then(snapshot => {
        return res.status(200).send({ message: "It worked!"
            });
        // console.log('Uploaded.');
    })
        //   .then(() => {
        //     return res.status(200).send({
        //       message: "It worked!"
        //     });
        //   })
          .catch(err => {
            return res.status(500).send({
              error: err
            });
          });
      });
      busboy.end(req.rawBody);
      return res.status(200).send({
        message: "It has worked!","body": req.body
      });

//    });
//    return res.send("File uploaded successfully");
  });






app.put('/test',(req, res) => {

    (async () => {
        try {
            var localDate = new moment().format('LLL');
var utcFormat = moment(localDate,'YYYY-MM-DD HH:mm:ssZ').utc().format('YYYY-MM-DD HH:mm:ssZ');
var localFormat = moment.utc(utcFormat, 'YYYY-MM-DD HH:mm:ssZ').local().format('MM/DD/YYYY hh:m');
var x = "2017-07-10 18:30:00";
var y = "2017-07-10T18:35:00.000Z";
var z = "2017-07-10T18:45:00.000Z";
console.log(x);
console.log(moment(moment.utc('2016-05-20 09:57:00')).local().format('YYYY-MM-DD HH:mm:ss'));
console.log( moment.utc(x).tz(Intl.DateTimeFormat().resolvedOptions().timeZone).format('DD/MM/YYYY HH:mm:ss') );
console.log( moment.utc(y).tz( 'Asia/Calcutta').format('DD/MM/YYYY HH:mm:ss') );
console.log( moment.utc(z).tz( 'Asia/Calcutta').format('DD/MM/YYYY HH:mm:ss') );
            return res.status(200).send({localDate,utcFormat,localFormat});
        }
        catch(e) {
            console.log(e);
            return res.status(400).send(e.message);
        }
    })();

});
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
// Body Parser middleware
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());
app.use(bodyParser({uploadDir:'./public/product_images', keepExtensions: true }));
app.use(methodOverride()); 

app.post('/upload-avatar', async (req, res) => {
    console.log(req);
    console.log(req.file);
    console.log(req.files);
    console.log(req.files.image);

    try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            let avatar = req.files.avatar;
            
            //Use the mv() method to place the file in upload directory (i.e. "uploads")
            avatar.mv('./uploads/' + avatar.name);

            //send response
            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: avatar.name,
                    mimetype: avatar.mimetype,
                    size: avatar.size
                }
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
});


exports.app = functions.https.onRequest(app);
