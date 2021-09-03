const express = require('express');
const ININITAL_HOBBIES = ['running', 'reading', 'walking', 'gardening'];

const router = new express.Router();

/** GETs a list of all hobbies :
 * {
  "hobbies": 
  [
    "running",
    "reading",
    "walking",
    "gardening"
  ]
}
*/
router.get('/', async (req, res) => res.json({ hobbies: ININITAL_HOBBIES }));

/** POSTs new hobby to prepend to hobbies 
 *  POST 
	{"hobby":"swimming"}  ------>>>> 
  {
    "hobbies": 
    [
    "swimming",
    "running",
    "reading",
    "walking",
    "gardening"
  ]
}
*/
router.post('/', async (req, res) => {
  const { hobby } = req.body;
  if (!hobby) throw new Error('Hobby must not be empty');
  ININITAL_HOBBIES.unshift(hobby);
  return res.json({ hobbies: ININITAL_HOBBIES });
});

module.exports = router;
