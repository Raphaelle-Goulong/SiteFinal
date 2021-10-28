var mongoose = require("mongoose")

var options = {
  connectTimeoutMS: 5000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
mongoose.connect(
  "mongodb+srv://SamTente:<Raphaelle22.>@cluster0.7rk3h.mongodb.net/SamTente?retryWrites=true&w=majority",
  options,
  function (err) {
    console.log(err)
  }
)
