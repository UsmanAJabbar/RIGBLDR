import Cookies from 'js-cookie'


// Add the part, key and value needed
export function addPart(k, v) {
  Cookies.set(k, v, {expires: 10, path:''})
}
// Get some parts. Enter no vlaue for all parts.
export function getPart(k) {
  if (!k) {
    return (Cookies.get())
  }
  return (Cookies.get(k))
}
// Delete a part

export function deletePart(k) {
  Cookies.remove(k, {path: ''})
}
