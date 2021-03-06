# gibberish-detector.js
Gibberish Classification Algorithm in JavaScript

This library is inspired by @[ProgramFOX](https://github.com/ProgramFOX)'s [GibberishClassifier.NET](https://github.com/ProgramFOX/GibberishClassifier.NET).

Check an example [here](https://gtomitsuka.github.io/gibberish-detector.js).

## Quick-start

### With Node.js

First, run `npm install gibberish-detector`.
For using the module, run:

``` javascript
var gibberish = require('gibberish-detector');

gibberish.detect('This sentence is totally valid.'); //<- returns 1
gibberish.detect('euzbfdhuifdgiuhdsiudvbdjibgdfijbfdsiuddsfhjibfsdifdhbfd'); //<- returns 70.3127178591856
```

### With browser JavaScript

Add the following script to your HTML: `<script src="gibberish.min.js"></script>`, or `<script src="//gtomitsuka.github.io/gibberish-detector.js/gibberish.min.js"></script>`

``` javascript
gibberish.detect('This sentence is totally valid.'); //<- returns 1
gibberish.detect('euzbfdhuifdgiuhdsiudvbdjibgdfijbfdsiuddsfhjibfsdifdhbfd'); //<- returns 70.3127178591856
```

# Documentation

# #detect(string)
Returns a float between 1 and 100 with the likelihood the given string is gibberish.
