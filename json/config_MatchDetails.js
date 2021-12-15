// Configure and rename to "config.js"
// Create an empty file called "sentry" in same directory
// Have steamguard code = "" to start
// Fill in the steamguard code after receiving it
// After successfully logging in, return steamguard code to ""
var config = {};

config.steam_name = "displayname";
config.steam_user = "username";
config.steam_pass = "password";
config.steam_guard_code = "";

module.exports = config;
