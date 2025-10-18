'use client';
import { useDevice } from '@/hooks/use-device';
import { HeaderDesktop } from './header-desktop';
import { HeaderTablet } from './header-tablet';
import { HeaderMobile } from './header-mobile';
import { FooterDesktop } from './footer-desktop';
import { FooterTablet } from './footer-tablet';
import { FooterMobile } from './footer-mobile';
import { HomeDesktop } from '../pages/home-desktop';
import { HomeTablet } from '../pages/home-tablet';
import { HomeMobile } from '../pages/home-mobile';

export function ResponsiveLayout() {
  const deviceType = useDevice();

  const renderHeader = () => {
    switch (deviceType) {
      case 'desktop':
        return <HeaderDesktop />;
      case 'tablet':
        return <HeaderTablet />;
      case 'mobile':
        return <HeaderMobile />;
      default:
        return <HeaderDesktop />;
    }
  };

  const renderContent = () => {
    switch (deviceType) {
      case 'desktop':
        return <HomeDesktop />;
      case 'tablet':
        return <HomeTablet />;
      case 'mobile':
        return <HomeMobile />;
      default:
        return <HomeDesktop />;
    }
  };

  const renderFooter = () => {
    switch (deviceType) {
      case 'desktop':
        return <FooterDesktop />;
      case 'tablet':
        return <FooterTablet />;
      case 'mobile':
        return <FooterMobile />;
      default:
        return <FooterDesktop />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden">
      {renderHeader()}
      <main className="flex-grow overflow-x-hidden">{renderContent()}</main>
      {renderFooter()}
    </div>
  );
} 