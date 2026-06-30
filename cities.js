const saskatchewanCities = [
  "Abbey", "Aberdeen", "Abernethy", "Alameda", "Alida",
  "Allan", "Alsask", "Alvena", "Aneroid", "Arborfield",
  "Archerwill", "Arcola", "Asquith", "Assiniboia", "Avonlea",
  "Balcarres", "Balgonie", "Battleford", "Beauval", "Beechy",
  "Bengough", "Bethune", "Bienfait", "Big River", "Biggar",
  "Birch Hills", "Birsay", "Blaine Lake", "Borden", "Bredenbury",
  "Briercrest", "Broadview", "Brock", "Bruno", "Buchanan",
  "Buffalo Narrows", "Burstall", "Cabri", "Cadillac", "Calder",
  "Canoe Narrows", "Canora", "Canwood", "Carievale", "Carlyle",
  "Carnduff", "Caron", "Carrot River", "Central Butte", "Ceylon",
  "Chaplin", "Choiceland", "Christopher Lake", "Churchbridge", "Clavet",
  "Climax", "Cochin", "Coderre", "Coleville", "Colonsay",
  "Conquest", "Consul", "Coronach", "Craik", "Creelman",
  "Creighton", "Cudworth", "Cumberland House", "Cupar", "Cut Knife",
  "Dalmeny", "Davidson", "Debden", "Delisle", "Denzil",
  "Dillon", "Dinsmore", "Dodsland", "Domremy", "Drake",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < saskatchewanCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(saskatchewanCities[i]);
}

module.exports = { batches };
