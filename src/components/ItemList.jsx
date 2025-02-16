import Item from './Item';

function ItemList({products}) {
    return (
        <div className='grid'>
            {
                products.map( prod => <Item className="cell" key={prod.id} product={prod} />)
            }
        </div>
    )
}
export default ItemList;