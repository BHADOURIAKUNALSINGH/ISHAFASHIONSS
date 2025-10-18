# AWS Cognito Integration Setup Guide

## Prerequisites
- Node.js version 20 or above
- AWS Cognito User Pool configured
- AWS Cognito App Client configured

## Configuration Steps

### 1. Environment Variables
Create a `.env.local` file in your project root with the following variables:

```bash
# AWS Cognito Configuration
NEXT_PUBLIC_COGNITO_REGION=us-east-2
NEXT_PUBLIC_COGNITO_USER_POOL_ID=us-east-2_FmuDsuk4V
NEXT_PUBLIC_COGNITO_CLIENT_ID=4im29qd8o63qdahoomn2celiv3

# Cognito Client Secret (keep this secret!)
COGNITO_CLIENT_SECRET=your_actual_client_secret_here

# Cognito Domain and URLs
NEXT_PUBLIC_COGNITO_DOMAIN=https://d84l1y8p4kdic.cloudfront.net
NEXT_PUBLIC_COGNITO_REDIRUT_URI=https://d84l1y8p4kdic.cloudfront.net
NEXT_PUBLIC_COGNITO_LOGOUT_URI=your_actual_logout_uri_here

# App Configuration
NEXTAUTH_SECRET=your_nextauth_secret_here
NEXTAUTH_URL=https://d84l1y8p4kdic.cloudfront.net
```

### 2. Update Cognito Configuration
Edit `src/lib/cognito.ts` and replace the placeholder values:

```typescript
export const COGNITO_CONFIG = {
  region: process.env.NEXT_PUBLIC_COGNITO_REGION || 'us-east-2',
  userPoolId: process.env.NEXT_PUBLIC_COGNITO_USER_POOL_ID || 'us-east-2_FmuDsuk4V',
  clientId: process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID || '4im29qd8o63qdahoomn2celiv3',
  clientSecret: process.env.COGNITO_CLIENT_SECRET || '<your_client_secret>',
  domain: process.env.NEXT_PUBLIC_COGNITO_DOMAIN || 'https://d84l1y8p4kdic.cloudfront.net',
  redirectUri: process.env.NEXT_PUBLIC_COGNITO_REDIRECT_URI || 'https://d84l1y8p4kdic.cloudfront.net',
  logoutUri: process.env.NEXT_PUBLIC_COGNITO_LOGOUT_URI || '<your_logout_uri>',
};
```

### 3. AWS Cognito User Pool Configuration

#### App Client Settings:
- **Callback URLs**: Add your callback URL (e.g., `https://d84l1y8p4kdic.cloudfront.net/api/auth/callback`)
- **Logout URLs**: Add your logout URL
- **Allowed OAuth Flows**: Authorization code grant
- **Allowed OAuth Scopes**: openid, email, profile, phone

#### Domain Configuration:
- Configure your Cognito domain (e.g., `https://d84l1y8p4kdic.cloudfront.net`)

### 4. Integration in Your Components

#### Add Auth Button to Header:
```tsx
import { AuthButton } from '@/components/auth/auth-button';

// In your header component
<AuthButton />
```

#### Protect Routes:
```tsx
import { ProtectedRoute } from '@/components/auth/protected-route';

// Wrap protected content
<ProtectedRoute>
  <YourProtectedContent />
</ProtectedRoute>
```

#### Use Authentication Hook:
```tsx
import { useAuth } from '@/hooks/use-auth';

function MyComponent() {
  const { user, isAuthenticated, login, logout } = useAuth();
  
  // Your component logic
}
```

## Testing

1. Start your development server: `npm run dev`
2. Navigate to your site
3. Click "Sign In" to test Cognito authentication
4. After successful authentication, you should see user information

## Troubleshooting

- **Callback errors**: Check your Cognito app client callback URLs
- **State/nonce errors**: Ensure cookies are properly configured
- **CORS issues**: Verify your Cognito domain configuration
- **Token validation**: Check that your client secret is correct

## Security Notes

- Never expose your client secret in client-side code
- Use HTTPS in production
- Implement proper session management
- Consider implementing refresh token rotation 