// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(bodyParser.json());
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static('public'));

// app.post("/ipn", async (req, res) => {
//   console.log("It works!");
//   res.status(200).send("OK");
//   res.end();

//   const body = req.body || {};

//   try {
//     const transactionType = body.txn_type;

//     switch (transactionType) {
//       case "web_accept":
//       case "subscr_payment":
//         console.log(body);
//         break;
//       default:
//         console.log("Unhandled transaction type: ", transactionType);
//     }
//   } catch (e) {
//     console.error(e);
//   }
// });

// app.get('/', (req, res) => {
//     res.render(__dirname + '/index.html');
// })

// app.listen(3000, (err) => {
//   console.log("Listening on port 3000");
//   if (err) console.log(err);
// });
