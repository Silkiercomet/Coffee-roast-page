import { ReactNode } from 'react';
import style from "./MainBanner.module.css"

type BannerType = 'home-bg' | 'about-bg' | 'contact-bg';

interface MainBannerProps {
  children: ReactNode;
  type: BannerType;
}

const MainBanner = ({children, type} : MainBannerProps) => {
  return (
    <section className={`${type} ${style.banner}`}>
        {children}
    </section>
  )
}

export default MainBanner