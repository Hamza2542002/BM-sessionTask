// B(n)
function hasDuplicateUsingSet(arr) {
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    let temp =
      typeof arr[i] === "object" && arr[i] !== null
        ? JSON.stringify(arr[i])
        : arr[i];

    if (set.has(temp)) return true;
    set.add(temp);
  }
  return false;
}

// B(nlog(n))
function hasDuplicateUsingSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] =
      typeof arr[i] === "object" && arr[i] !== null
        ? JSON.stringify(arr[i])
        : arr[i];
  }
  arr.sort();
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) return true;
  }
  return false;
}

const arr = [2, 4, [22, "text"], false, null, { a: 22 }, [22, "text"], "null"];

console.log("Detect Duplicates using set", hasDuplicateUsingSort(arr));
console.log("Detect Duplicates using sort", hasDuplicateUsingSet(arr));

const arr2 = [
  8,
  "55",
  [2, "Hello World", { a: 2, b: 5 }, false],
  {
    arr: [true, 1, NaN, new Array(2, 33)],
    test: null,
    obj: { d: "Moha", last: [2, false, undefined] },
  },
];
const [
  ,
  ,
  ,
  {
    arr: [, , , [, num]],
    _,
    obj: { d },
  },
] = arr2;

console.log(num);
console.log(d);
