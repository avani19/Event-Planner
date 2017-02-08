// Accounts config
ServiceConfiguration.configurations.remove({
  service: "facebook"
});

// chicago-parties.meteor.com
// ServiceConfiguration.configurations.insert({
//   service: "github",
//   clientId: "5c9b7e93a5830dd3634a",
//   secret: "1fd43cfe0e0311e726e239a7a1bec03f8c3c2c89"
// });

// localhost:3000
// ServiceConfiguration.configurations.insert({
//   service: "github",
//   clientId: "83f1c796a14e1f6ea61a",
//   secret: "1c59890a41679554964713050e237ee89332731b"
// });
ServiceConfiguration.configurations.insert({
  service: "facebook",
  clientId: "381632832211819",
  secret: "6c60b10294c7fabc9478ebdf089acc04"
});
Accounts.onCreateUser(function(options, user){
  var user = Meteor.users.findOne(userId);
  var accessToken = user.services.facebook.accessToken,
    result,
    profile;
	result = Meteor.http.get("https://api.facebook.com/user-id", {
    headers: {"User-Agent": "Meteor/1.0"},
    params: {
      access_token: accessToken
    }
  });
  if (result.error) {
    throw error;
  }
  profile = _.pick(result.data,
    "login",
    "name",
    "avatar_url",
    "html_url");
  user.profile = profile;
  return user;
});
