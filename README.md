# NodeJS-LoL-RuneAuth
Enables rune authentication for League

# Installing
Simply download the rune-auth folder within node_modules
and drag it into your Node_modules folder within your project directory 

# Configurating
Within the rune-auth folder, open index.js and replace var 
apiKey = ""; with your API key and
var url = "https://na.api.pvp.net/api/lol/na/"; with your api page based upon the server you would like to work with.

# Methods
Generates the rune key for the user, and outputs the code in the callback.
rune.Generate('USER', function(CODE) {
         
});

Checks to see if the user which you've ALREADY generated a code for has the code on their rune page
or not, returns a bool depending on which the user is verified or not. *NOTE* Users MUST be generated already, otherwise will crash.

rune.Check('USER', function(VERIFIED) {

});
