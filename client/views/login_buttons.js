// Template.loggedin.events({
//   'click #logout': function(e, tmpl) {
//     Meteor.logout(function(err){
//       if (err) {
//         // handle error
//       } else {
//         // nothing
//       }
//     });
//   }
// }); 

// Template.loggedout.events({
//   'click #login': function(e, tmpl) {
//     // Meteor.loginWithGithub({
//     Meteor.loginWithFaceb({
//     }, function(err){
//       if (err) {
//         console.log(err)
//       } else {
//         // show an alert
//       }
//     })
//   }
// });
Template.login.events({
    'click #facebook-login': function(event) {
        Meteor.loginWithFacebook({}, function(err){
            if (err) {
                throw new Meteor.Error("Facebook login failed");
            }
        });
    },
 
    'click #logout': function(event) {
        Meteor.logout(function(err){
            if (err) {
                throw new Meteor.Error("Logout failed");
            }
        })
    }
});