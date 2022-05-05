const Finance = require('financejs')
const finance = new Finance()
/////////////////
const rate = 15
const lastPrice = 3000000
const flowSize = 10;
const flowPrice = 67000
/* -------------------------------- */
const calcNPV = (rate,lastPrice,flowSize,flowPrice)=>{
    const data=[]
    for (let i = 1; i <= flowSize; i++) {
            
            if (i==flowSize) {
                data.push(flowPrice+lastPrice)
            }
            else{
                data.push(flowPrice)
            }
            
    }
    

    const result = finance.NPV(rate,0,...data)
    return result;
} 

const res = calcNPV(rate,lastPrice,flowSize,flowPrice)

module.exports = calcNPV;