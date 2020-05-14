const chack2StringWithObject = (str1, str2) => {
  if (str1.length !== str2.length) {
    console.log('"%s" can be converted to the "%s"!', str2, str1);
    return;
  }

  const strObject1 = {};
  const isTrue = false;
  const tempStr = [];

  for (const index in str1) {
    strObject1[index] = str1[index];
  }
  console.log("check2String.js:39", { strObject1 });

  for (const char of str2) {
    for (const key in strObject1) {
      if (strObject1[key] === char) {
        tempStr[key] = char;
        console.log("check2String.js:43", { char, str2, strObject1, key });
      } else {
        console.log("check2String.js:43 222222", {
          char,
          str2,
          strObject1,
          key
        });
      }
    }
  }

  console.log("check2String.js:47", { tempStr });

  // console.log('check2String.js:46', {
  //   'str1 === tempStr': str1 === tempStr.join(''),
  //   'str1 == tempStr': str1 == tempStr.join(''),
  //   'tempStr.join()': tempStr.join(''),
  // });

  // console.log('check2String.js:54', { tempStr });

  str1 === tempStr.join("")
    ? console.log('"%s" can be converted to the "%s"!', str2, str1)
    : console.log('"%s" can\'t be converted to the "%s"!', str2, str1);
};

// chack2StringWithObject('abcd', 'dbac');
// chack2StringWithObject('abcd', 'dbgc');
chack2StringWithObject("abcdc", "dbgca");
