import Link from "next/link"

function Products(){
    return (
        <>
            <h1>Products</h1>
            <Link href="products/key1">Product 1</Link>
            <Link href="products/key2">Product 2</Link>
        </>
    )
}
export default Products