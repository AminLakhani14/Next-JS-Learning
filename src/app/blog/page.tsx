"use client"
import Link from "next/link"
import { useRouter } from "next/navigation"

function Blog(){
    const router =useRouter()
    const routetoDetail=()=>{
        router.push('/about')
    }
    return (
        <>
            <h1>AMIN KI KUSS</h1>
            <Link href="/about">About</Link>
            <button onClick={routetoDetail}>click to view amin ki kuss</button>
        </>
    )
}
export default Blog