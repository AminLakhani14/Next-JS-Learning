
function Products({params}: { params:any}){
    console.log(params,'params')
    return (
        <>
            <h1>Products {params.productid} details</h1>
        </>
    )
}
export default Products