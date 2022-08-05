import React from 'react';
import styles from './CSS/ProductCard.module.css';


function ProductCard(props) {

    //console.log('inside Product card', props);
  return (
    <div className={styles.cardContainer}>

    
        <div className={styles.cardHeader}>{props.name}</div>
        <hr className={styles.line}/>

        <div className={styles.twoCols} >
            <div className={styles.rateHolderLeft}>
                <div className={styles.rateLabel}>Advertised rate</div>
                <div className={styles.rate}>{props.advertisedRate}%</div>
            </div>
            <div className={styles.rateHolderRight}>
                <div className={styles.rateLabel}>Comparison rate</div>
                <div className={styles.rate}>{props.comparisonRate}%</div>
            </div>
        </div>        
        <hr className={styles.line}/>
    

        <div className={styles.advantages}>
            {props.pros.map((line,index) => <div key={index}className={styles.adv1}>✔️ {line}</div> )}
        </div>

        <div className={styles.bottom}>
            <hr className={styles.line}/>
            <div className={styles.twoCols}>
                <div>
                    <input type ='checkbox' className={styles.checkBox}/>Compare
                </div>
                <div>
                    <a target='_blank' href={props.applyUrl}>More Information</a>                
                </div>
            
            </div>
            <hr className={styles.line}/>
            <div className={styles.twoCols}>

                <div className={styles.logo}>
                    <img className={styles.logoImg} src={props.companyLogo} alt="logo" />
                </div>

                <div>
                    <a target='_blank' href={props.applyUrl}>
                        <button className={styles.btn}>🔗Go to site</button>
                    </a>                
                </div>

            </div>
            <hr className={styles.line}/>


        </div>

    </div>
  )
}

export default ProductCard