import Link from "next/link";

export default function Navbar(){

    return(
    <>
    <nav className='Navbar'>
        <div>
        <Link href={'/'}>Binary Scripter</Link>
        </div>
        <div>
        <Link href={'/addData'}>Add Data</Link>
        </div>
    </nav>
    
    </>
    )
}