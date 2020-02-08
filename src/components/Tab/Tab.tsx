import React, { FunctionComponent } from 'react';
import './Tab.scss';

interface Props {
  isTab: boolean,
  click: any,
  children: any,
}

const Tabs: FunctionComponent<Props> = ({ isTab, children, click }) => {
  return (
    <div className={`tab ${isTab ? 'active' : ''}`} onClick={click}>{children}</div>
  );
}

export default React.memo(Tabs, () => false);
