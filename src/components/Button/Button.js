import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles/Button.css'

function Button(props) {
  const { href, children, className, ...otherProps } = props;
  const classes = `Button ${className}`;
  // If it's a link
  if (href) {
    return (
      <Link {...otherProps} to={href} className={classes}>
        { children }
      </Link>
    );
  }

  return (
    <button {...otherProps} className={classes}>
      { children }
    </button>
  )
}


Button.propTypes = {
  href: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  label: PropTypes.string,
};

Button.defaultProps = {
  href: '',
  className: '',
}

export default Button;