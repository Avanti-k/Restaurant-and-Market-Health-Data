const database = require('../services/database.js');
 
const baseQuery = 
 `
  `; //Not required inn this case
 
async function find(context) {
  let query = baseQuery;
  const binds = {};
 
  if (context.id) {
    binds.emp_id = context.id;
 
    query = ` 
`;
	
  }
 
  const result = await database.simpleExecute(query, binds);
 
  return result.rows;
}
 
module.exports.find = find;