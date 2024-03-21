import React from 'react';

import styles from './Loading.module.scss';

const Loading = () => {
  return <div className={styles.loading} data-testid="loading" />;
};

export default Loading;
