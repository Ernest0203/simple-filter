const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  name: { type: String, required: true },
  country: { type: String, required: true },
  date: { type: Date, default: Date.now },
// }, {
//   toJSON: { virtuals: true },
//   }
})

Users = mongoose.model('users', UserSchema);

// Items.schema
// .virtual('formattedDate')
// .get(function () {
//   return formatDate(this.date);
// });

// function formatDate(date) {
//   let day = date.getDate();
//   if (day < 10) day = '0' + day;

//   let month = date.getMonth() + 1;
//   if (month < 10) month = '0' + month;

//   let year = date.getFullYear() % 100;
//   if (year < 10) year = '0' + year;

//   let hour = date.getHours();
//   let minutes = date.getMinutes();

//   return `${day}.${month}.${year} ${hour}:${minutes}`;
// }

module.exports = Users; 