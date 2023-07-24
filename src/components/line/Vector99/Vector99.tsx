import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './Vector99.module.css';
import { Vector99Icon } from './Vector99Icon';

interface Props {
  className?: string;
}
/* @figmaId 1:3109 */
export const Vector99: FC<Props> = memo(function Vector99(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <>
        <Vector99Icon className={classes.icon} />
      </>
    </div>
  );
});
