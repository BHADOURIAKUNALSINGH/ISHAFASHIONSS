'use client';
import { useState } from 'react';
import { HomeDesktop } from '@/components/pages/home-desktop';
import { HomeTablet } from '@/components/pages/home-tablet';
import { HomeMobile } from '@/components/pages/home-mobile';
import { HeaderDesktop } from '@/components/layout/header-desktop';
import { HeaderTablet } from '@/components/layout/header-tablet';
import { HeaderMobile } from '@/components/layout/header-mobile';
import { FooterDesktop } from '@/components/layout/footer-desktop';
import { FooterTablet } from '@/components/layout/footer-tablet';
import { FooterMobile } from '@/components/layout/footer-mobile';
import { Button } from '@/components/ui/button';
import { Monitor, Tablet, Smartphone } from 'lucide-react';

export default function DemoPage() {
  const [selectedDevice, setSelectedDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  const renderContent = () => {
    switch (selectedDevice) {
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

  const renderHeader = () => {
    switch (selectedDevice) {
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

  const renderFooter = () => {
    switch (selectedDevice) {
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
    <div className="min-h-screen bg-gray-100">
      {/* Device Selector */}
      <div className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-center space-x-4">
            <Button
              variant={selectedDevice === 'desktop' ? 'default' : 'outline'}
              onClick={() => setSelectedDevice('desktop')}
              className="flex items-center gap-2"
            >
              <Monitor className="h-4 w-4" />
              Desktop
            </Button>
            <Button
              variant={selectedDevice === 'tablet' ? 'default' : 'outline'}
              onClick={() => setSelectedDevice('tablet')}
              className="flex items-center gap-2"
            >
              <Tablet className="h-4 w-4" />
              Tablet
            </Button>
            <Button
              variant={selectedDevice === 'mobile' ? 'default' : 'outline'}
              onClick={() => setSelectedDevice('mobile')}
              className="flex items-center gap-2"
            >
              <Smartphone className="h-4 w-4" />
              Mobile
            </Button>
          </div>
          <div className="text-center mt-2">
            <p className="text-sm text-muted-foreground">
              Currently viewing: <span className="font-semibold capitalize">{selectedDevice}</span> version
            </p>
          </div>
        </div>
      </div>

      {/* Responsive Preview */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Responsive Design Preview
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            This demo shows how the Isha Fashions website adapts to different device types. 
            Use the buttons above to switch between desktop, tablet, and mobile views.
          </p>
        </div>

        {/* Device Frame */}
        <div className="flex justify-center">
          <div
            className={`bg-white rounded-lg shadow-2xl overflow-hidden transition-all duration-300 ${
              selectedDevice === 'desktop'
                ? 'w-full max-w-7xl'
                : selectedDevice === 'tablet'
                ? 'w-full max-w-4xl'
                : 'w-full max-w-sm'
            }`}
          >
            {/* Device Frame Header */}
            <div className="bg-gray-800 px-4 py-2 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-white text-sm font-medium">
                {selectedDevice === 'desktop' && 'Desktop View'}
                {selectedDevice === 'tablet' && 'Tablet View'}
                {selectedDevice === 'mobile' && 'Mobile View'}
              </div>
              <div className="w-16"></div>
            </div>

            {/* Content Area */}
            <div className="relative">
              {renderHeader()}
              <main className="flex-grow">{renderContent()}</main>
              {renderFooter()}
            </div>
          </div>
        </div>

        {/* Device Info */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {selectedDevice === 'desktop' && 'Desktop Features'}
              {selectedDevice === 'tablet' && 'Tablet Features'}
              {selectedDevice === 'mobile' && 'Mobile Features'}
            </h3>
            <div className="text-sm text-gray-600 space-y-1">
              {selectedDevice === 'desktop' && (
                <>
                  <p>• Full navigation menu with hover effects</p>
                  <p>• Large hero section with dual call-to-action buttons</p>
                  <p>• 3-column grid layout for collections</p>
                  <p>• Comprehensive footer with 4 columns</p>
                  <p>• Enhanced spacing and typography</p>
                </>
              )}
              {selectedDevice === 'tablet' && (
                <>
                  <p>• Medium navigation with partial menu</p>
                  <p>• Responsive hero section</p>
                  <p>• Adaptive grid layout</p>
                  <p>• Compact footer with 2 columns</p>
                  <p>• Touch-friendly button sizes</p>
                </>
              )}
              {selectedDevice === 'mobile' && (
                <>
                  <p>• Compact header with hamburger menu</p>
                  <p>• Mobile-optimized hero section</p>
                  <p>• Single-column layout</p>
                  <p>• Stacked footer layout</p>
                  <p>• Touch-optimized interactions</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 