import React from 'react';
import styles from './CSS/CatSelect.module.css';

function CatSelect({cat, setcat}) 
{

    const handleClick = (category)=>
    {

        let newcat = {}
        if (category === 'all'){
            if (cat['all']) return;
            newcat.all = true;
            for(let element in cat) 
            {
                if(element!='all') newcat[element]=false;
            }
            setcat(newcat);
            return
        }

        newcat = {...cat, [category]: !cat[category]};

        let setAll = false;
        for (let element in cat)
        {
            if(element != 'all'){
                setAll = setAll || newcat[element];
                if (setAll) break
            }
        }
        newcat.all = !setAll
        setcat(newcat)
    }  

    

    




  return (
    <div className={styles.btnHolder}>
        <div className={(cat['all'])? styles.btnSelected:styles.btn}
        onClick={() => handleClick('all')}> All </div>

        <div className={(cat['refinanceHome'])? styles.btnSelected:styles.btn}
         onClick={() => handleClick('refinanceHome')}> Refinance </div>

        <div className={(cat['firstHomeBuyers'])? styles.btnSelected:styles.btn} onClick={() => handleClick('firstHomeBuyers')}> First Home Buyer </div>
        <div className={(cat['investmentPurpose'])? styles.btnSelected:styles.btn} onClick={() => handleClick('investmentPurpose')}> Investment </div>
        <div className={(cat['isGreenHomeLoan'])? styles.btnSelected:styles.btn} onClick={() => handleClick('isGreenHomeLoan')}> GreenHome </div>
        <div className={(cat['allowsSplitLoan'])? styles.btnSelected:styles.btn} onClick={() => handleClick('allowsSplitLoan')}> Split Loan </div>

    </div>
  )
}

export default CatSelect