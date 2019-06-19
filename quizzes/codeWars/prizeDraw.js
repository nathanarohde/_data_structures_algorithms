function rank(st, we, n) {
  if (st === "") return 'No participants';
  let stArr = st.split(",");
  if (n > stArr.length) return 'Not enough participants';
  let scores = [];
  let sum = 0;

  for (let i=0; i < stArr.length; i++){
    for(let j=0; j < stArr[i].length; j++){
      sum += (stArr[i].toLowerCase()).charCodeAt(j) - 96;
    }
    sum += stArr[i].length;
    sum *= we[i];
    scores.push(sum);
    sum = 0;
  }

  for (let i=1; i < scores.length; i++){
    let currentVal = scores[i];
    let currentName = stArr[i];
    if( currentVal >= scores[i-1]){
      let j = i-1;
      while(j >=0 && (scores[j] < currentVal || (scores[j] === currentVal) && stArr[j] > currentName)){
          scores[j+1] = scores[j];
          stArr[j+1] = stArr[j];
          scores[j] = currentVal;
          stArr[j] = currentName;
          j--;
      }
    }
  }
  return stArr[n-1];
}

// rank("Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin", [4, 2, 1, 4, 3, 1, 2], 4);
// rank("Ethan,Madison,Andrew,Michael,Emma,Sofia,Samantha,Lagon,Abigail,Willaim,Olivai,Joshua,William,James,Noah,Jacob,Elizabeth,Naoh,Emily,Mason,Logan,Isabella,Natalie,Jayden,Benjamin", [1,3,4,5,2,2,4,1,1,2,3,5,4,4,2,5,2,4,4,2,1,6,4,4,5], 8);
// rank("Ava,Ethan,Joshua,Robert,Samantha,Jacob,Lagon,James,Emily,Natalie,Jayden,Benjamin,Avery,Abigail,Ella,Liam,Elizabeth,Willaim,Mia,Lily,Olivai", [4,4,4,6,6,4,5,1,6,6,6,1,6,6,4,3,3,6,3,3,2], 3);
// rank("Benjamin,Lily,Chloe,Robert,William,Michael,Olivia,Lyli,James,Samantha,Addison,Natalie,Avery,Andrew,Aiden,Mia,Ethan,Ava,David,Abigail,Emily,Elijah,Willaim,Sofia,Mason", [5,6,6,2,2,2,2,3,1,1,3,1,4,3,4,1,4,5,4,3,3,3,2,2,1], 14);
rank("Ella,Ethan,Daniel,Mia,Chloe,Jacob,Emily,Lily,Logan,Michael,Lyli,Isabella", [3,4,2,2,2,2,5,5,2,6,2,3], 9);
