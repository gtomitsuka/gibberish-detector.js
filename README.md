# gibberish-detector.js
Gibberish Classification Algorithm in JavaScript

This library is a port from @[ProgramFOX](https://github.com/ProgramFOX)'s [GibberishClassifier.NET](https://github.com/ProgramFOX/GibberishClassifier.NET).

The algorithm's description can be found [here](http://www.codeproject.com/Articles/894766/Gibberish-Classification-Algorithm-and-Implementat).

Check an example [here](https://gtomitsuka.github.io/gibberish-detector.js).

***NOTE:*** This module is in development. It also doesn't work with too short sentences, so please don't use it for chat messages.

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

Add the following script to your HTML: `<script src="gibberish.min.js"></script>`

``` javascript
gibberish.detect('This sentence is totally valid.'); //<- returns 1
gibberish.detect('euzbfdhuifdgiuhdsiudvbdjibgdfijbfdsiuddsfhjibfsdifdhbfd'); //<- returns 70.3127178591856
```

# Documentation

# #detect(string)
Returns a float between 1 and 100 that shows the porcentage that the string is gibberish.
