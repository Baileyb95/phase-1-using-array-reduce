const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
// Code your solution here
function reducer(totalBatteries, battery) {
  return totalBatteries + battery;

}
function totalBatteries(batteryBatches) {
    totalBatteries = batteryBatches.reduce(reducer, 0)
    return batteryBatches.reduce(reducer, 0);
    }
const total = totalBatteries(batteryBatches)