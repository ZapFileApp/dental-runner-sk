const saskatchewanCities = [
  "Lanigan", "Lashburn", "Leader", "Leask", "Lemberg",
  "Leoville", "Leroy", "Lestock", "Liberty", "Limerick",
  "Lintlaw", "Lipton", "Lloydminster", "Loon Lake", "Loreburn",
  "Lucky Lake", "Lumsden", "Luseland", "Macklin", "Macrorie",
  "Maidstone", "Mankota", "Manor", "Maple Creek", "Marcelin",
  "Margo", "Marquis", "Marsden", "Marshall", "Martensville",
  "Maryfield", "Maymont", "Meacham", "Meadow Lake", "Meath Park",
  "Melfort", "Melville", "Meota", "Midale", "Middle Lake",
  "Milden", "Milestone", "Minton", "Mistatim", "Molanosa",
  "Montmartre", "Moose Jaw", "Moosomin", "Morse", "Mortlach",
  "Mossbank", "Naicam", "Neidpath", "Neilburg", "Neudorf",
  "Neville", "Nipawin", "Nokomis", "Norquay", "North Battleford",
  "North Portal", "Odessa", "Ogema", "Ormiston", "Osler",
  "Outlook", "Oxbow", "Paddockwood", "Pangman", "Paradise Hill",
  "Patuanak", "Paynton", "Pelican Narrows", "Pelly", "Pennant",
  "Pense", "Perdue", "Piapot", "Pierceland", "Pilot Butte",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < saskatchewanCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(saskatchewanCities[i]);
}

module.exports = { batches };
