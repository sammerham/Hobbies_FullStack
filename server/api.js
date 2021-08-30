const express = require('express');
// const { v4: uuidv4 } = require('uuid');
const ININITAL_HOBBIES = ['running', 'reading', 'walking', 'gardening'];
// const ININITAL_HOBBIES = [
//   { hobby: 'running', id: uuidv4() },
//   { hobby: 'reading', id: uuidv4() },
//   { hobby: 'walking', id: uuidv4() },
//   { hobby: 'gardening', id: uuidv4() },
// ];
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
  // const { hobby, id } = req.body;
  if (!hobby) throw new Error('Hobby must not be empty');
  // ININITAL_HOBBIES.unshift({ hobby, id });
  ININITAL_HOBBIES.unshift(hobby);
  return res.json({ hobbies: ININITAL_HOBBIES });
});

module.exports = router;
