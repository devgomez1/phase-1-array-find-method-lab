// code your solution here
const record = [
  { year: "2015", result: "W" },
  { year: "2014", result: "N/A" },
  { year: "2013", result: "L" },
];

function superbowlWin(array) {
  const win = array.find((record) => record.result === "W");
  if (win) {
    console.log(`The Denver Broncos won the superbowl in: ${win.year}.`);
    return win.year;
  }
  return undefined;
}

superbowlWin(record);
