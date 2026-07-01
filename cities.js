const saskatchewanCities = [
  "Pinehouse", "Plato", "Plenty", "Ponteix", "Porcupine Plain",
  "Preeceville", "Prelate", "Prince Albert", "Prud`homme", "Punnichy",
  "Qu`Appelle", "Quill Lake", "Rabbit Lake", "Radisson", "Radville",
  "Raymore", "Redvers", "Regina", "Regina Beach", "Rhein",
  "Riceton", "Richmound", "Ridgedale", "Riverhurst", "Rocanville",
  "Rockglen", "Rose Valley", "Rosetown", "Rosthern", "Rouleau",
  "Saltcoats", "Sandy Bay", "Saskatoon", "Sceptre", "Scott",
  "Sedley", "Semans", "Shaunavon", "Sheho", "Shell Lake",
  "Shellbrook", "Simpson", "Sintaluta", "Smeaton", "Smiley",
  "Southend", "Southey", "Spalding", "Speers", "Spiritwood",
  "Springside", "Spy Hill", "St. Benedict", "St. Brieux", "St. Gregor",
  "St. Louis", "St. Walburg", "Stanley Mission", "Star City", "Stockholm",
  "Stony Rapids", "Storthoaks", "Stoughton", "Strasbourg", "Strongfield",
  "Sturgis", "Swift Current", "Tantallon", "Theodore", "Tisdale",
  "Togo", "Tompkins", "Torquay", "Tramping Lake", "Tribune",
  "Turnor Lake", "Turtleford", "Unity", "Uranium City", "Val Marie",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < saskatchewanCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(saskatchewanCities[i]);
}

module.exports = { batches };
