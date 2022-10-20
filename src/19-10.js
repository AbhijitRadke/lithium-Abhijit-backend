



const series = [22,23,24,39,40]
let em = []
const missingNumber = function (arr) {
    let arr1st = arr[0]
    let arrlast = arr[(arr.length - 1)]

    for (let n = arr1st; n <= arrlast; n++) {
        if (arr.indexOf(n) < 0) {
            em.push(n)

        }
    }
    return em
}

console.log(missingNumber(series))