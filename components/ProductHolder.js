import React from 'react';
import ProductCard from './ProductCard';
import styles from './CSS/ProductHolder.module.css';


function ProductHolder({cat,data}) {
    //console.log('data inside product holder: ', data );
    let filteredData;
    if (!cat.all){
      filteredData = data.hits.filter(
        elem =>
        {
        for(let key in cat)
        {
          if (cat[key] && !elem[key] )return false
        }
        return true;
      })
    }

    else filteredData = data.hits;


  return (
    <div className={styles.container}>

      {
      (!filteredData) ? 'Products not loaded from server: Api error':
      (filteredData.length === 0) ? 
      <>No suitable product found with current filters</> 
      :
      filteredData.map(elem=> <ProductCard key={elem.uuid} {...elem}></ProductCard>)
      
      
      }
 
        
    </div>
  )
}

export default ProductHolder