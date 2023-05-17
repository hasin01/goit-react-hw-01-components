import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';


export const TransactionHistory = ({items}) => {
    return (
        <table className="transaction-history">
          <thead className={css.thead}>
      <tr className={css.tr}>
      <th className={css.th}>Type</th>
      <th className={css.th}>Amount</th>
      <th className={css.th}>Currency</th>
    </tr>
  </thead>

        <thead >
          
           {items.map(({type,amount,currency,id}) => {
          return(
            <tr className={css.tr} key={id}>
            <th className={css.th}>{type}</th>
            <th className={css.th}>{amount}</th>
            <th className={css.th}>{currency}</th>
            </tr>
          )
          })}
            
         
        </thead>
      </table>
    );
  };


  TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape(
          {
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
            id: PropTypes.string.isRequired,
          }
        )
    )
}
export default TransactionHistory;