"use client"
import { useState } from 'react';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import { DEFAULT_AFTER_LOGIN_REDIRECT } from '@/lib/nextAuth';

interface FormTouched {
  email: boolean;
  password: boolean;
}

type FormErrors = {
  email?: string;
  password?: string;
};

export const useLoginHook = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [touched, setTouched] = useState<FormTouched>({
    email: false,
    password: false,
  });

  const navigate = useRouter();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: undefined }));
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (errors.password) {
      setErrors((prev) => ({ ...prev, password: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);
    setTouched({
      email: true,
      password: true,
    });
    return isValid;
  };

  const handleLoginWithGoogle = async () => {
    setIsLoading(true);
    try {
      const result = await signIn('google', { 
        callbackUrl: DEFAULT_AFTER_LOGIN_REDIRECT,
        redirect: true 
      });
      
      // If redirect is false and result is returned
      if (result && !result.ok) {
        throw new Error(result.error || 'Google sign-in failed');
      }
    } catch (error: any) {
      console.error('[Login] Google sign-in error:', error);
      toast.error(error?.message || 'Failed to sign in with Google');
      setIsLoading(false);
    }
  };

 

  const handleLogin = async (callbackUrl?: string) => {
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Clear any old tokens/cookies first
      localStorage.removeItem('accessToken');
      
      // Use API route for login to ensure cookies are properly set
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Include cookies
        body: JSON.stringify({
          email: email.trim(),
          password: password,
        }),
      });

      const result = await response.json();

      if (!response.ok || result.error) {
        const errorMessage = result.error || 'Login failed';
        console.log('[Login] Error message:', errorMessage);
        
        // Handle specific error messages
        if (errorMessage.toLowerCase().includes('verify') || 
            errorMessage.toLowerCase().includes('email verification')) {
          toast.error('Please verify your email before logging in');
          navigate.push(`/verify-email?email=${encodeURIComponent(email)}`);
        } else if (errorMessage.toLowerCase().includes('google') || 
                   errorMessage.toLowerCase().includes('oauth') ||
                   errorMessage.toLowerCase().includes('social')) {
          // User signed up with Google/OAuth
          toast.error(errorMessage, {
            duration: 5000,
            description: 'This account was created using a social login provider.'
          });
          setErrors((prev) => ({ ...prev, email: 'Please use the social login button below' }));
        } else if (errorMessage.toLowerCase().includes('not found') ||
                   errorMessage.toLowerCase().includes('no user') ||
                   errorMessage.toLowerCase().includes('does not exist')) {
          toast.error('Account not found. Please check your email or sign up.');
          setErrors((prev) => ({ ...prev, email: 'No account found with this email' }));
        } else if (errorMessage.toLowerCase().includes('invalid') && 
                   errorMessage.toLowerCase().includes('password')) {
          toast.error('Invalid email or password');
          setErrors((prev) => ({ ...prev, password: 'Invalid password' }));
        } else if (errorMessage.toLowerCase().includes('credentials')) {
          toast.error('Invalid email or password');
          setErrors((prev) => ({ 
            ...prev, 
            email: 'Invalid credentials',
            password: 'Invalid credentials'
          }));
        } else {
          // Show the actual error message from backend
          toast.error(errorMessage || 'Login failed');
          console.error('[Login] Backend error:', errorMessage);
        }
      } else if (result.accessToken && result.user) {
        // Login successful - cookies are now set in browser
        console.log('[Login] Login successful, cookies set');
        
        // Store access token in localStorage for Apollo Client
        localStorage.setItem('accessToken', result.accessToken);
        console.log('[Login] Access token stored in localStorage');
        
        // Create NextAuth session by calling signIn with user data
        // This will skip the login call in authorize since we pass accessToken and user
        const signInResult = await signIn('credentials', {
          redirect: false,
          email: email.trim(),
          password: password,
          // Pass user data to skip login call in authorize
          accessToken: result.accessToken,
          user: result.user,
        } as any);
        
        if (signInResult?.error) {
          console.warn('[Login] NextAuth session creation had error:', signInResult.error);
          // Continue anyway since cookies are set and token is in localStorage
        } else {
          console.log('[Login] NextAuth session created successfully');
        }
        
        // Refresh the session to ensure it's up to date
        const { getSession } = await import('next-auth/react');
        await getSession();
        
        // Check for callbackUrl from query params, otherwise use default
        const redirectPath = callbackUrl || DEFAULT_AFTER_LOGIN_REDIRECT;
        
        // Small delay to ensure session is created and propagated
        await new Promise(resolve => setTimeout(resolve, 200));
        
        // Redirect to the callback URL or default
        console.log("Redirecting to:", redirectPath);
        navigate.push(redirectPath);
      } else {
        toast.error('Login failed. Please try again.');
      }
    } catch (error: any) {
      console.error('[Login] Error:', error);
      toast.error(error?.message || 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const goToSignup = () => {
    navigate.push('/signup');
  };

  const goToForgotPassword = () => {
    navigate.push('/forget-password');
  };

  return {
    email,
    handleEmailChange,
    password,
    handlePasswordChange,
    rememberMe,
    setRememberMe,
    errors,
    isLoading,
    handleLogin,
    goToSignup,
    goToForgotPassword,
    touched,
    handleLoginWithGoogle
  };
};




