export default function createInt8TypedArray(length, position, value) {
  if (typeof position !== 'number' || position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  const buf = new ArrayBuffer(length);
  const dataView = new DataView(buf);
  dataView.setInt8(position, value);
  return dataView;
}
