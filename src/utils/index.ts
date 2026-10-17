import { TzolkinEngine } from './tzolkin-engine';

export { TzolkinEngine };

// Test cases
const engine = new TzolkinEngine();

console.log('Current Kin:', engine.getCurrentKin(new Date()));
console.log('Kin for 1960-08-13:', engine.getKinForDate(new Date('1960-08-13'), '584283'));