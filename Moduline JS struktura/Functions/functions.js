// 2. Atskirame faile apsirašyt funkciją kuri priima masyvą su skaičiais bei gražiną mažiausią skaičių;

const nums = [1, 15, 25, 37, 45, 0, 5, 79, -1];

const minNum = () => {
  const findMinNum = Math.min(...nums);
  return findMinNum;
};

console.log(minNum());

export { minNum };

// 3. Atskirame faile apsirašyt funkciją kuri priima skaičių masyvą bei gražiną jų vidurkį;

const averageNum = () => {
  const findAverageNum = nums.reduce((a, b) => a + b) / nums.length;
  return findAverageNum;
};

averageNum();

export { averageNum };

// 4. Į funkciją paduoti žodį string pavidalu bei gaut masyvą kuriame būtu kiekviena žodžio raidė;

const word = "mistificationing";

const arrayOfLetters = () => {
  const anArray = Array.from(word);
  return anArray;
};

arrayOfLetters();

console.log(arrayOfLetters());

export { arrayOfLetters };

// 5. Į funkciją paduoti masyvą su skaičiais. Funkcija turi gražint skaičių sumą;

const sumOfNums = () => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
};

console.log(sumOfNums());

export { sumOfNums };
