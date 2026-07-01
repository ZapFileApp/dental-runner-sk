const saskatchewanCities = [
  "Dubuc", "Duck Lake", "Dundurn", "Dysart", "Earl Grey",
  "Eastend", "Eatonia", "Edam", "Elbow", "Elfros",
  "Elrose", "Esterhazy", "Estevan", "Eston", "Eyebrow",
  "Fillmore", "Fleming", "Foam Lake", "Fond-du-Lac", "Fort Qu`Appelle",
  "Fox Valley", "Francis", "Frobisher", "Frontier", "Gainsborough",
  "Glaslyn", "Glen Ewen", "Glenavon", "Goodeve", "Goodsoil",
  "Govan", "Gravelbourg", "Grayson", "Green Lake", "Grenfell",
  "Gull Lake", "Hafford", "Hague", "Hanley", "Harris",
  "Hawarden", "Hazlet", "Hepburn", "Herbert", "Herschel",
  "Hodgeville", "Holdfast", "Hudson Bay", "Humboldt", "Ile-a-la-Crosse",
  "Imperial", "Indian Head", "Invermay", "Ituna", "Jansen",
  "Kamsack", "Kelliher", "Kelvington", "Kenaston", "Kennedy",
  "Kenosee", "Kerrobert", "Key Lake", "Kincaid", "Kindersley",
  "Kinistino", "Kipling", "Kisbey", "Kyle", "La Loche",
  "La Ronge", "Lafleche", "Laird", "Lake Alma", "Lake Lenore",
  "Lampman", "Landis", "Lang", "Langenburg", "Langham",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < saskatchewanCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(saskatchewanCities[i]);
}

module.exports = { batches };
