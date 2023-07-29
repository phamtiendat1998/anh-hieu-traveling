import { memo } from 'react';
import type { FC } from 'react';

import resets from './_resets.module.css';
import classes from './WhySection.module.css';
import { FlightIcon } from './FlightIcon';
import { HotelIcon } from './HotelIcon';
import { PackageIcon } from './PackageIcon';

interface Props {
  className?: string;
  boxShadow: boolean;
  type: number;
  title: string;
  sub: string;
}
/* @figmaId 12:4949 */
export const WhySection: FC<Props> = memo(function WhySection(props: Props) {
  return (
    <div className={`${resets.clapyResets} ${classes.root} ${props.boxShadow ? classes.boxShadow : ''}`}>
      <div className={classes.icon}>
        {props.type == 1 && (<FlightIcon className={classes.icon2} />)}
        {props.type == 2 && (<HotelIcon className={classes.icon2} />)}
        {props.type == 3 && (<PackageIcon className={classes.icon2} />)}
      </div>
      <div className={classes.content}>
        <p className={classes.title}>{props.title}</p>
        <p className={classes.sub}>{props.sub}</p>
      </div>
    </div>
  );
});
