import React, { ChangeEvent } from 'react';
import { connect } from 'react-redux';

import './TextField.scss';

import getLabel from './getLabel';

interface DataType {
  [name: string]: string;
};
interface Params {
  data: DataType;
  name: string;
  dispatch: Function;
  changeValue: Function;
  fieldType?: string;
};

const TextField = ({ data, name, dispatch, changeValue, fieldType='text' }: Params) => {
  const value = data[name] || '';
  const inputId = `form-input__${name}`;
  const changed = (e: ChangeEvent<HTMLInputElement>) => {
    if (e && e.target) {
      changeValue({dispatch, key: name, value: e.target.value})
    }
  };
  return (
    <div className='text-field__container'>
      <label
        className='text-field__label'
        htmlFor={inputId}
        key={`${name}-label`}
      >
        {`${getLabel({name})}:`}
      </label>
      <input
        id={inputId}
        key={`${name}-field`}
        className={`text-field__input text-field__input--${name}`}
        type={fieldType}
        value={value || ''}
        onChange={changed}
      />
    </div>
  );
};

export default connect(state => ({}))(TextField);
