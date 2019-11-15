const database = require('../services/database.js');
 
const baseQuery = 
 `
  `;
 
async function find(context) {
  let query = baseQuery;
  const binds = {};
 
  //if (context.id) {
    //binds.o_id = context.id;
 
    query = `SELECT * from Facility FETCH first 3 rows only 
       
`;
	
  //}
 
  const result = await database.simpleExecute(query);
  //const result = await database.simpleExecute(query, binds);

  return result.rows;
  
  //return "{a:1}";
}
 
module.exports.find = find;