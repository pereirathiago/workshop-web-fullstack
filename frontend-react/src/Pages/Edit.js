import { useState } from "react"

export function Edit() {
    const [numero, setNumero] = useState(0)

    return (
        <>
            <p>{numero}</p>
            <button onClick={() => setNumero(numero + 1)}>Clica aqui</button>
        </>
    )
}