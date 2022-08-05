import React, {useState, useEffect}  from 'react';
import styles from './CSS/Table.module.css';
import ProductHolder from './ProductHolder';
import PageNos from './PageNos';
import CatSelect from './CatSelect';

const defaultCat = {
  all: true,
  investmentPurpose: false,
  firstHomeBuyers: false,
  refinanceHome: false,
  isGreenHomeLoan: false,
  allowsSplitLoan: false,
}

function Table({data}) {
  const [cat,setcat] = useState(defaultCat);
  const [page,setPage] = useState(1);
  const [apiData, setapiData] = useState({});
  const [loading,setloading] = useState(false);

  useEffect(() =>
  {
    if (page == 1) return;
    setloading(true);   
    const link2 = '/api/loans'+'?page='+page;

      const finalRes = async function()
      {
      const res = await fetch(link2);
      const data = await res.json();
      return data
      }();

    finalRes.then(data => setapiData(data)).then(()=>setloading(false));
  },[page])




  return (
    <div className={styles.containerOuter}> 

      <div className={styles.productHeader}>
          <div className={styles.productHeaderLeft}>
            Top Home Loan Products
          </div>
          <div className={styles.productHeaderRight}>
            <CatSelect {...{cat,setcat}}/>
          </div> 
      </div>

        <hr />


      <div className={styles.containerInner}>

        {(loading)? <h2>Loading....</h2>:
         <ProductHolder cat={cat} data={(page === 1)?data:apiData}></ProductHolder>
        }
        
      </div>

      <PageNos {...data.meta} page={page} setPage={setPage}></PageNos>

      

      
    </div>
  )
}

export default Table