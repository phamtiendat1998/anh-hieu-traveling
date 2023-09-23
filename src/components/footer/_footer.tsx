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
        <footer className={`${styles.footer}`}>
            <div className={`${styles.info}`}>
                <div className='text-center'>
                    <Image className={`${styles.img}`} src='/assets/footer-1.png' alt='Du lich Anh Hiếu' height={605} width={645}></Image>
                    <h3 className={`${styles.company} mb-4`}>Công ty TNHH MTV Du lịch Anh Hiếu</h3>
                    <p className={`${styles.sub}  mb-2`}>Địa chỉ: <strong>32A, Lý Tự Trọng, thành phố Pleiku, tỉnh Gia Lai</strong></p>
                    <p className={`${styles.sub}  mb-2`}>Liên hệ: <strong>0981 530 009 - 0985 035 897</strong></p>
                </div>
                <div className='flex flex-row items-center justify-center'>
                    <div className='m-2'>
                        <FacebookShareButton
                            url={'https://www.facebook.com/profile.php?id=100006188537389'}
                            quote={'Facebook'}
                            hashtag={'#facebook'}
                        >
                            <FacebookIcon size={30} round />
                        </FacebookShareButton>
                    </div>
                    <div className='m-2'>
                        <FacebookMessengerShareButton
                            url={'https://www.facebook.com'}
                            appId={'100006188537389'}
                        >
                            <FacebookMessengerIcon size={30} round />
                        </FacebookMessengerShareButton>
                    </div>
                    <div className='m-2'>
                        <EmailShareButton
                            url={'thisisdat1998@gmail.com'}
                            subject={'Du Lịch Tây Nguyên'}
                            body="body"
                        >
                            <EmailIcon size={30} round />
                        </EmailShareButton>
                    </div>
                </div>
                <hr className={`${styles.hr}`} />
                <div className={`${styles.nav} flex flex-row items-center justify-between`}>
                    <p>Du lịch Anh Hiếu</p>
                    <a href='#banner'>Trang chủ</a>
                    <a href='#4cho'>Xe 4 chỗ</a>
                    <a href='#7cho'>Xe 7 chỗ</a>
                    <a href='#16cho'>Xe 16 chỗ</a>
                    <a href='#29cho'>Xe 29 chỗ</a>
                    <p>Khu vực Tây Nguyên</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;