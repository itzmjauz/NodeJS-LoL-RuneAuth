# NodeJS-LoL-RuneAuth
Enables rune authentication for League

# Installing
Simply run npm install

# Configurating
Edit  the apiKey and url variables in index.js
```javascript
apiKey = ""; //Your API Key
url = "https://na.api.pvp.net/api/lol/na/"; //The URL for the API of the Server you want to check on
``` 

# Methods
Generates the rune key for the user, and outputs the code in the callback.
```javascript
rune.Generate('USER', function(CODE) {
         
});
```

Checks to see if the user which you've ALREADY generated a code for has the code on their rune page
or not, returns a bool depending on which the user is verified or not. *NOTE* Users MUST be generated already, otherwise will crash.
```javascript
rune.Check('USER', function(VERIFIED) {

});
```
