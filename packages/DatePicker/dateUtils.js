export default {
  addZero(i) {
    return i > 9 ? i : '0' + i
  },
  dfs(defaultValue) {
    return (defaultValue && defaultValue.split('-')) || []
  },
  getDayArray(year, month) {
    let tday = new Date(year, month, 0)
    let dayArr = []
    for (let i = 1; i <= tday.getDate(); i++) {
      dayArr.push(this.addZero(i))
    }
    return dayArr
  },
  getYearArray(offset) {
    let currentYear = new Date().getFullYear()
    let yearArr = []
    for (let i = currentYear - offset; i <= currentYear; i++) {
      yearArr.push(i)
    }
    return yearArr
  },
  getMonthArray() {
    let monthArray = []
    for (let i = 1; i < 13; i++) {
      monthArray.push(this.addZero(i))
    }
    return monthArray
  }

}
