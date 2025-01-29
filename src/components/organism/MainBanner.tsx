import { ReactNode } from 'react';

type BannerType = 'home-bg' | 'about-bg' | 'contact-bg';

interface MainBannerProps {
  children: ReactNode;
  type: BannerType;
}

const MainBanner = ({children, type} : MainBannerProps) => {
  return (
    <section className={`${type}`}>
        {children}
    </section>
  )
}

export default MainBanner