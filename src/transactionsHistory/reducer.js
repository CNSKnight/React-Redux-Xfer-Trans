import initData from '../data/transactions.json';

// describe our store
const transInit = {
    transactions: initData.data || []
};

// Transaction History Reducer
function transHistory(state = transInit, action) {
    let trans;
    switch (action.type) {
        case 'TRANS_CANCEL':
        case 'TRANS_LISTALL':
            return state;
        case 'TRANS_SELECT':
            // tbc
            break;
        case 'TRANS_ADD':
            trans = [...state.transactions];
            trans.unshift({
                amount: (+action.data.amount).toFixed(2),
                categoryCode: 'red',
                merchant: action.data.toAcct,
                transactionDate: (new Date()).getTime(),
                transactionType: 'Transfer'
            });
            return { transactions: trans }
        default:
            return state;
    }
}

export default transHistory;