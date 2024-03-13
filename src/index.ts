import { Interface, createInterface } from 'readline';
import { promisify } from 'util';
import { resolveAnagram } from './functions';

const readline: Interface = createInterface({
  input: process.stdin,
  output: process.stdout,
});

const questionAsync = promisify(readline.question).bind(readline);

const processData = async (inputWord: string): Promise<Array<string>> => {
  const words: Array<string> = await resolveAnagram(inputWord);
  console.log(words);
  return words;
};

async function getUserInput(): Promise<string> {
  return (await questionAsync('Enter your word (type "exit" to quit): ')) as unknown as string;
}

async function main(): Promise<void> {
  let userInput = await getUserInput();

  while (userInput.toLowerCase() !== 'exit') {
    await processData(userInput);
    userInput = await getUserInput();
  }

  console.log('Goodbye!');
  readline.close();
}

// Run the main function
main();
