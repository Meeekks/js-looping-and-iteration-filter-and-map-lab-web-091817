// Code your solution here:
function driversWithRevenueOver(array, string) {
  return array.filter(function(element) {
    return element.revenue > string
  });
}

function driverNamesWithRevenueOver(array, string) {
  const filteredArray = driversWithRevenueOver(array, string)
  return filteredArray.map(function(element) {
    if (element.revenue > string) {
      return element.name;
    }
  });
}

function exactMatch(array, obj) {
  return array.filter(function(element) {
    return (element.name === obj.name || element.revenue === obj.revenue)
  });
}
// probably can write this more dynamically

function exactMatchToList(array, obj) {
  const filteredArray = exactMatch(array, obj);
  return filteredArray.map(function(element) {
    return element.name;
  });
}
