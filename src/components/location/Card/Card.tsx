'use client'
import Image from 'next/image'
import resets from '../_resets.module.css';
import classes from './Card.module.css';
import { IconlyBoldLocation } from './IconlyBoldLocation/IconlyBoldLocation';
import { LocationIcon } from './LocationIcon';
import { useRouter } from 'next/navigation'

interface Props {
  className?: string;
  id: string;
  src: string;
  alt: string;
  name: string;
  location: string;
}

/* @figmaId 10:4781 */
export const Card = (props: Props) => {
  const router = useRouter();

  return (
    // <div className={`${resets.clapyResets} ${classes.root}`} onClick={() => router.push('/location/' + props.id)}>
    <div className={`${resets.clapyResets} ${classes.root}`} onClick={() => window.open('tel:0981530009')}>
      <div className={classes.boder}></div>
      <div className={classes.image}>
        <Image
          src={props.src}
          alt={props.alt}
          fill={true}
          priority
        />
      </div>
      <div className={classes.info}>
        <div className={classes.frame30}>
          <div className={classes.frame11}>
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
            <p className={classes.tPKonTum}>{props.location}</p>
          </div>
          <div className={classes.frame26}>
            <p className={classes.mangEn}>{props.name}</p>
          </div>
        </div>
        <p className={classes.AtXe}>Đặt xe</p>
      </div>
    </div >
  );
};
