import { describe, expect, test } from 'bun:test'
import { calcPartOne, calcPartTwo } from './solution'

describe('Part one', () => {
  test('example', async () => {
    const input = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`

    expect(calcPartOne(input)).toEqual(142)
  })

  test('real', async () => {
    const input = await Bun.file('01_trebuchet/input.txt').text()

    expect(calcPartOne(input)).toEqual(53651)
  })
})

describe('Part two', () => {
  test('example', async () => {
    const input = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`

    expect(calcPartTwo(input)).toEqual(281)
  })

  test('real', async () => {
    const input = await Bun.file('01_trebuchet/input.txt').text()

    expect(calcPartTwo(input)).toEqual(53894)
  })
})
