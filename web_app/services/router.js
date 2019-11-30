const express = require('express');
const router = new express.Router();
const owners = require('../controllers/owners.js');
const avg_owner_score_graph = require('../controllers/avg_owner_score_graph.js');
const avg_owner_violation_graph = require('../controllers/avg_owner_violation_graph.js');
const avg_owner_violation = require('../controllers/avg_owner_violation.js');
const owner_critical_violation = require('../controllers/owner_critical_violation.js');
const owner_critical_violation_graph = require('../controllers/owner_critical_violation_graph.js'); 
const owner_rank = require('../controllers/owner_rank.js'); 
const owner_rank_graph = require('../controllers/owner_rank_graph.js'); 
const owner_attr = require('../controllers/owner_attr.js'); 
const owner_facility_list = require('../controllers/owner_facility_list.js'); 
const owner_total_inspections = require('../controllers/owner_total_inspections.js'); 
const owner_main_violation_graph = require('../controllers/owner_main_violation_graph.js'); 
const owner_main_avg_graph = require('../controllers/owner_main_avg_graph.js'); 
const owner_pie_violations = require('../controllers/owner_pie_violations.js'); 
const facility_score = require('../controllers/facility_score.js'); 
const facility_score_graph = require('../controllers/facility_score_graph.js'); 
const facility_rank = require('../controllers/facility_rank.js'); 
const facility_rank_graph = require('../controllers/facility_rank_graph.js');
const facility_total_violations_graph = require('../controllers/facility_total_violations_graph.js');
const facility_total_violations = require('../controllers/facility_total_violations.js');
const facility_critical_violation = require('../controllers/facility_critical_violation.js');
const facility_crt_violation = require('../controllers/facility_crt_violation.js');
const facility_violation_list = require('../controllers/facility_violation_list.js');
const facility_attr = require('../controllers/facility_attr.js');
const facility_total_inspections = require('../controllers/facility_total_inspections.js');
const facility_main_avg_graph = require('../controllers/facility_main_avg_graph.js'); 
const facility_main_violation_graph = require('../controllers/facility_main_violation_graph.js'); 
const facility_violation_frequency = require('../controllers/facility_violation_frequency.js'); 


const customer_top_restaurants = require('../controllers/customer_top_restaurants.js');
const customer_top_markets = require('../controllers/customer_top_markets.js');
const customer_top_neighbourhoods = require('../controllers/customer_top_neighbourhoods.js');

const customer_nb_details = require('../controllers/customer_nb_details.js');

router.route('/customer_top_restaurants')
	.get(customer_top_restaurants.get);

router.route('/customer_top_markets')
	.get(customer_top_markets.get);

router.route('/customer_top_neighbourhoods')
	.get(customer_top_neighbourhoods.get);

router.route('/customer_nb_details/:nb_id?')
	  .get(customer_nb_details.get);

router.route('/owner_attr/:o_id?')
  .get(owner_attr.get);

  
  router.route('/facility_violation_frequency/:f_id?')
  .get(facility_violation_frequency.get);
  
    router.route('/facility_main_violation_graph/:f_id?')
  .get(facility_main_violation_graph.get);
  
    router.route('/facility_main_avg_graph/:f_id?')
  .get(facility_main_avg_graph.get);
  
  
router.route('/facility_total_violations_graph/:f_id?')
  .get(facility_total_violations_graph.get);
  
  
    
  router.route('/facility_total_inspections/:f_id?')
  .get(facility_total_inspections.get);
  
  
  router.route('/facility_score_graph/:f_id?')
  .get(facility_score_graph.get);
  
      router.route('/facility_attr/:f_id?')
  .get(facility_attr.get);
  
    router.route('/facility_violation_list/:f_id?')
  .get(facility_violation_list.get);
  
      router.route('/facility_crt_violation/:f_id?')
  .get(facility_crt_violation.get);
  
  router.route('/facility_critical_violation/:f_id?')
  .get(facility_critical_violation.get);
  
      router.route('/facility_total_violations/:f_id?')
  .get(facility_total_violations.get);
  
    router.route('/facility_total_violations/:f_id?')
  .get(facility_total_violations.get);
  
    router.route('/facility_rank_graph/:f_id?')
  .get(facility_rank_graph.get);
  
  router.route('/facility_rank/:f_id?')
  .get(facility_rank.get);
  
router.route('/facility_score/:f_id?')
  .get(facility_score.get);


router.route('/owners/:o_id?')
  .get(owners.get);

router.route('/avg_owner_score_graph/:o_id?')
  .get(avg_owner_score_graph.get);

router.route('/avg_owner_violation/:o_id?')
  .get(avg_owner_violation.get);

router.route('/avg_owner_violation_graph/:o_id?')
  .get(avg_owner_violation_graph.get);

router.route('/owner_critical_violation/:o_id?')
  .get(owner_critical_violation.get);

router.route('/owner_critical_violation_graph/:o_id?')
  .get(owner_critical_violation_graph.get);

router.route('/owner_rank/:o_id?')
  .get(owner_rank.get);

router.route('/owner_rank_graph/:o_id?')
  .get(owner_rank_graph.get);

router.route('/owner_facility_list/:o_id?')
  .get(owner_facility_list.get);

router.route('/owner_total_inspections/:o_id?')
  .get(owner_total_inspections.get);

router.route('/owner_main_avg_graph/:o_id?')
  .get(owner_main_avg_graph.get);

router.route('/owner_main_violation_graph/:o_id?')
  .get(owner_main_violation_graph.get);

  router.route('/owner_pie_violations/:o_id?')
  .get(owner_pie_violations.get);

 
module.exports = router;
