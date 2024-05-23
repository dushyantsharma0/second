'use client'
import { useState } from "react"


const page = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>{count}</button>
        </div>
    )

}

export default page