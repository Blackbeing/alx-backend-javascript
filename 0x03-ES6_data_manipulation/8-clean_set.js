export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  const filset = [];
  set.forEach((element) => {
    if (element.startsWith(startString)) {
      filset.push(element.slice(startString.length));
    }
  });
  return filset.join('-');
}
