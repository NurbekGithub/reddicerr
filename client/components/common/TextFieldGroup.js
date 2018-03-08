import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TextFieldGroup = ({ field, value, label, error, type, onChange }) => {
  return (
    <div className={classnames('form-group', {'has-error': error})}>
      <label className='control-label'>{ label }</label>
      <input 
        value={value}
        onChange={onChange}
        type={type}
        name={field}
        className='form-control'
      />
      {error && <span className='help-block'>{error}</span>}
    </div>
  )
}

TextFieldGroup.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

TextFieldGroup.defaultTypes = {
  type: 'text'
}

export default TextFieldGroup