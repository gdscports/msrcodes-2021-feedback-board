import * as React from 'react';
import Rating, {IconContainerProps} from '@material-ui/core/Rating';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

const customIcons: {
  [index: string]: {
    icon: React.ReactElement;
    label: string;
  };
} = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};

const IconContainer = (props: IconContainerProps) => {
  const {value, ...other} = props;
  return (
    <span {...other} style={{marginLeft: '1rem', marginRight: '1rem'}}>
      {customIcons[value].icon}
    </span>
  );
};

const RadioGroupRating = () => (
  <Rating
    defaultValue={3}
    IconContainerComponent={IconContainer}
    highlightSelectedOnly
    size="large"
    sx={{margin: 'auto'}}
  />
);

export default RadioGroupRating;
