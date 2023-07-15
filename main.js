const fs = require("fs");

// Font colors
const Color = {
  GREEN: '\x1b[32m',
  YELLOW: '\x1b[33m',
  CYAN: '\x1b[36m',
  RED: '\x1b[31m'
};

/**
 * Counts the words in a file.
 * @param {string} file - The file path.
 * @returns {Array} - Array of word counts, sorted by frequency.
 */
function wordCount(file) {
  try {
    const words = fs.readFileSync(file, 'utf8').split(/[\s.,;]+/);
    const counts = {};

    for (const word of words) {
      const lcWord = word.toLowerCase();
      counts[lcWord] = (counts[lcWord] || 0) + 1;
    }

    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  } catch (error) {
    // Handle error
    if (error.code === 'ENOENT') {
      console.error(Color.RED, 'Error: The file does not exist.');
    } else {
      console.error(Color.RED, 'Error occurred:', error.message);
    }
  }
}

/**
 * Prints the word count result.
 * @param {Array} sortedCounts - Array of sorted word counts.
 */
function printResult(sortedCounts) {
  let words = 0;
  let characters = 0;
  let frequencies = '';

  // Sums & Concatenates
  for (const [word, count] of sortedCounts) {
    words += count;
    characters += word.length;
    frequencies += `${word}: ${count}\n`;
  }

  // Printing
  console.log(Color.GREEN, '\n## WORD COUNT CHALLENGE! ##');
  console.log(Color.YELLOW, `\n${words} words, ${characters} characters`);
  console.log(Color.CYAN, `\n${frequencies}`);
}

if (require.main === module) {
  const file = process.argv[2];
  const result = wordCount(file);
  if (result) {
    printResult(result);
  }
}