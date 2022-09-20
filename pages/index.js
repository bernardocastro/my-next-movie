import { useState } from 'react'

function Home() {
    return (
        <>
            <div>Home</div>
            <Contador />
        </>

    )
}

const Contador = () => {
    const [contador, setContador] = useState(1)

    const adicionarContador = () => {
        setContador(contador + 1)
    }

    return (
        <>
            <div>{contador}</div>
            <button onClick={adicionarContador}>Adicionar</button>
        </>
    )
}

export default Home