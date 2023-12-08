
    export function uniform(min, max) {
        return (min + Math.random() * (max - min)) / max;
    }


    export function poisson(lambda) {
        const L = Math.exp(-lambda);
        let k = 0;
        let p = 1;

        do {
            k++;
            p *= Math.random();
        } while (p > L);

        return (k - 1) / lambda;
    }

    export function name(params) {

    }


    function distribucionTriangular(minimo, maximo, masProbable) {
        // Verificar que los parámetros sean válidos
        if (minimo > maximo || masProbable < minimo || masProbable > maximo) {
          throw new Error("Parámetros inválidos");
        }
        
        const moda = (masProbable - minimo) / (maximo - minimo);
        const u = Math.random();
        let resultado;
      
        if (u < moda) {
          resultado = minimo + Math.sqrt(u * (maximo - minimo) * (masProbable - minimo));
        } else {
          resultado = maximo - Math.sqrt((1 - u) * (maximo - minimo) * (maximo - masProbable));
        }
      
        return Math.trunc(resultado); // 
    }

    
    