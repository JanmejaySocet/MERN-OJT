<!-- install node -->
npm install/i -g create-react-app



<!-- create app -->
create-react-app App-name




<!-- mongodb shell cmd -->
db.collcmdOJT.find({"lname":"patel"})


use dbname
show collections
db.createCollection("collname")


db.collcmdOJT.find({})
db.collcmdOJT.find({},{"name":1,"lname":1})
db.collcmdOJT.find({},{"address":0})



db.testOJT.insertOne({"name":"maharshi", "surname": "Patel"})


db.collcmdOJT.updateOne({"lname":"patel"},{$set:{"address":"naroda"}})
db.collcmdOJT.updateOne({"lname":"shah"},{$set:{"name":"heet","lname":"shah"}},{upsert:true})
db.collcmdOJT.updateMany({},{$inc:{"age":19}})

db.collcmdOJT.insertOne({"name":"janmejay","lname":"pandya"})


db.collcmdOJT.find({age:{$eq:19}})
db.collcmdOJT.find({age:{$ne:19}})
db.collcmdOJT.find({age:{$gt:19}})
db.collcmdOJT.find({age:{$gte:19}})
db.collcmdOJT.find({age:{$lt:19}})
db.collcmdOJT.find({age:{$lte:19}})
db.collcmdOJT.find({age:{$in:[20,25,27]}})


^ starts from 
i = ignore case
db.collcmdOJT.find({name:{$in:[/^ja/i,/^m/]}}) 
db.collcmdOJT.find({name:{$in:[/g$/i,/m$/]}}) 



db.collcmdOJT.find({}).sort({"name":-1})
db.collcmdOJT.find({}).sort({"name":1})
db.collcmdOJT.find({}).limit(2)

db.collcmdOJT.deleteOne({"lname":"shah"})

db.collcmdOJT.find({$and:[{age:{$ne:22}},{age:{$exists:true}}]})


db.createCollection("testOJT")


db.testOJT.aggregate([{ $match: {$or: [{ score: { $gt: 70, $lt: 90}}, { views:{$gte:1000}}]}},{$group:{_id:null, count:{$sum:1}}}]);

db.orders.aggregate([
{
$lookup:
{
from: "inventory",
localField: "item",
foreignField: "sku",
as: "inventory_docs"
}}])