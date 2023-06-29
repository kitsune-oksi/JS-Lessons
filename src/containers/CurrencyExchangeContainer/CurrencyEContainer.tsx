import React from 'react';
import CurrencyExchange from '../../components/CurrencyExchange/CurrencyExchange';
import {CurrencyState, CurrencyType} from '../../redux/currencyReducer';
import {
    ChangeActionAC,
    ChangeCurrencyFieldAC,
    СhangeCurrentCurrencyAC,
} from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {IGlobalState} from "../../redux/state";

export const CurrencyExchangeContainer: React.FC = () => {

    // const {
    //     currencies,
    //     currentCurrency,
    //     isBuying,
    //     amountOfBYN,
    //     amountOfCurrency,
    //     setCurrencyAmount,
    //     setAction,
    //     changeCurrency,
    // } = props;

    const dispatch = useDispatch();
    const currency = useSelector<IGlobalState, CurrencyState>(state => state.currency);
    const currencies = currency.currencies;
    const currentCurrency = currency.currentCurrency;
    const isBuying = currency.isBuying;
    const amountOfBYN = currency.amountOfBYN;
    const amountOfCurrency = currency.amountOfCurrency;

    let currencyRate: number = 0;
    const currenciesName = currencies.map((currency: CurrencyType) => {
        if (currency.currencyName === currentCurrency) {
            currencyRate = isBuying ? currency.buyRate : currency.sellRate;
        }
        return currency.currencyName;
    });

    const changeCurrencyField = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;
        if (!isFinite(+value)) return;
        if (e.currentTarget.dataset.currency) {
            const trigger: string = e.currentTarget.dataset.currency;
            if (trigger === 'byn') {
                if (value === '') {
                    // setCurrencyAmount(value, value);
                    dispatch(ChangeCurrencyFieldAC(value, value))
                } else {
                    // setCurrencyAmount(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2));
                    dispatch(ChangeCurrencyFieldAC(value, (+Number(value).toFixed(2) / currencyRate).toFixed(2)))
                }
            } else {
                if (value === '') {
                    // setCurrencyAmount(value, value);
                    dispatch(ChangeCurrencyFieldAC(value, value))
                } else {
                    // setCurrencyAmount((+Number(value).toFixed(2) * currencyRate).toFixed(2), value);
                    dispatch(ChangeCurrencyFieldAC((+Number(value).toFixed(2) * currencyRate).toFixed(2), value))
                }
            }
        }
    };
    const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {
        // e.currentTarget.dataset.action === 'buy' ? setAction(true) : setAction(false);
        e.currentTarget.dataset.action === 'buy' ? dispatch(ChangeActionAC(true)) : dispatch(ChangeActionAC(false));
    };

    const changeCurrentCurrency = (e: React.MouseEvent<HTMLLIElement>) => {
        // e.currentTarget.dataset.currency && changeCurrency(e.currentTarget.dataset.currency);
        e.currentTarget.dataset.currency && dispatch(СhangeCurrentCurrencyAC(e.currentTarget.dataset.currency));
        console.log(currentCurrency)
    };

    return (
        <React.Fragment>
            <CurrencyExchange
                currenciesName={currenciesName}
                currentCurrency={currentCurrency}
                currencyRate={currencyRate}
                isBuying={isBuying}
                amountOfBYN={amountOfBYN}
                amountOfCurrency={amountOfCurrency}
                changeCurrencyField={changeCurrencyField}
                changeAction={changeAction}
                changeCurrentCurrency={changeCurrentCurrency}
            />
        </React.Fragment>
    );
};

// const mapStateToProps = ({currency}: { currency: CurrencyState }): CurrencyState => {
//     return {
//         currencies: currency.currencies,
//         currentCurrency: currency.currentCurrency,
//         isBuying: currency.isBuying,
//         amountOfBYN: currency.amountOfBYN,
//         amountOfCurrency: currency.amountOfCurrency,
//     };
// };

// type MapDispatchToPropsType = {
//     setCurrencyAmount: (amountOfBYN: string, amountOfCurrency: string) => void
//     setAction: (isBuying: boolean) => void
//     changeCurrency: (currency: string) => void
// }

// type MapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>

// const mapDispatchToProps = (dispatch: Dispatch<CurrencyReducersTypes>): MapDispatchToPropsType => {
//     return {
//         setCurrencyAmount (amountOfBYN: string, amountOfCurrency: string) {
//             dispatch(ChangeCurrencyFieldAC(amountOfBYN, amountOfCurrency));
//         },
//         setAction (isBuying: boolean) {
//             dispatch(ChangeActionAC(isBuying));
//         },
//         changeCurrency (currency: string) {
//             dispatch(СhangeCurrentCurrencyAC(currency));
//         },
//     };
// };
//
// const connector = connect(mapStateToProps, mapDispatchToProps);


// const actionCreators = {
//     ChangeCurrencyFieldAC,
//     ChangeActionAC,
//     СhangeCurrentCurrencyAC
// }
//
// const connector = connect(mapStateToProps, actionCreators);
//
// type TProps = ConnectedProps<typeof connector>;
//
// export default connector(CurrencyEContainer);

