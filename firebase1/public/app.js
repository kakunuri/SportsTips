document.addEventListener("DOMContentLoaded", event => {
    const app = firebase.app();
    console.log(app)

    const db = firebase.firestore();

    const myPost = db.collection('posts').doc('firstpost');

    const postRef = db.collection('posts');

    const query = postRef.where('title', '>=', '')


    // document.write('kjnjhjh')

    myPost.get()
        .then( doc => {
            const data = doc.data();
            document.write(data.title  )
            document.write(data.createdAt  )
        })

//     myPost.onSnapshot(doc => {
//         const data = doc.data();
//         // document.write('kjnjhjh')
//         document.querySelector('#title').innerHTML = data.title
//     })

//     query.get()
//     .then( coll => {
//         coll.forEach(doc => {
//             data = doc.data();
//             // document.write(data.title)
//             // document.querySelector('#title').innerHTML = data.title
//             document.write(data.title)
//         })
//     })
// });

// function updatePost(e){

//     const db = firebase.firestore();

//     const myPost = db.collection('posts').doc('firstpost');

//     myPost.update({title: e.target.value})

// }

function googleLogin(){
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
    .then(result => {
        const user = result.user;
        document.write(`Hello ${user.displayName}`);
    })
}