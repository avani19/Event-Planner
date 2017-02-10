// Accounts config
ServiceConfiguration.configurations.remove({
  service: "github"
});

// localhost:3000
ServiceConfiguration.configurations.insert({
  service: "github",
  clientId: "26fe7471b2ea84b9129a",
  secret: "ae2691cf1119729068ff5548758ab929a46e8157"
});

Accounts.onCreateUser(function(options, user){
  var accessToken = user.services.github.accessToken,
    result,
    profile;
  result = Meteor.http.get("https://api.github.com/user", {
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