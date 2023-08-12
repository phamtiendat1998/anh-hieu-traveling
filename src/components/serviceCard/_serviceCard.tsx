import Image from 'next/image'
import styles from './_serviceCard.module.css';

type Prop = {
    src: string;
    alt: string;
    title: string;
    text: string;
}

export const ServiceCard = (props: Prop) => {
    return (
        <div className={`${styles.main}`}>
            <div className={`${styles.image}`}>
                <Image src={props.src} alt={props.alt} fill={true}></Image>
            </div>
            <p className='mt-8'>{props.title}</p>
            <span className='mt-8'>{props.text}</span>
        </div>
    )
}