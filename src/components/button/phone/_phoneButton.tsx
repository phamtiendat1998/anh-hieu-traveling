'use client'
import { memo } from 'react';
import type { FC } from 'react';
import resets from './_resets.module.css';
import classes from './_phoneButton.module.css';
import { Group1Icon } from './_group1Icon';
import { Phone } from './_phone';

interface Props {
  className?: string;
  phone: string;
}
/* @figmaId 104:38 */
export const PhoneButton: FC<Props> = memo(function PhoneButton(props: Props) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`} onClick={() => window.open('tel:0981530009')}>
      <h5 className={classes.lienHeNgay}>{props.phone}</h5>
      <div className={classes.line}>
        <Phone />
      </div>
    </div>
  );
});
