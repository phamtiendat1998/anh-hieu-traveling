'use client'
import Image from 'next/image';
import styles from './_footer.module.css';
import {
    FacebookShareButton,
    FacebookIcon,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
    EmailShareButton,
    EmailIcon
} from 'next-share'

const Footer = () => {
    return (
        <footer className={`${styles.footer} flex justify-center items-center`}>
            <Image className={`${styles.img}`} src='/assets/footer-bg.png' alt='Du lich Anh Hiếu' height={605} width={645}></Image>
            <p className={`${styles.copy}`}>Copyright@2023</p>
            <div className={`${styles.info} ring-offset-2 ring-2 grid lg:grid-cols-1 xl:grid-cols-2 xl:divide-x`}>
                <div className='flex flex-col items-start justify-center'>
                    <p className={`${styles.company} mb-4`}>Công ty TNHH MTV Du lịch Anh Hiếu</p>
                    <p className={`${styles.sub}  mb-2`}><strong>Địa chỉ:</strong> 32A, Lý Tự Trọng, thànhh phố Pleiku, tỉnh Gia Lai</p>
                    <p className={`${styles.sub}  mb-2`}><strong>Liên hệ:</strong> 0981 530 009</p>
                </div>
                <div className='flex flex-row items-center justify-center'>
                    <div className='m-2'>
                        <FacebookShareButton
                            url={'https://github.com/next-share'}
                            quote={'next-share is a social share buttons for your next React apps.'}
                            hashtag={'#nextshare'}
                        >
                            <FacebookIcon size={50} round />
                        </FacebookShareButton>
                    </div>
                    <div className='m-2'>
                        <FacebookMessengerShareButton
                            url={'https://github.com/next-share'}
                            appId={''}
                        >
                            <FacebookMessengerIcon size={50} round />
                        </FacebookMessengerShareButton>
                    </div>
                    <div className='m-2'>
                        <EmailShareButton
                            url={'https://github.com/next-share'}
                            subject={'Next Share'}
                            body="body"
                        >
                            <EmailIcon size={50} round />
                        </EmailShareButton>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;