import Image from 'next/image'
import styles from './page.module.css';
import { PhoneButton } from '@/components/button/phone/_phoneButton';
import { Illus } from '@/components/banner/people/Illus/Illus';
import { Vector99 } from '@/components/line/Vector99/Vector99';
import { Card } from '@/components/location/Card/Card';
import { WhySection } from '@/components/whySection/WhySection';
import { GallerySection } from '@/components/gallerySection/_gallerySection';
import { locationsConst } from '@/data/location';
import { ServiceCard } from '@/components/serviceCard/_serviceCard';
import { ScrollDown } from '@/components/scrollDown/_scrollDown';

export default function Home() {
  return (
    <main className={`${styles.main} min-h-screen`}>
      {/* Vector line */}
      <Vector99></Vector99>

      {/* Banner */}
      <div className={`${styles.banner} grid lg:grid-cols-1 xl:grid-cols-2 gap-10`}>
        <div className={`${styles.left} flex-1 flex flex-col xl:justify-center items-center xl:items-start`} >
          <p className='mb-4'>Bắt đầu chuyến đi của bạn ngay!</p>
          <span className='mb-8'>Lập kế hoạch và đặt chuyến đi hoàn hảo của bạn với phương tiện, mẹo du lịch, thông tin điểm đến và nguồn cảm hứng từ chúng tôi!</span>
          <PhoneButton></PhoneButton>
        </div>
        <div className={`${styles.right} flex-1 flex justify-center xl:justify-end xl:items-center`} >
          <Image src='/assets/illus.png' width={648} height={594} alt='Hãy chọn chúng tôi'></Image>
        </div>
      </div>

      {/* Service */}
      <div className={`${styles.service}`}>
        <p className='mb-4'>Dịch vụ</p>
        <span className='mb-8'>Các dịch vụ và sự uy tín mà chúng tôi mang lại.</span>
        <div className={`${styles.serviceList} mt-10 grid lg:grid-cols-1 xl:grid-cols-3 gap-10`}>
          <div className={`place-self-center`}><ServiceCard src='/assets/icon-1.png' alt='10 năm king nghiệm' title='Hơn 10 năm king nghiệm' text='Hơn 10 năm kinh nghiệm lái xe, chúng tôi tự hào cung cấp dịch vụ chuyên nghiệp, an toàn và đáng tin cậy để đồng hành cùng bạn.' ></ServiceCard></div>
          <div className={`place-self-center`}><ServiceCard src='/assets/icon-2.png' alt='Dịch vụ thuê xe' title='Dịch vụ thuê và cho thuê' text='Dịch vụ cho thuê xe và tự lái linh hoạt, đa dạng về loại xe, đáp ứng mọi nhu cầu di chuyển của bạn trên mọi cung đường đất nước.'></ServiceCard></div>
          <div className={`place-self-center`}><ServiceCard src='/assets/icon-3.png' alt='Xe đời mới' title='Mẫu mã xe đời mới' text='Với những dòng xe mới với thiết kế tinh tế và công nghệ tiên tiến, mang đến trải nghiệm lái đỉnh cao và phong cách độc đáo.'></ServiceCard></div>
        </div>
      </div>

      {/* Location List */}
      <div className={`${styles.popular}`}>
        <p className='mb-4'>Địa điểm phổ biến</p>
        <span className='mb-8'>Trải nghiệm các địa điểm thú vị tại Việt Nam, đặc biệt là Tây Nguyên với vẻ đẹp hùng vĩ.</span>
        <div className={`${styles.popularList} mt-6 grid lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4`}>
          {locationsConst.map(e => (
            <div key={e.id} className='place-self-center'>
              <Card id={e.id} src={e.thumnail} alt={e.name} name={e.name} location={e.location}></Card>
            </div>
          ))}
        </div>
      </div>

      {/* Why */}
      <div className={`${styles.why} grid lg:grid-cols-1 xl:grid-cols-2 gap-4`}>
        <div className={`${styles.left} place-self-center flex justify-center items-center`}>
          <Image src='/assets/illustrasi.png' width={550} height={550} alt='Hãy chọn chúng tôi'></Image>
        </div>
        <div className={`${styles.right} place-self-center`}>
          <p className='mb-4'>Tại sao lại chọn chúng tôi!</p>
          <span className='mb-8'>Tận hưởng những trải nghiệm khác nhau ở mọi nơi bạn đến thăm và tất nhiên là khám phá những cuộc phiêu lưu mới và giá cả phải chăng.</span>
          <WhySection type={1} boxShadow={true} title='Du lịch' sub='Tham quan các địa điểm mà bạn yêu cầu'></WhySection>
          <WhySection type={2} boxShadow={false} title='Dịch vụ đưa rước' sub='Đưa rước đám cưới, các sự kiện, ...'></WhySection>
          <WhySection type={3} boxShadow={false} title='Tất cả những gì bạn yêu cầu' sub='Bạn muốn đi đâu, chúng tôi đưa bạn đến đó'></WhySection>
        </div>
      </div>

      {/* Images */}
      <div className={`${styles.images}`}>
        <p className='mb-4'>Hình ảnh trải nghiệm thực tế</p>
        <span className='mb-  8'>Những hình ảnh nơi mà chúng tôi đã trải nghiệm cùng các đoàn khách ở khắp mọi nơi.</span>
        <div className={`${styles.gallery}`}>
          <GallerySection />
        </div>
      </div>
      
      <ScrollDown></ScrollDown>
    </main>
  )
}
