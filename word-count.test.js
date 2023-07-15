const { wordCount } = require('./word-count');

// Sorts the array alphabetically based on the first element of each item
const sortAlphabetically = (array) => {
  array.sort((a, b) => {
    const firstElementA = a[0].toLowerCase();
    const firstElementB = b[0].toLowerCase();
    
    return firstElementA.localeCompare(firstElementB);
  });

  return array;
};

describe('wordCount method', () => {
  test('should handle error when file does not exist', () => {
    const errorMessage = 'Error: The file does not exist.';

    // Mock the fs module to throw an error
    jest.mock('fs', () => ({
      readFileSync: jest.fn(() => {
        throw new Error('ENOENT');
      })
    }));

    const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

    wordCount('non-existent-file.txt');

    expect(consoleSpy).toHaveBeenCalledWith(errorMessage);

    // Restore the console.error function
    consoleSpy.mockRestore();
  });

  test('should count the words in a file', () => {
    const expectedCounts = [
      ['javascript', 3],
      ['is', 2],
      ['for', 2],
      ['web', 2],
      ['and', 2],
      ['a', 1],
      ['powerful', 1],
      ['language', 1],
      ['development', 1],
      ['with', 1],
      ['you', 1],
      ['can', 1],
      ['create', 1],
      ['interactive', 1],
      ['applications', 1],
      ['build', 1],
      ['modern', 1],
      ['responsive', 1],
      ['websites', 1],
      ['versatility', 1],
      ['flexibility', 1],
      ['make', 1],
      ['it', 1],
      ['an', 1],
      ['essential', 1],
      ['tool', 1],
      ['developers', 1],
      ['worldwide', 1]
    ];
    
    const result = wordCount('./testing/text.txt');
    expect(result).toEqual(expectedCounts);
  });

  test('should count the same words for two files where one is mixed', () => {    
    const result = wordCount('./testing/text.txt');
    const mixedResult = wordCount('./testing/text-mixed.txt');

    expect(sortAlphabetically(result)).toEqual(sortAlphabetically(mixedResult));
  });

});