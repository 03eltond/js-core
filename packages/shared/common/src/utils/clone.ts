export default function clone(obj: any) {
  return JSON.parse(JSON.stringify(obj));
}
