const functions = require('firebase-functions');
const express = require('express');
const app = express();

const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);

// var config = {
//     apiKey:"AIzaSyBxuuuWKCaVkFSpiuk-vYpZNymN10EyzWE",
//     authDomain:"ravi-e8d9a.firebaseapp.com",
//     databaseUrl:"https://ravi-e8d9a.firebaseio.com"
// }
// admin.initializeApp(config);


const db = admin.firestore()
const cors = require('cors')({origin: true});
app.use(cors);
var deepEqual = require('deep-equal');
const moment = require('moment-timezone');
const { check, validationResult } = require('express-validator');

//File Upload
const {Storage} = require('@google-cloud/storage');
const gcs = new Storage({
    projectId: "ravi-e8d9a",
    keyFilename: "ravi-e8d9a-firebase-adminsdk-hb9yi-0ab1e84dc7.json"

});
var bucketName = 'gs://ravi-e8d9a.appspot.com'
var bucket = gcs.bucket(bucketName);
const Busboy = require('busboy');
const os = require("os");
const fs = require('fs');
const path = require("path");


// exports.updateFields = functions.firestore.document('product/{productId}').onUpdate((change, event) =>{
//     const docId = event.params.productId;
//     const productRef = admin.firestore().collection('product').doc(docId);
   
//     const after = change.after.data();
//     const createdData = after.name;
//     console.log(createdData);
//     return productRef.update({message:`hii  ${createdData}  c x`});
    
// })


exports.updateFields = functions.firestore.document('bettingTips/{matchId}').onUpdate(async(change, event) =>{
    const docId = event.params.matchId;
    const matchData = change.after.data();
    let profitPercentage=0;
    let success=0,failure=0,pending=0;
    for(tip in matchData.tips){
        profitPercentage += ((matchData.tips[tip].odds)-1) * (matchData.tips[tip].result==='success'?1:(matchData.tips[tip].result==='failure'?-1:0))*100;
        if(matchData.tips[tip].result==='success') success++;
        if(matchData.tips[tip].result==='failure') failure++;
        if(matchData.tips[tip].result==='pending') pending++;
    }
    let winPercentage = ((success+failure)!==0)?(success*100)/(success+failure):0;
    console.log(winPercentage,success,failure);
    statsData = {
        "totalTips" : (success+failure+pending),
        "successfulTips" : success,
        "failure" : failure,
        "pending"  : pending,
        "profitPercentage" : profitPercentage,
        "win" : winPercentage,
        "date" : matchData.startDateTime
    }
    const statsRef = admin.firestore().collection('stats').doc(docId);
    const matchStats1 = await statsRef.get()
    const matchStats = matchStats1.data();
    if(matchStats === undefined){
        return statsRef.create(statsData)
    }
    else{
        return statsRef.update(statsData)

    }

    // return productRef.update({message:`hii  ${createdData}  c x`});
    
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


// exports.getMethod = functions.https.onRequest((req,res) => {
//     console.log(req.query.name)
//     var s ='';
//     for (const key in req.query){
//         console.log(req.query[key]) ;
//         console.log(req.query);
//         console.log(req.query.name);
//     }
    
//     res.send(req.query.name)
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
                        matchData['winPercentage']=((success+failure)!==0)?(success*100)/(success+failure):0;
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
                if(!deepEqual(imagesData,req.body)){
                    return res.status(409).send({"message":`Image with imageId:${docId} already present.`});
                }
                else{
                    imagesData.image = req.params.imageId;
                    imagesData.type = req.params.typeId;
                    return res.status(200).send(imagesData);
                }
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



app.patch('/images/typeId/:typeId/imageId/:imageId',(req, res) => {   // code is copy of bookmaker...needs to be edited. Patch api was not mentioned in the doc.
    (async () => {
        try{
            let docId = req.params.typeId;
            let images = await db.collection('images').doc(docId).get();
            const imagesData = images.data();
            let imagesJson = {}
            if(imagesData===undefined){
                throw new Error(`Image with ImageId:"${docId}" not found.`);
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




  app.post('/images/:typeId/:imageId/:size', async(req, res, next) => {
  
    var imageToBeUploaded = {};
    var imageFileName;
    var signedURL;
    
    //   console.log(req.params);
    //   console.log(req.params.imageId);
    //   console.log(req.params.size);
      
    //   console.log(imageFileName);
    const busboy = new Busboy({ headers: req.headers });

    busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {

      if (mimetype !== "image/jpeg" && mimetype !== "image/png") {
        return res.status(400).json({ error: "Wrong file type submitted" });
      }
      var imageExtension = filename.split(".")[filename.split(".").length - 1];
      imageFileName = req.params.imageId+"-"+req.params.size+"."+imageExtension;
      const filepath = path.join(os.tmpdir(), imageFileName);
      imageToBeUploaded = { filepath, mimetype };
      file.pipe(fs.createWriteStream(filepath));
      return imageExtension;
    });

    
    busboy.on("finish", () => {
        var destination = bucket.file(req.params.typeId+"/"+imageFileName);
        admin.storage().bucket()
        .upload(imageToBeUploaded.filepath, {
          destination:destination,
          resumable: false,
          metadata: {
            metadata: {
              contentType: imageToBeUploaded.mimetype
            },
          }
        })
        .then(() => {
            CONFIG = {                                                                      
                action: 'read',                                                               
                expires: '03-01-2500',                                                        
              };                                                                              
              signedURL = destination.getSignedUrl(CONFIG, (err,url) => {                                  
                if (err) {
                    console.error(err);
                    return err;
                  } else {
                    // console.log(url);
                    return url;
                  }                                                        
              }).get();      
              console.log(signedURL);
            // console.log(destination.getSignedUrl());
          // Append token to url
        //   const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${imageFileName}?alt=media&token=${generatedToken}`;
          return res.status(200).send(signedURL);//db.doc(`/users/${req.user.handle}`).update({ imageUrl });
        })
        .catch((err) => {
          console.error(err);
          return res.status(500).send({ error: "something went wrong" });
        });
    // var bucket = gcs.bucket('gs://ravi-e8d9a.appspot.com');
    // var destination = bucket.file('test/test.png');
    // var localFilename = 'chandan1.png';
    // bucket.upload(imageToBeUploaded.filepath, { public: true, destination: destination },function(err, file) {
    //   if (!err) {
    //     console.log(`${localFilename} is now in your bucket`);
    //   } else {
    //     console.log('Error uploading file: ' + err);
    //   }
    // });
    });
    busboy.end(req.rawBody);
    return res.status(200).send(signedURL); 

  })




app.put('/user/:userEmail',(req, res) => {

    (async () => {
        try {
            let docId = req.params.userEmail;
            let user = await db.collection('userInfo').doc(docId).get();
            const userData = user.data();
            if(userData !== undefined){
                console.log(userData);
                console.log(req.body);
                var loginCount = userData.metadata.loginCount;
                delete userData.metadata.loginCount
                if(!deepEqual(userData,req.body)){
                    console.log('not same')
                    if(!deepEqual(userData.metadata,req.body.metadata)){
                    req.body.metadata.loginCount = loginCount+1 ;
                    await db.collection('userInfo').doc(docId).update({'metadata':req.body.metadata});
                    return res.status(200).send(req.body);
                    }
                    else{
                        userData.metadata.loginCount = loginCount;
                        return res.status(200).send(userData);
                    }
                    // return res.status(409).send({"message":`User with userId:${docId} already present.`});
                }
                else{
                    console.log('same')
                    userData.metadata.loginCount = loginCount;
                    return res.status(200).send(userData);
                }
            }
            console.log('user undefined');
            let doc = {}
            for(field in req.body){
                doc[field] = req.body[field];
            }
            req.body.metadata.loginCount=1;
            await db.collection('userInfo').doc(docId).create(doc)
            return res.status(200).send(doc);
        }
        catch(e) {
            console.log(e);
            return res.status(400).send({"message":e.message});
        }
    })();

});

exports.app = functions.https.onRequest(app);
