const express = require('express');
const router = express.Router();

const Users = require('../models/users.js');

function parseArgs(args) {
  let overrides = {};
  if (args.multifilters) {
    const filterQuery = args.multifilters.map((arg) => {
      const parsedArg = JSON.parse(arg);
      for (key in parsedArg) {
        if (parsedArg[key].length === 0) return {};
        parsedArg[key] = new RegExp(parsedArg[key], 'i')
        return parsedArg;
      }
    });
    overrides = { $and: filterQuery }
  } else {
    overrides = { ...args }
  }
  return overrides;
}

router.get('/', (req, res) => {
  const query = parseArgs(req.query);
  
  Users.find(query)
    .sort({ date: -1 })
    .then(users => res.json(users))
    .catch(err => res.send('error: ' + err))
})

module.exports = router;