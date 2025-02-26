import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import APIService from '../../../services/APIServices';

const VoteButton = ({
  unitId,
  courseId,
}) => {
  const API = new APIService();

  useEffect(() => {
    if (unitId && courseId) {
      API.visit(courseId, unitId);
    }
  }, [unitId, courseId]);

  return (
    <div>
      &nbsp;
    </div>
  );
};

VoteButton.propTypes = {
  unitId: PropTypes.string.isRequired,
  courseId: PropTypes.string.isRequired,
};

export default VoteButton;
