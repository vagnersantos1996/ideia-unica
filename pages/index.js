// import {useState} from 'react';

// function Home() {
//     return (
//         <div>
//             <h1>Página inicial</h1>
//             <Contador />
//         </div>
//     )
// }

// function Contador() {
//     const [contador, setContador] = useState(1);

//     function adicionaContador() {
//         setContador(contador + 1)
//     }

//     return (
//         <div>
//             <div>{contador}</div>
//             <button onClick={adicionaContador}>Adicionar</button>
//         </div>
//     )
// }

function Home() {
    return (
        <div>
            <h1>Página inicial</h1>
            <a href="/sobre">Acessar página sobre</a>
        </div>
    )
}

export default Home;