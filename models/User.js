const  mongoose  = require('mongoose')

const user = new mongoose.Schema({
    uid: String,
    email: String,
    displayName: String,
    username: String,
    photoURL: String,
    provider: String,
    isEmailVerified: Boolean,
    createdAt: Date,
    lastLoginAt: Date,
    customData: {
      preferences: String,
      streak: Number,
      goals: [String],
    }
})

module.exports = mongoose.model("user", user)

// {
//     "uid": "5d3jbcumczM4HRlcFBTFwoVTdXg1",
//     "email": "kureddy5885@gmail.com",
//     "displayName": "REDDY PRO",
//     "username": "REDDYPRO",
//     "photoURL": "https://lh3.googleusercontent.com/a/ACg8ocJ7sJ97aPx7uEnWfbmx8iCKG1Bd3OoTftcWulZCvRq3NDsJPyi7=s96-c",
//     "provider": "google",
//     "isEmailVerified": true,
//     "createdAt": "2024-10-04T06:12:26.000Z",
//     "lastLoginAt": "2024-10-11T17:33:56.000Z",
//     "customData": {}
// }

// {
//     "uid": "bLHpVwAF6ZUgyj6tYB3bBHOipR73",
//     "email": "temp1@gmail.com",
//     "displayName": "reddy_pro",
//     "username": "reddy_pro",
//     "photoURL": "https://picsum.photos/200",
//     "provider": "email",
//     "isEmailVerified": false,
//     "createdAt": "2024-10-11T17:37:45.000Z",
//     "lastLoginAt": "2024-10-11T17:37:45.000Z",
//     "customData": {}
// }