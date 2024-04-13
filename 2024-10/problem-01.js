function waterTrap(height) {
  if (height === null || height.length == 0) {
        return 0
    }
    
    let izq = 0
    let der = height.length - 1
    
    let izq_max = 0
    let der_max = 0
    
    let water = 0

    while (izq < der) {
        //se va cerrando el rango en el que se revisa el terreno
        if (height[izq] < height[der]) {
            if (height[izq] >= izq_max) {
                izq_max = height[izq]
            } else {
                water += izq_max - height[izq]
            }
            izq++
        } else {
            
            if (height[der] >= der_max) {
                der_max = height[der]
            } else {
                water += der_max - height[der]
            }
            der--
        }

    }

    return water
};

module.exports = { waterTrap };
