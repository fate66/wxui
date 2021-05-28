import adsData from './addressData'

for (let item of adsData) {
    item.label = item.name
    item.cityList.forEach(sub => {
        sub.label = sub.name
        sub.areaList.forEach(sun => {
            sun.label = sun.name
        })
    })
}

export default {

    dfs(defaultValue) {
        return (defaultValue && defaultValue.split('-')) || []
    },
    getADSD(k, val, list) {
        let l1
        for (let item of list) {
            if (item.name === val) {
                l1 = item[k]
                break
            }
        }
        return l1 || list[0][k]
    },
    options(defaultValue) {
        let options = []
        let defaults = this.dfs(defaultValue)
        let citys = this.getADSD('cityList', defaults[0] || '', adsData)
        options.push(adsData)
        options.push(citys)
        options.push(this.getADSD('areaList', defaults[1] || '', citys))
        return {options, defaults}
    },
    onChange(vm, {index, data}) {
        if (index == 0) {
            vm.$set(vm.cacheData, 1, data.cityList)
            vm.$set(vm.cacheData, 2, data.cityList[0].areaList)
        } else if (index == 1) {
            vm.$set(vm.cacheData, 2, data.areaList)
        }
    }

}
