import fs from 'fs';
import path from 'path';

const sortString = (str: string): string => {
  return str.split('').sort().join('');
};

export const resolveAnagram = async (inputWord: string): Promise<Array<string>> => {
  const data: string = fs.readFileSync(path.resolve('src', 'lib', 'dictionary.txt'), 'utf-8');
  const dictionary: string[] = data.split('\n').map((word) => word.trim());

  const sortedInput: string = sortString(inputWord.toLowerCase());

  return dictionary.filter((word: string) => {
    const sortedWord: string = sortString(word.toLowerCase());
    return sortedWord === sortedInput && word !== inputWord.toLowerCase();
  });
};
