import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './IconlyBoldLocation.module.css';
import { LocationIcon } from './LocationIcon';

interface Props {
  className?: string;
  classes?: {
    location?: string;
    root?: string;
  };
  swap?: {
    location?: ReactNode;
  };
}
/* @figmaId 1:287 */
export const IconlyBoldLocation: FC<Props> = memo(function IconlyBoldLocation(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.location || ''} ${classes.location}`}>
        {props.swap?.location || <LocationIcon className={classes.icon} />}
      </div>
    </div>
  );
});
