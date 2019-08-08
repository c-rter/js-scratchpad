// from ejsc5 - recognizing text

function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.findIndex(c => c.name == name);
      if (known == -1) {
        counts.push({name, count: 1});
      } else {
        counts[known].count++;
      }
    }
    return counts;
  }

//ex.  console.log(countBy([1, 2, 3, 4, 5], n => n > 2));

console.log(countBy(["string1", "string2", "string1", "string1", "string2", "string1"], n => n))