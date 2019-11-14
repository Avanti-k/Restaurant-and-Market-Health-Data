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

router.route('/owner_attr/:o_id?')
  .get(owner_attr.get);
  

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