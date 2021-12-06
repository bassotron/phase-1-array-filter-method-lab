// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(driverArray, driverName) {
return driverArray.filter(iteratorWord => iteratorWord.toLowerCase() == driverName.toLowerCase() )}



function fuzzyMatch(driverArray, driverName) {
    return driverArray.filter(iteratorWord => iteratorWord.substring(0,1) == driverName.substring(0,1))}



function matchName(driverArray, driverName) {
    return driverArray.filter(iteratorWord => iteratorWord.name === driverName)
}