# Isha Fashions - Responsive Design System

A modern, responsive website for Isha Fashions featuring automatic device detection and optimized layouts for desktop, tablet, and mobile devices.

## 🚀 Features

### Responsive Design
- **Automatic Device Detection**: Uses screen width to automatically determine device type
- **Three Device Variants**: Desktop (≥1024px), Tablet (≥768px), Mobile (<768px)
- **Optimized Layouts**: Each device type has its own optimized components and styling

### Device-Specific Optimizations

#### Desktop (≥1024px)
- Full navigation menu with hover effects
- Large hero section with dual call-to-action buttons
- 3-column grid layout for collections
- Comprehensive footer with 4 columns
- Enhanced spacing and typography
- Hover animations and transitions

#### Tablet (≥768px)
- Medium navigation with partial menu
- Responsive hero section
- Adaptive grid layout
- Compact footer with 2 columns
- Touch-friendly button sizes
- Balanced spacing for medium screens

#### Mobile (<768px)
- Compact header with hamburger menu
- Mobile-optimized hero section
- Single-column layout
- Stacked footer layout
- Touch-optimized interactions
- Optimized for small screens

## 🏗️ Project Structure

```
src/
├── components/
│   ├── layout/
│   │   ├── header-desktop.tsx      # Desktop header
│   │   ├── header-tablet.tsx       # Tablet header
│   │   ├── header-mobile.tsx       # Mobile header
│   │   ├── footer-desktop.tsx      # Desktop footer
│   │   ├── footer-tablet.tsx       # Tablet footer
│   │   ├── footer-mobile.tsx       # Mobile footer
│   │   └── responsive-layout.tsx   # Main responsive layout
│   ├── pages/
│   │   ├── home-desktop.tsx        # Desktop home page
│   │   ├── home-tablet.tsx         # Tablet home page
│   │   └── home-mobile.tsx         # Mobile home page
│   └── ui/                         # Reusable UI components
├── hooks/
│   └── use-device.ts               # Device detection hook
├── app/
│   ├── page.tsx                    # Main page (uses responsive layout)
│   ├── demo/page.tsx               # Demo page for testing
│   └── layout.tsx                  # Root layout
└── lib/
    └── utils.ts                    # Utility functions
```

## 🛠️ Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Components**: Custom UI components with shadcn/ui
- **Responsiveness**: Custom device detection hook

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Isha_fashions
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Demo Page

Visit `/demo` to see all three device versions side by side:
- Switch between desktop, tablet, and mobile views
- Compare layouts and features
- Test responsive behavior

## 🔧 How It Works

### Device Detection
The `useDevice` hook automatically detects the device type based on screen width:

```typescript
const deviceType = useDevice(); // Returns 'desktop' | 'tablet' | 'mobile'
```

### Responsive Layout
The `ResponsiveLayout` component automatically renders the appropriate components:

```typescript
export function ResponsiveLayout() {
  const deviceType = useDevice();
  
  const renderHeader = () => {
    switch (deviceType) {
      case 'desktop': return <HeaderDesktop />;
      case 'tablet': return <HeaderTablet />;
      case 'mobile': return <HeaderMobile />;
      default: return <HeaderDesktop />;
    }
  };
  
  // Similar logic for content and footer
}
```

### Component Variants
Each component has three variants optimized for different devices:

- **Desktop**: Full-featured with enhanced interactions
- **Tablet**: Balanced features with touch-friendly elements
- **Mobile**: Compact design with mobile-first approach

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1023px  
- **Desktop**: ≥ 1024px

## 🎨 Customization

### Adding New Device Variants
1. Create new component files (e.g., `header-watch.tsx`)
2. Add the variant to the `useDevice` hook
3. Update the `ResponsiveLayout` component

### Modifying Existing Variants
Each device variant is self-contained and can be modified independently:

```typescript
// Modify desktop-specific styling
export function HeaderDesktop() {
  return (
    <header className="h-24"> {/* Desktop height */}
      {/* Desktop content */}
    </header>
  );
}

// Modify mobile-specific styling  
export function HeaderMobile() {
  return (
    <header className="h-16"> {/* Mobile height */}
      {/* Mobile content */}
    </header>
  );
}
```

## 🧪 Testing

### Manual Testing
- Resize browser window to test responsive behavior
- Use browser dev tools device emulation
- Test on actual devices

### Demo Page Testing
- Visit `/demo` to test all variants
- Switch between device types
- Verify layout changes

## 🚀 Deployment

### Build
```bash
npm run build
# or
yarn build
```

### Production
```bash
npm start
# or
yarn start
```

## 📝 Key Benefits

1. **Performance**: Each device gets only the code it needs
2. **Maintainability**: Clear separation of device-specific logic
3. **User Experience**: Optimized for each device type
4. **Scalability**: Easy to add new device variants
5. **Testing**: Simple to test and debug each variant

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test on all device types
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For questions or support, please open an issue in the repository.

---

**Built with ❤️ for Isha Fashions** # IshaFashions
