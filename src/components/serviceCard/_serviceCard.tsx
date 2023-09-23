import Image from 'next/image'
import styles from './_serviceCard.module.css';

type Prop = {
    bgDark: boolean;
    src: string;
    alt: string;
    title: string;
    text: string;
}

export const ServiceCard = (props: Prop) => {
    return (
        <div className={`${styles.main} ${props.bgDark ? styles.bgDark : ""}`}>
            <div className={`${styles.image}`}>
                <Image src={props.src} alt={props.alt} fill={true}></Image>
            </div>
            <h5 className='mt-5'>{props.title}</h5>
            <p className='mt-8'>{props.text}</p>
        </div>
    )
}