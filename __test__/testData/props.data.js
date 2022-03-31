import React from 'react';

export default {
  data: {
    data1: 'this is data1',
    data2: 'this is data2'
  },
  option1: {
    transform: () => undefined
  },
  option2: {
    transform: () => null
  },
  option3: {
    transform: () => React.createElement('div', null, 'transform')
  }
};
