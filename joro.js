function joro(n) {
  let str = "1"
  let newStr = ""
  let counting = str[0]
  let count = 1
  let i = 1
  let cur = str[i]
  for (let j = 0; j < n; j++) {
    while (i < str.length) {
      if (cur === counting) {
        count++
      } else {
        newStr += String(count) + String(counting)
        count = 1
        counting = str[i]
      }
      i++
      cur = str[i]
    }
    newStr += String(count) + String(counting)
    str = newStr
    newStr = ""
    counting = str[0]
    count = 1
    i = 1
    cur = str[i]
  }
  return str
}

module.exports = joro

