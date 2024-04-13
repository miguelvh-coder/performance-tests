function waterTrap(height) {
  let top = Math.max(...height)
    var glub = 0
    //revisa por niveles del suelo que puede si hay muros para contener agau
    for(j=1;j<=top;j++){
        var c = false
        var acumulador = 0
        for(i=0;i<height.length;i++){
            if(c==true){

                if(height[i]<j){
                    acumulador++
                }else{
                    c = false
                }

            }
            if(height[i]>=j){
                c = true
                glub += acumulador
                acumulador = 0
            }
            
        }
    }
    return glub
};

module.exports = { waterTrap };
