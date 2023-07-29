import { memo } from 'react';
import type { FC } from 'react';

import resets from './_resets.module.css';
import classes from './_phone.module.css';
import { VectorIcon } from './_vectorIcon';

interface Props {
    className?: string;
}
/* @figmaId 104:47 */
export const Phone: FC<Props> = memo(function Phone(props = {}) {
    return (
        <div className={`${resets.clapyResets} ${classes.root}`}>
            <VectorIcon className={classes.icon} />
        </div>
    );
});
