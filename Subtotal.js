import React, { useState } from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';

function Subtotal({ history }) {
  const navigate = useNavigate();
  const [checkedInput, setCheckedInput] = useState([]);

  const changeHandler = (checked, id) => {
    if (checked) {
      setCheckedInput([...checkedInput, id]);
    } else {
      setCheckedInput(checkedInput.filter((input) => input !== id));
    }
  };
  const isChecked = checkedInput.length === 1;
  const disabled = !isChecked;
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              총 ({basket?.length} items) : <strong> {value} 원 </strong>
            </p>
            <label id="check" className="subtotal_gift">
              <input
                type="checkbox"
                id="check"
                onChange={(e) => {
                  changeHandler(e.currentTarget.checked, 'check');
                }}
                checked={checkedInput.includes('check') ? true : false}
              />
              결제 내용을 확인했습니다.
            </label>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
      />
      <button onClick={(e) => navigate('/payment')} disabled={disabled}>
        결제하기
      </button>
    </div>
  );
}

export default Subtotal;
