import express from "express"
const app = express()

type Payload = {
  name: string
  age: number
  enabled: boolean
}
 
app.get("/", function (req, res) {
  const foo: Payload = {
    name: "Foo",
    age: 666,
    enabled: true
  }
  
  res.send(foo)
})
 
app.listen(3000)