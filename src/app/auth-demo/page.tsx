'use client';

import { useAuth } from '@/hooks/use-auth';
import { ProtectedRoute } from '@/components/auth/protected-route';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { LogOut, User, Mail, Shield } from 'lucide-react';

export default function AuthDemoPage() {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          AWS Cognito Authentication Demo
        </h1>
        
        <div className="grid gap-6 md:grid-cols-2">
          {/* Authentication Status */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5" />
                Authentication Status
              </CardTitle>
              <CardDescription>
                Current authentication state
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Status:</span>
                  <Badge variant={isAuthenticated ? "default" : "secondary"}>
                    {isAuthenticated ? "Authenticated" : "Not Authenticated"}
                  </Badge>
                </div>
                
                {isAuthenticated && (
                  <div className="pt-3 border-t">
                    <Button 
                      onClick={logout} 
                      variant="outline" 
                      className="w-full"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* User Information */}
          <ProtectedRoute
            fallback={
              <Card>
                <CardHeader>
                  <CardTitle>User Information</CardTitle>
                  <CardDescription>
                    Sign in to view your profile
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center py-8">
                    Please sign in to see your user information
                  </p>
                </CardContent>
              </Card>
            }
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  User Profile
                </CardTitle>
                <CardDescription>
                  Your Cognito user information
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {user?.picture && (
                    <div className="flex justify-center">
                      <img 
                        src={user.picture} 
                        alt="Profile" 
                        className="w-20 h-20 rounded-full"
                      />
                    </div>
                  )}
                  
                  <div className="space-y-2">
                    {user?.name && (
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{user.name}</span>
                      </div>
                    )}
                    
                    {user?.email && (
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{user.email}</span>
                      </div>
                    )}
                    
                    {user?.sub && (
                      <div className="pt-2">
                        <p className="text-xs text-muted-foreground">User ID:</p>
                        <p className="text-xs font-mono bg-muted p-2 rounded">
                          {user.sub}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </ProtectedRoute>
        </div>

        {/* Raw User Data */}
        {isAuthenticated && user && (
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Raw User Data</CardTitle>
              <CardDescription>
                Complete user information from Cognito
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="bg-muted p-4 rounded-lg overflow-auto text-xs">
                {JSON.stringify(user, null, 2)}
              </pre>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
} 