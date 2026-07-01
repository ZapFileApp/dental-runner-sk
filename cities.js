const saskatchewanCities = [
  "Vanguard", "Vanscoy", "Vibank", "Viscount", "Vonda",
  "Wadena", "Wakaw", "Waldheim", "Wapella", "Warman",
  "Waskesiu Lake", "Watrous", "Watson", "Wawota", "Webb",
  "Welwyn", "Weyburn", "White Fox", "Whitewood", "Wilcox",
  "Wilkie", "Willow Bunch", "Windthorst", "Wiseton", "Wishart",
  "Wollaston Lake", "Wolseley", "Wood Mountain", "Wynyard", "Yellow Creek",
  "Yellow Grass", "Yorkton", "Young", "Zealandia", "Zenon Park",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < saskatchewanCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(saskatchewanCities[i]);
}

module.exports = { batches };
