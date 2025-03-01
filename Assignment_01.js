// String Methods
let str = " Hello, JavaScript! ";
console.log(str.length);
console.log(str.charAt(0));
console.log(str.charCodeAt(0));
console.log(str.at(-1));
console.log(str.indexOf("Java"));
console.log(str.lastIndexOf("a"));
console.log(str.includes("Java"));
console.log(str.startsWith(" Hello"));
console.log(str.endsWith("! "));
console.log(str.substring(0, 5));
console.log(str.slice(-10));
console.log(str.substr(0, 5)); // Deprecated
console.log(str.replace("JavaScript", "World"));
console.log(str.replaceAll("a", "A"));
console.log(str.split(" "));
console.log(str.concat(" is powerful!"));
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.padStart(25, "*"));
console.log(str.padEnd(25, "*"));
console.log(str.match(/Java/g));
console.log([...str.matchAll(/a/g)]);
console.log(str.search(/Java/));
console.log(str.repeat(2));
console.log("apple".localeCompare("banana"));

// Array Methods
let arr = [1, 2, 3, 4, 5];
console.log(arr.length);
arr.push(6);
arr.pop();
arr.shift();
arr.unshift(0);
console.log(arr.concat([7, 8]));
console.log(arr.join("-"));
console.log(arr.slice(1, 4));
arr.splice(2, 1, 99);
console.log(arr.indexOf(99));
console.log(arr.lastIndexOf(99));
console.log(arr.includes(99));
console.log(arr.reverse());
console.log(arr.sort());
console.log(arr.toSorted());
console.log(arr.toReversed());
console.log(arr.toSpliced(2, 1));
console.log(arr.map(x => x * 2));
console.log(arr.filter(x => x % 2 === 0));
console.log(arr.reduce((a, b) => a + b, 0));
console.log(arr.reduceRight((a, b) => a + b, 0));
console.log(arr.find(x => x > 2));
console.log(arr.findIndex(x => x > 2));
console.log(arr.findLast(x => x > 2));
console.log(arr.findLastIndex(x => x > 2));
console.log(arr.some(x => x > 2));
console.log(arr.every(x => x > 0));
console.log(arr.fill(0, 1, 3));
console.log(arr.copyWithin(0, 2, 4));
console.log([1, [2, 3], [4, [5, 6]]].flat(2));
console.log(arr.flatMap(x => [x, x * 2]));
