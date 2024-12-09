```javascript
const query = {"$expr": {"$and": [ {"$eq": [ {"$type": "$field"}, 1]}, {"$gt": [ {"$toDouble": "$field"}, 10 ]}]}}

//This query first checks if the field is a number using $type operator. 
//It only converts to double if it is a number, avoiding the error.
```