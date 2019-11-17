const database = require('../services/database.js');
 
const baseQuery = 
 `
  `;
 
async function find(context) {
  let query = baseQuery;
  
    query = `SELECT f.F_ID as Facility_ID, f.F_NAME as Name
from Facility f, Inspection i
where i.f_id = f.f_id and p_category = 'FOOD MKT RETAIL ' and p_seats = '1-1,999 SF' and p_risk_type = ' LOW RISK'
ORDER BY ins_score DESC FETCH FIRST 3 rows only`;
	
  const result = await database.simpleExecute(query);

  return result.rows;
}
 
module.exports.find = find;