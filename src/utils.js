import dayjs from "dayjs";
import { LoremIpsum } from "lorem-ipsum";

export const generateRandomColor = () => {
  let maxVal = 0xffffff; // 16777215
  let randomNumber = Math.random() * maxVal;
  randomNumber = Math.floor(randomNumber);
  randomNumber = randomNumber.toString(16);
  let randColor = randomNumber.padStart(6, 0);
  return `#${randColor.toUpperCase()}`;
};

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const getRandomDate = () => {
  const maxDate = Date.now();
  const timestamp = Math.floor(Math.random() * maxDate);
  return new Date(timestamp);
};

export const generateDataObject = (i) => {
  let obj = {};
  obj.date = dayjs(getRandomDate()).format("DD MMM YYYY");
  obj.title = `Title ${i+1}`;
  obj.content = lorem.generateWords(100);
  return obj;
};
