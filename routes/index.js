var express = require('express');
const calcNPV = require('../calc.js');
var router = express.Router();
require('../calc.js')

const factorial = (x) => {

  // if number is 0
  if (x == 0) {
      return 1;
  }

  // if number is positive
  else {
      return x * factorial(x - 1);
  }
}
const combination = (n,r)=>{
  const result = factorial(n)/(factorial(n-r)*factorial(r))
  return result
}
const binom = (n,r,p)=>{
  const q = 1-p
  console.log(q);
  const result = combination(n,r)*Math.pow(p,r)*Math.pow(q,n-r)
  return result

}
const geometric = (y,p)=>{
  const q = 1-p
  console.log(q);
  const result = Math.pow(q,y-1)*p
  return result

}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Uskeche-Calculator' });
});
router.get('/binom', function(req, res, next) {

  res.render('binom', { title: 0 });
});
router.post('/binom', function(req, res, next) {
  const {n,r,p} = req.body
  const result = binom(n,r,p);
  
  res.render('binom', { title: result });
});
router.get('/geometric', function(req, res, next) {
  res.render('geometric', { title: 0 });
});
router.post('/geometric', function(req, res, next) {
  const {y,p} = req.body
  const result = geometric(y,p);
  
  res.render('geometric', { title: result });
});
router.get('/npv', function(req, res, next) {
  res.render('npv', { title: 0 });
});
router.post('/npv', function(req, res, next) {
  let {rate,lastPrice,flowSize,flowPrice} = req.body
  const annualFlowPrice = flowPrice*12
  rate = parseFloat(rate)
  lastPrice = parseFloat(lastPrice)
  flowSize = parseInt(flowSize)
  flowPrice = parseFloat(flowPrice)

  const result = calcNPV(rate,lastPrice,flowSize,annualFlowPrice);
  
  res.render('npv', { title: result.toLocaleString() });
});
module.exports = router;
