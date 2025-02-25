import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { IconButton } from '@edx/paragon';
import { ThumbUpOutline, ThumbDownOffAlt } from '@edx/paragon/icons';
import APIService from '../../../services/APIServices'

const VoteButton = ({
  unitId,
  courseId
}) => {

  const API = new APIService();
  
  useEffect(() => {
    if (unitId && courseId){
      API.visit(courseId, unitId);
    }
  }, [unitId, courseId]);
  
  const handleVoteClick = useCallback((value) => {
    API.vote(courseId, unitId, value);
  }, [unitId, courseId]);

  const buttonsData = [
    { name: 'like', icon: ThumbUpOutline, variant: 'primary', alt: 'I Like', value: 1 },
    { name: 'inlike', icon: ThumbDownOffAlt, variant: 'danger', alt: "I don't Like", value: -1 }
  ];

  return (
    <div>
      {buttonsData.map((button, index) => (
        <IconButton
          key={index}
          size="sm"
          iconAs={button.icon}
          onClick={() => handleVoteClick(button.value)}
          variant={button.variant}
          alt={button.alt}
        />
      ))}
    </div>
  );
};

VoteButton.propTypes = {
  unitId: PropTypes.string.isRequired,
  courseId: PropTypes.string.isRequired,
};

export default VoteButton;