export const getSeedsFromObject = (data) => {
  const seeds = [];

  Object.entries(data).forEach(([key, value]) => {
    if (key.includes('seed')) {
      seeds.push(value);
    }
  });

  return seeds;
};

export const getSeedStringfromSeeds = (seeds) => {
  let seedString = '';

  seeds.forEach((seed, index) => {
    if (index === 0 || index === seeds.length - 1) {
      seedString += seed;
    } else {
      seedString += `-${seed}`;
    }
  });

  return seedString;
};

export const getObjectWithoutSeeds = (data) => {
  const seedlessObject = {};

  Object.entries(data).forEach(([key, value]) => {
    if (!key.includes('seed')) {
      seedlessObject[key] = value;
    }
  });

  return seedlessObject;
};

export const makeFormDataObjectFromData = (object) => {
  const formData = new FormData();

  Object.entries(object).forEach(([key, value]) => {
    formData.append(key, value);
  });

  return formData;
};
