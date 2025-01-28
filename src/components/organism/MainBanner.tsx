import { ReactNode } from 'react';

type BannerType = 'home-bg' | 'about-bg' | 'contact-bg';

interface MainBannerProps {
  children: ReactNode;
  type: BannerType;
}

const MainBanner = ({children, type} : MainBannerProps) => {
  return (
    <div className={`${type}`}>MainBanner
        {children}
    </div>
  )
}

export default MainBanner