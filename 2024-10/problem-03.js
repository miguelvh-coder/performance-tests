function maxArea(height) {
  if (height === null || height.length == 0) {
        return 0
    }
    
    let max = 0
    let izq = 0
    let der = height.length - 1

    while (izq < der) {
        //similar al problema de trapping rain water
        let width = der - izq
        let min = Math.min(height[izq], height[der])
        let area = width * min
        max = Math.max(max, area)

        if (height[izq] < height[der]) {
            izq++
        } else {
            der--
        }
    }

    return max
}
