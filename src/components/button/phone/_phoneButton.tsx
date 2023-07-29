import { memo } from 'react';
import type { FC } from 'react';

import resets from './_resets.module.css';
import classes from './_phoneButton.module.css';
import { Group1Icon } from './_group1Icon';
import { Phone } from './_phone';

interface Props {
  className?: string;
}
/* @figmaId 104:38 */
export const PhoneButton: FC<Props> = memo(function PhoneButton(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <p className={classes.lienHeNgay}>Liên hệ ngay</p>
      <div className={classes.line}>
        <Phone />
      </div>
      <div className={classes.group1}>
        <Group1Icon className={classes.icon} />
      </div>
    </div>
  );
});
