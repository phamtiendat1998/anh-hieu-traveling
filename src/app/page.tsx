'use client'
import Image from 'next/image'
import styles from './page.module.css';
import { PhoneButton } from '@/components/button/phone/_phoneButton';
import { Card } from '@/components/location/Card/Card';
import { GallerySection } from '@/components/gallerySection/_gallerySection';
import { locationsConst } from '@/data/location';
import { ServiceCard } from '@/components/serviceCard/_serviceCard';
import { motion } from 'framer-motion';
import { opacityVariants } from '@/var/_opacity.variant';
import { translateYVariants, translateYVariantsItem } from '@/var/_translateY.variant';

export default function Home() {
  return (
    <main className={`${styles.main} min-h-screen`}>
      {/* Banner */}
      <div id='banner' className={`${styles.banner} flex flex-col justify-center items-center`}>
        <h1>Bắt đầu chuyến đi của bạn ngay!</h1>
        <br />
        <p>Lập kế hoạch và đặt chuyến đi hoàn hảo của bạn với phương tiện, mẹo du lịch, thông tin điểm đến và nguồn cảm hứng từ chúng tôi!</p>
        <div className={`mt-5 flex justify-center items-center`}>
          <PhoneButton phone='0981 530 009'></PhoneButton>
          <PhoneButton phone='0985 035 897'></PhoneButton>
        </div>
      </div>

      {/* Intro */}
      <div className={`${styles.intro} grid lg:grid-cols-1 xl:grid-cols-2`}>
        <motion.div
          className={`${styles.left} flex-1 flex flex-col xl:justify-center items-center xl:items-end`}
          variants={opacityVariants}
          initial="hide"
          whileInView="show"
          exit="hide"
        >
          <Image src='https://firebasestorage.googleapis.com/v0/b/anh-hieu-traveling.appspot.com/o/home%2Fbanner.png?alt=media&token=c5ceaf61-7d5a-421a-b89e-e7e6a3196fbd' width={648} height={594} alt='Hãy chọn chúng tôi'></Image>
        </motion.div>
        <motion.div
          className={`${styles.right} flex-1 flex flex-col justify-center justify-center text-center`}
          variants={translateYVariants}
          initial="hide"
          whileInView="show"
          exit="hide"
        >
          <motion.h3
            variants={translateYVariantsItem}
            className='mb-4'
          >
            Các dịch vụ và sự uy tín mà chúng tôi mang lại.
          </motion.h3>
          <motion.span
            variants={translateYVariantsItem}
            className='mb-4'
          >
            Dịch vụ cho thuê xe và tự lái linh hoạt, đa dạng về loại xe, đáp ứng mọi nhu cầu di chuyển của bạn trên mọi cung đường đất nước. Với những dòng xe mới với thiết kế tinh tế và công nghệ tiên tiến, mang đến trải nghiệm lái đỉnh cao và phong cách độc đáo. Hơn 10 năm kinh nghiệm lái xe, chúng tôi tự hào cung cấp dịch vụ chuyên nghiệp, an toàn và đáng tin cậy để đồng hành cùng bạn.
          </motion.span>
          <motion.div
            className={`grid lg:grid-cols-1 xl:grid-cols-2 gap-10`}
          >
            <motion.div variants={translateYVariantsItem}>
              <h4>10+</h4>
              <p>Năm kinh nghiệm lái xe</p>
            </motion.div>
            <motion.div variants={translateYVariantsItem}>
              <h4>20+</h4>
              <p>Điểm đến đã đi</p>
            </motion.div>
            <motion.div variants={translateYVariantsItem}>
              <h4>3+</h4>
              <p>Phương tiện di chuyển</p>
            </motion.div>
            <motion.div variants={translateYVariantsItem}>
              <h4>32M+</h4>
              <p>Hành khách tin dùng</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
      {/* Vehical */}
      <div className={`${styles.vehical}`}>
        <motion.h3 variants={translateYVariants}
          initial="hide"
          whileInView="show"
          exit="hide" className='mb-4'>Phương tiện di chuyển</motion.h3>
        <motion.p variants={translateYVariants}
          initial="hide"
          whileInView="show"
          exit="hide" className='mb-8'>Với các dòng xe 4, 7, 16, 29 chỗ đời mới, chất lượng cao chuyên phục vụ khách hàng khó tính</motion.p>
        <motion.div className={`grid lg:grid-cols-1 xl:grid-cols-4 gap-10`}>
          <motion.div id='4cho' className={`${styles.vehicalItem}`} variants={translateYVariants}
            initial="hide"
            whileInView="show"
            exit="hide">
            <Image src='https://firebasestorage.googleapis.com/v0/b/anh-hieu-traveling.appspot.com/o/vehical%2F4cho.jpg?alt=media&token=8674e99e-505c-4aee-b033-b1df0cc373d3' fill={true} alt='Xe 4 chỗ'></Image>
            <h5>Xe 4 chỗ</h5>
            <a href='#'>Xem thêm</a>
          </motion.div>
          <motion.div id='7cho' className={`${styles.vehicalItem}`} variants={translateYVariants}
            initial="hide"
            whileInView="show"
            exit="hide">
            <Image src='https://firebasestorage.googleapis.com/v0/b/anh-hieu-traveling.appspot.com/o/vehical%2F7cho.jpg?alt=media&token=bb31db8a-d6fc-4408-8ca4-47f47edce177' fill={true} alt='Xe 7 chỗ'></Image>
            <h5>Xe 7 chỗ</h5>
            <a href='#'>Xem thêm</a>
          </motion.div>
          <motion.div id='16cho' className={`${styles.vehicalItem}`} variants={translateYVariants}
            initial="hide"
            whileInView="show"
            exit="hide">
            <Image src='https://firebasestorage.googleapis.com/v0/b/anh-hieu-traveling.appspot.com/o/vehical%2F16cho.jpg?alt=media&token=7676b3c0-551a-413d-91cf-66f557d31ab1' fill={true} alt='Xe 16 chỗ'></Image>
            <h5>Xe 16 chỗ</h5>
            <a href='#'>Xem thêm</a>
          </motion.div>
          <motion.div id='29cho' className={`${styles.vehicalItem}`} variants={translateYVariants}
            initial="hide"
            whileInView="show"
            exit="hide">
            <Image src='https://firebasestorage.googleapis.com/v0/b/anh-hieu-traveling.appspot.com/o/vehical%2F29cho-2.jpg?alt=media&token=105a570b-bfe9-4df8-9694-349632ea573b' fill={true} alt='Xe 29 chỗ'></Image>
            <h5>Xe 29 chỗ</h5>
            <a href='#'>Xem thêm</a>
          </motion.div>
        </motion.div>
      </div>

      {/* Service */}
      <div className={`${styles.service}`}>
        <motion.h3 variants={translateYVariants}
          initial="hide"
          whileInView="show"
          exit="hide" className='mb-4'>Cứ để chúng tôi lo</motion.h3>
        <motion.p variants={translateYVariants}
          initial="hide"
          whileInView="show"
          exit="hide" className='mb-8'>Đội ngũ tài xế, phục vụ dày dặn kinh nghiệm luôn đặt trải nghiệm khách hàng lên hàng đầu</motion.p>
        <motion.div variants={translateYVariants}
          initial="hide"
          whileInView="show"
          exit="hide" className={`${styles.serviceList} mt-10 grid lg:grid-cols-1 xl:grid-cols-3 gap-10`}>
          <motion.div variants={translateYVariants}
            initial="hide"
            whileInView="show"
            exit="hide" className={`place-self-center`}><ServiceCard src='/assets/service-1.png' alt='Thuê và cho thuê' bgDark title='Thuê và cho thuê' text='Chuyên cho thuê xe có tài và thuê xe tự lái.' ></ServiceCard></motion.div>
          <motion.div variants={translateYVariants}
            initial="hide"
            whileInView="show"
            exit="hide" className={`place-self-center`}><ServiceCard src='/assets/service-2.png' alt='Booking nơi ở' bgDark={false} title='Booking nơi ở' text='Hỗ trợ booking khách sạn, homstay, nhà hàng.'></ServiceCard></motion.div>
          <motion.div variants={translateYVariants}
            initial="hide"
            whileInView="show"
            exit="hide" className={`place-self-center`}><ServiceCard src='/assets/service-3.png' alt='Nhận hợp đồng' bgDark title='Nhận hợp đồng' text='Đám cưới, đám hỏi, du lịch trong và ngoài tỉnh.'></ServiceCard></motion.div>
        </motion.div>
      </div>

      {/* Location */}
      <div className={`${styles.location}`}>
        <motion.h3 variants={translateYVariants}
          initial="hide"
          whileInView="show"
          exit="hide" className='mb-4' >Địa chỉ văn phòng, nhà xe</motion.h3>
        <motion.p variants={translateYVariants}
          initial="hide"
          whileInView="show"
          exit="hide" className='mb-8'>Địa chỉ văn phòng, nhà xe thuận tiện cho việc đưa đón</motion.p>
        <motion.div className={`${styles.mapouter}`} variants={opacityVariants}
          initial="hide"
          whileInView="show"
          exit="hide">
          <div className="gmap_canvas">
            <iframe className="gmap_iframe" width="100%" height={"700px"} scrolling="no" src="https://maps.google.com/maps?width=650&amp;height=650&amp;hl=en&amp;q=du lich anh hieu gia lai&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            </iframe>
          </div>
        </motion.div>
      </div>

      {/* Poppular */}
      <div className={`${styles.popular}`}>
        <motion.h3 className='mb-4'>Địa điểm dành cho bạn</motion.h3>
        <motion.p className='mb-8'>Trải nghiệm các địa điểm thú vị tại Việt Nam, đặc biệt là Tây Nguyên với vẻ đẹp hùng vĩ.</motion.p>
        <div className={`${styles.popularList} mt-6 grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4`}>
          {locationsConst.map(e => (
            <motion.div key={e.id} variants={translateYVariants}
              initial="hide"
              whileInView="show"
              exit="hide" className='place-self-center'>
              <Card id={e.id} src={e.thumnail} alt={e.name} name={e.name} location={e.location}></Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Images */}
      <div className={`${styles.images}`}>
        <motion.h3 variants={translateYVariants}
          initial="hide"
          whileInView="show"
          exit="hide" className='mb-4'>Hình ảnh trải nghiệm thực tế</motion.h3>
        <motion.p variants={translateYVariants}
          initial="hide"
          whileInView="show"
          exit="hide" className='mb-8'>Những hình ảnh nơi mà chúng tôi đã trải nghiệm cùng các đoàn khách ở khắp mọi nơi</motion.p>
        <motion.div className={`${styles.gallery}`} variants={opacityVariants}
          initial="hide"
          whileInView="show"
          exit="hide">
          <GallerySection />
        </motion.div>
      </div>

      {/* <ScrollDown></ScrollDown> */}
    </main >
  )
}
