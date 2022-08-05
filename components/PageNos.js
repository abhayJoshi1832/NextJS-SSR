import React from 'react';
import styles from './CSS/PageNos.module.css';

function PageNos(props) {

  let totalPages = Math.ceil(props.totalCount/props.pageSize);
  let pageButtons = []
  //const handleClick = (newPage) =>{props.setPage(newPage)  }
  for (let i = 1; i <= totalPages; i++){
    pageButtons.push(
      <div className={props.page === i ? styles.pageBtnSelected: styles.pageBtn}
      onClick={() => props.setPage(i)}
      key= {i}>{i}</div>
    );

  }




  return (
    <div className={styles.pageHolder}>
      {[pageButtons]}

    </div>
  )
}

export default PageNos