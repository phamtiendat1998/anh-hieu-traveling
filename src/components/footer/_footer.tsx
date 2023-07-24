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
            <div className={`${styles.info} ring-offset-2 ring-2 grid grid-cols-2 divide-x`}>
                <div className='flex flex-col items-start justify-center'>
                    <p className={`${styles.company} mb-4`}>Công ty TNHH MTV Du lịch Anh Hiếu</p>
                    <p className={`mb-2`}><strong>Địa chỉ:</strong> Thôn 6, xã Nghĩa Hưng, huyện Chư Păh, tỉnh Gia Lai</p>
                    <p className={`mb-2`}><strong>Liên hệ:</strong> 0981 530 009</p>
                </div>
                <div className='flex flex-row items-center justify-center'>
                    <div className='m-2'>
                        <FacebookShareButton
                            url={'https://github.com/next-share'}
                            quote={'next-share is a social share buttons for your next React apps.'}
                            hashtag={'#nextshare'}
                        >
                            <FacebookIcon size={60} round />
                        </FacebookShareButton>
                    </div>
                    <div className='m-2'>
                        <FacebookMessengerShareButton
                            url={'https://github.com/next-share'}
                            appId={''}
                        >
                            <FacebookMessengerIcon size={60} round />
                        </FacebookMessengerShareButton>
                    </div>
                    <div className='m-2'>
                        <EmailShareButton
                            url={'https://github.com/next-share'}
                            subject={'Next Share'}
                            body="body"
                        >
                            <EmailIcon size={60} round />
                        </EmailShareButton>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;