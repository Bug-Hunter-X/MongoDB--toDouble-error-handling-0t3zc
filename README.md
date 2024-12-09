# MongoDB $toDouble Error Handling
This repository demonstrates a common error encountered when using the `$toDouble` operator in MongoDB queries. The error occurs when attempting to convert a non-numeric string field to a double using `$toDouble`. The solution involves adding an additional check to ensure that only valid numeric strings are converted.

## Problem
The following MongoDB query attempts to filter documents where the `field` is greater than 10. However, if the `field` contains non-numeric values, the `$toDouble` operator will throw an error.
```javascript
const query = { "$expr": { "$gt": [ { "$toDouble": "$field" }, 10 ] } };
```

## Solution
The solution is to add a check to ensure that the field is a valid number before attempting to convert it to a double. This can be achieved using the `$type` operator.
```javascript
const query = {"$expr": {"$and": [ {"$eq": [ {"$type": "$field"}, 1]}, {"$gt": [ {"$toDouble": "$field"}, 10 ]}]}}
```