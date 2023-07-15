
# Word Count

  

A Node.js script that counts the words in a file and displays the word frequency in descending order.

  

## Features

- Reads a file and extracts words using regular expressions.

- Displays the word count and frequency in a formatted manner.

  

## Installation

1. Clone the repository:

    git clone https://github.com/germanonate/word-count-challenge.git

2. Navigate to the project directory:

    cd word-count-challenge

3. Install the dependencies:

    npm install

## Usage

Run the script with a file path as a command-line argument:

    node word-count.js <file-path>

Replace <file-path> with the path to the file you want to count the words in.

Example:

    node word-count.js ./samples/text.txt

## Output

The script will display the following information:

- Total number of words.

- List of words and their frequencies, sorted by frequency in descending order.

## Testing

The project includes tests using Jest. To run the tests, use the following command:

    npm test

Make sure to install the dependencies before running the tests.

## Contributing

Contributions are welcome! If you find any issues or want to enhance the script, please follow these steps:

1. Fork the repository.

2. Create a new branch.

3. Make your changes.

4. Test the changes.

5. Submit a pull request explaining the improvements.