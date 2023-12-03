export function calcPartOne(input: string): number {
  const inputArray = input.split('\n').filter((s) => s !== '')
  let result = 0

  for (let str of inputArray) {
    const nums = []

    for (let char of str) {
      if (Number.isInteger(parseInt(char))) {
        nums.push(parseInt(char))
      }
    }

    result += Number(`${nums[0]}${nums.at(-1)}`)
  }

  return result
}

export function calcPartTwo(input: string): number {
  const fixedInput = input
    .replaceAll('1', '_1_')
    .replaceAll('2', '_2_')
    .replaceAll('3', '_3_')
    .replaceAll('4', '_4_')
    .replaceAll('5', '_5_')
    .replaceAll('6', '_6_')
    .replaceAll('7', '_7_')
    .replaceAll('8', '_8_')
    .replaceAll('9', '_9_')

  const dict = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    _1_: 1,
    _2_: 2,
    _3_: 3,
    _4_: 4,
    _5_: 5,
    _6_: 6,
    _7_: 7,
    _8_: 8,
    _9_: 9,
  }

  const inputArray = fixedInput.split('\n').filter((s) => s !== '')
  let result = 0

  for (let str of inputArray) {
    let pair: [number, number] = [-1, -1]
    let min = Infinity
    let max = -Infinity

    for (const ns of Object.keys(dict)) {
      const index = str.search(ns)
      const lastIndex = str.lastIndexOf(ns)

      if (index !== -1 && index < min) min = index
      if (lastIndex !== -1 && lastIndex > max) max = lastIndex
    }
    for (const [ns, n] of Object.entries(dict)) {
      if (str[min] === ns[0]) {
        if (str[min + 1] === ns[1]) {
          if (str[min + 2] === ns[2]) {
            pair[0] = n
          }
        }
      }
      if (str[max] === ns[0]) {
        if (str[max + 1] === ns[1]) {
          if (str[max + 2] === ns[2]) {
            pair[1] = n
          }
        }
      }
    }

    result += Number(`${pair[0]}${pair.at(-1)}`)
  }

  return result
}
