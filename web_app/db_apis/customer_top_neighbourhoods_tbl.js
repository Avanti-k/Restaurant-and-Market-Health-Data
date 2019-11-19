const database = require('../services/database.js');

const baseQuery =
 `
  `;

async function find(context) {
  let query = baseQuery;

    query = `Select * from Address
where address_id in
(
select address_id from
(
    Select DISTINCT a.address_id,count(*) as count
    from Facility f, address a
    where f.address_id = a.address_id
    group by a.address_id
    ORDER BY count DESC
    FETCH FIRST 3 rows only
) c
)`;

  const result = await database.simpleExecute(query);

  return result.rows;
}

module.exports.find = find;
