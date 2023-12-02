//01 aqui crio o componente no caso MeuContador e em seguida eu declaro o que será mostrado no return
import { useState } from "react" 

export default function MeuContador() {

   let contador = 0 //defini variavel dentro do componente criado


   function aumentar () { //criei uma função para aumentar o numero da variavel a cada clique
    contador ++            // evendo definido no onclick, a cada clique a variavel soma 1
    console.log('o valor é', contador)

   }

    return (
      <div>
       <h1>Meu contador!</h1>
       <h3>{contador}</h3>
       <button onClick={aumentar}>Contando...</button>
     </div>
    
    )
  }
