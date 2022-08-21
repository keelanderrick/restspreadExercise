const filterOutOdds = (...args) => args.filter(value => value % 2 === 0);

const findMin = (...args) => Math.min(...args);

const mergeObjects = (firstObj, secondObj) => ({...firstObj, ...secondObj});

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(value => value*2)];

const removeRandom = (items) => {
    let index = Math.floor(Math.random() * items.length);
    return [...items.slice(0,index), ...items.slice(index+1)];
}

const extend = (arr1, arr2) => [...arr1, ...arr2];

const addKeyVal = (obj, key, val) => {
    let result = {...obj}
    result[key] = val;
    return result;
}

const removeKey = (obj, key) => {
    let result = { ...obj };
    result.removeKey(key);
    return result;
}

const combine = (obj1, obj2) => ({...obj1, ...obj2 });

const update = (obj, key, val) => {
    let result = {...obj};
    result[key] = val;
    return result;
}