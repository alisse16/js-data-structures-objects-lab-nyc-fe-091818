// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(driver, key, value) {
  const driverCopy = {...driver}
  driverCopy.address = "11 Broadway"
  return driverCopy
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver.address = "12 Broadway"
  return driver
}
function deleteFromDriverByKey(driver, key) {
  
}