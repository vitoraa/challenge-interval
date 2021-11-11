class intervals_set {

  a_intervals_set = [[4, 8], [14, 18]];

  add(n) {
    const newValue = [n, n]

    for (let i = 0; i < this.a_intervals_set.length; i++) {
      const interval = this.a_intervals_set[i]
      const beforeArray = this.a_intervals_set.slice(0, i)
      const afterArray = this.a_intervals_set.slice(i, this.a_intervals_set.length)
      if (n < interval[0] - 1) {
        this.a_intervals_set = [...beforeArray, newValue, ...afterArray]
        return
      } else if (n === interval[0] - 1) {
        this.a_intervals_set[i] = [n, interval[1]]
        return
      } else if (n === interval[1] + 1) {
        this.a_intervals_set[i] = [interval[0], n]
        return
      } else if (n >= interval[0] && n <= interval[1]) {
        return
      }
    }


    this.a_intervals_set.push(newValue)
  }

  remove(n) {
    for (let i = 0; i < this.a_intervals_set.length; i++) {
      const interval = this.a_intervals_set[i]
      if (n === interval[0] || n === interval[1]) {
        if (interval[0] === interval[1]) {
          this.a_intervals_set.splice(i, 1)
        } else if (n === interval[0]) {
          this.a_intervals_set[i] = [interval[0] + 1, interval[1]]
        } else if (n === interval[1]) {
          this.a_intervals_set[i] = [interval[0], interval[1] - 1]
        }
      } else if (n > interval[0] && n < interval[1]) {
        this.a_intervals_set[i] = [interval[0], n - 1]
        this.a_intervals_set.splice(i + 1, 0, [n + 1, interval[1]])
      }
    }
  }

  has(n) {
    for (let i = 0; i < this.a_intervals_set.length; i++) {
      const interval = this.a_intervals_set[i]
      if (n === interval[0] || n === interval[1]) {
        return true
      } else if (n > interval[0] && n < interval[1]) {
        return true
      } else if (n < interval[0]) {
        return false
      }
    }
    return false
  }

}

a = new intervals_set()
a.add(2)
a.add(19)
a.add(25)
a.add(3)
a.add(26)
a.add(10)
a.add(0)
a.add(18)
a.add(25)
a.add(100)
a.add(99)

a.remove(0)
a.remove(100)
a.remove(15)

console.log(a.has(0))
console.log(a.has(2))
console.log(a.has(14))
console.log(a.has(18))
console.log(a.has(100))
console.log(a.has(1))


console.log(a);






