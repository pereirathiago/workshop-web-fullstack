import { useState } from "react"

export function Create() {
    const [numero, setNumero] = useState(0)

    return (
        <>
            <p>{numero}</p>
            <button onClick={() => setNumero(numero + 1)}>Clica aqui</button>
        </>
    )
}