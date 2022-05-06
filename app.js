/*---------------CREO COMPONENTE---------------*/

Vue.component('tabla',{
    props:{
        titulos:{
            type: Array,
            required: true
        },
        registros:{
            type: Array,
            required: true
        }
    },
    template:`
    <div>
        <thead class="thead-light">
            <tr>
                <th v-for="(titulo,index) in titulos" :key="index" scope="col">
                    {{titulo}}
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(paises,index) in registros" :key="index" scope="row">
                <td> {{index+1}} </td>
                <td> {{paises.localidad1}} </td>
                <td> {{paises.localidad2}} </td>
                <td> {{paises.resultado}} </td>
            </tr>
        </tbody>
    </div>   
    `
});

/*---------------INFORMACION DE LAS TABLAS---------------*/

var app = new Vue({
    el:"#app",
    data:{
        tabla1:{
            titulos: ["ID","Pais 1","Pais 2","Resultado"],
            registros: [
                {   localidad1: "Qatar",
                    localidad2: "Ecuador",
                    resultado: "1-0"
                },
                {   localidad1: "Senegal",
                    localidad2: "Paises Bajos",
                    resultado: "1-2"
                },
                {   localidad1: "Qatar",
                    localidad2: "Senegal",
                    resultado: "1-0"
                },
                {   localidad1: "Ecuador",
                    localidad2: "Paises Bajos",
                    resultado: "0-3"
                },
                {   localidad1: "Qatar",
                    localidad2: "Paises Bajos",
                    resultado: "1-2"
                },
                {   localidad1: "Ecuador",
                    localidad2: "Senegal",
                    resultado: "0-1"
                },
            ]
        },
        tabla2:{
            titulos: ["ID","Pais 1","Pais 2","Resultado"],
            registros: [
                {   localidad1: "Inglaterra",
                    localidad2: "Iran",
                    resultado: "1-1"
                },
                {   localidad1: "Estados Unidos",
                    localidad2: "Repesca",
                    resultado: "1-0"
                },
                {   localidad1: "Inglaterra",
                    localidad2: "Estados Unidos",
                    resultado: "2-0"
                },
                {   localidad1: "Iran",
                    localidad2: "Repesca",
                    resultado: "1-1"
                },
                {   localidad1: "Inglaterra",
                    localidad2: "Repesca",
                    resultado: "1-0"
                },
                {   localidad1: "Iran",
                    localidad2: "Estados Unidos",
                    resultado: "1-0"
                },
            ]
        },
        tabla3:{
            titulos: ["ID","Pais 1","Pais 2","Resultado"],
            registros: [
                {   localidad1: "Argentina",
                    localidad2: "Arabia Saudi",
                    resultado: "3-0"
                },
                {   localidad1: "Mexico",
                    localidad2: "Polonia",
                    resultado: "1-0"
                },
                {   localidad1: "Argentina",
                    localidad2: "Mexico",
                    resultado: "2-0"
                },
                {   localidad1: "Arabia Saudi",
                    localidad2: "Polonia",
                    resultado: "1-2"
                },
                {   localidad1: "Argentina",
                    localidad2: "Polonia",
                    resultado: "2-0"
                },
                {   localidad1: "Arabia Saudi",
                    localidad2: "Mexico",
                    resultado: "1-0"
                },
            ]
        },
        cssGrupoA:{
            "table-dark": true,
            "table": true,
            "table-striped": true,
        },
        cssGrupoB:{
            "table-dark": false,
            "table-pp": true,
            "table": true,
            "table-striped": true,
        },
        cssGrupoC:{
            "table-dark": true,
            "table": true,
            "table-striped": true,
        }
    }
});