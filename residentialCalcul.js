const { pricing } = require('./data.js');

const residentialEvelatorCalcul = (numberofApts, numberofFloors) => {
   return Math.ceil(numberofApts / numberofFloors / 6) * Math.ceil(numberofFloors / 20);
}

const calculateResidentialPricing = () => {
    return AGENTS_LIST.map(agent => {
      const agentPricing = pricingData[agent.level];
      if (!agentPricing) return null; // Ensure the level exists in pricingData
  
      const totalFee = agentPricing.price * agentPricing.fee;
      const totalPrice = agentPricing.price + totalFee;
  
      return {
        agentId: agent.id,
        agentName: agent.name,
        basePrice: agentPricing.price,
        fee: totalFee,
        total: totalPrice,
      };
    }).filter(pricing => pricing); // Removes null values if any agent has an invalid level
  };
  
  module.exports = {residentialEvelatorCalcul};