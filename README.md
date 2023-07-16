
# Word Count Challenge

  

A Node.js script that counts the words in a file and displays the word frequency in descending order.

  

## Features

- Reads a file and extracts words using regular expressions.

- Displays the word count and frequency in a formatted manner.

## Prerequisites 

Before using this script, ensure that you have Node.js installed on your system. If you don't have it installed, you can download and install it from the official Node.js website.
[Download Node.js](https://nodejs.org)

## Installation

1. Clone the repository:

    git clone https://github.com/germanonate/word-count-challenge.git

2. Navigate to the project directory:

    cd word-count-challenge

3. Install the dependencies:

    npm install

## Usage

Run the script with a file path as a command-line argument:

    npm start --path=<file-path>

Replace <file-path> with the path to the file you want to count the words in.

Examples:

    npm start --path=./samples/text.txt
    npm start --path=/Users/xxx/xxx/xxx.txt

## Output

The script will display the following information:

- Total number of words.

- List of words and their frequencies, sorted by frequency in descending order.

## Testing

The project includes tests using Jest. To run the tests, use the following command:

    npm test

Make sure to install the dependencies before running the tests.
For more information on using Jest for testing, refer to the [Jest documentation](https://jestjs.io/docs/getting-started).

## Contributing

Contributions are welcome! If you find any issues or want to enhance the script, please follow these steps:

1. Fork the repository.

2. Create a new branch.

3. Make your changes.

4. Test the changes.

5. Submit a pull request explaining the improvements.