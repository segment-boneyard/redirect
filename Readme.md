# redirect

  Simple redirects for express.

## Installation

    $ npm install segmentio/redirect

## Example

```js
var express = require('express');
var redirect = require('redirect');

express()
  .get('/login', login)
  .get('/signin', redirect('/login'))
  .listen(8000);
```

## API

### .redirect(path, options)
  
  Generate a route function that redirects to `path`. The (optional) `options` default to:

```js
{
   status: 301
}
```

## License

```
WWWWWW||WWWWWW
 W W W||W W W
      ||
    ( OO )__________
     /  |           \
    /o o|    MIT     \
    \___/||_||__||_|| *
         || ||  || ||
        _||_|| _||_||
       (__|__|(__|__|
```