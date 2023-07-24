import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BgIcon } from './BgIcon';
import { Directions_bus } from './Directions_bus/Directions_bus';
import { FrameIcon } from './FrameIcon';
import { IconlyBoldLocation } from './IconlyBoldLocation/IconlyBoldLocation';
import classes from './Illus.module.css';
import { LocationIcon2 } from './LocationIcon2';
import { LocationIcon } from './LocationIcon';

interface Props {
  className?: string;
}
/* @figmaId 1:5654 */
export const Illus: FC<Props> = memo(function Illus(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle16}></div>
      <div className={classes.bg}>
        <BgIcon className={classes.icon3} />
      </div>
      <div className={classes.layer11}></div>
      <div className={classes.frame10}>
        <div className={classes.icBaselineFlight}>
          <Directions_bus />
        </div>
        <div className={classes.khapAtNuoc}>Khắp đất nước</div>
      </div>
      <div className={classes.frame11}>
        <div className={classes.frame}>
          <FrameIcon className={classes.icon4} />
        </div>
      </div>
      <div className={classes.rectangle8}></div>
      <div className={classes.rectangle9}></div>
      <div className={classes.frame12}>
        <div className={classes.nuiLuaChuAngYa}>Núi lửa Chư Đăng Ya</div>
        <div className={classes.frame112}>
          <IconlyBoldLocation
            className={classes.iconlyBoldLocation}
            classes={{ location: classes.location }}
            swap={{
              location: (
                <div className={classes.location}>
                  <LocationIcon className={classes.icon} />
                </div>
              ),
            }}
          />
          <div className={classes.giaLai}>Gia Lai</div>
        </div>
      </div>
      <div className={classes.rectangle82}></div>
      <div className={classes.rectangle92}></div>
      <div className={classes.frame122}>
        <div className={classes.bienHo}>Biển Hồ</div>
        <div className={classes.frame113}>
          <IconlyBoldLocation
            className={classes.iconlyBoldLocation2}
            classes={{ location: classes.location2 }}
            swap={{
              location: (
                <div className={classes.location2}>
                  <LocationIcon2 className={classes.icon2} />
                </div>
              ),
            }}
          />
          <div className={classes.pleikuGiaLai}>Pleiku, Gia lai</div>
        </div>
      </div>
    </div>
  );
});
