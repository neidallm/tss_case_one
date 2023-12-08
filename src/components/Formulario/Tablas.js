
const tablaNroTrabajador = [{
    nro : 2,
    min: 25,
    max: 35,
    randon:0
},
{
    nro : 3,
    min: 20,
    max: 30,
    randon:0
},
{
    nro : 4,
    min: 15,
    max: 25,
    randon:0
},{
    nro : 5,
    min: 10,
    max: 20,
    randon:0
},{
    nro : 6,
    min: 5,
    max: 15,
    randon:0
}]


const tablaAcumuladaC = [{
    nro:0,ran:0,
    limInf:0,
    limSup:0.15
    },
    {nro:1,
    ran:0,
    limInf:0.15,
    limSup:0.4
    },
    {nro:2,
    ran:0,
    limInf:0.4,
    limSup:0.9
    },
    {nro:3,
    ran:0,
    limInf:0.9,
    limSup:1
    }];


    const tablaComparativa = [
        {
            nro:2,
            costTotal:0,
        },
        {
            nro:3,
            costTotal:0,
        },
        {
            nro:4,
            costTotal:0,
        },
        {
            nro:5,
            costTotal:0,
        },
        {
            nro:6,
            costTotal:0,
        }
    ];

    const tablaSelect = [
        {nro:2,
         tabla:[
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
           ]
        },
        {nro:3,
          tabla:[
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
           ]
         },
         {nro:4,
          tabla:[
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
           ]
         },
         {nro:5,
          tabla:[
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
           ]
         },
         {nro:6,
          tabla:[
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
            {rand:0,cantCamiones:0,tmpEsperaMin:0,tiempoEsperaTotal:0,costoEspera:0},
           ]
         }
      ];


export  {tablaNroTrabajador, tablaAcumuladaC,tablaSelect, tablaComparativa};
