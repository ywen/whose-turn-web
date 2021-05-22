import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const AuthenticatedArea = ({ user, dispatch }) => {
  return (
    <div>
      Test
    </div>
  );
};

export default connect(state => ({}))(AuthenticatedArea);
