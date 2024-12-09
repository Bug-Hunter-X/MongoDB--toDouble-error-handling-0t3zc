```javascript
const query = { "$expr": { "$gt": [ { "$toDouble": "$field" }, 10 ] } };

//This query will throw an error if the field is not a number
//Error: cannot convert String to double
```