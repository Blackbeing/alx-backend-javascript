export default function IterateThroughObject(reportWithIterator) {
  return Array.from(reportWithIterator).join(' | ').trim();
}
