# Unchained UI

## Storage

Local and session storage with JSON support

### Usage

```js
import { localStorage, sessionStorage, JSONStorage } from 'uc-storage'

sessionStorage.setItem('name', 'value')
const storage = JSONStorage(localStorage)

storage.set('data', [ 1, 2, 3 ])
const data = storage.get('data')
console.log(Array.isArray(data));
// true

```

### Storage

This module exports the safe localStorage, sessionStorage with API identical to browser's.

### JSONStorage(storage)

Wraps the `storage` object to save and parse JSON data inside the storage

#### set(key, value)

Sets the value

#### get(key)

Returns the value

#### remove(key)

Removes the key from the storage

License MIT

© velocityzen
