let obj = {
  name: "jomin",
  email: "jomin@gmail.com",
};
// Output: "name=jomin&email=jomin@gmail.com"

// console.log(Object.entries(obj));
function objToString(obj) {
  return Object.entries(obj)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
}
console.log(objToString(obj));
