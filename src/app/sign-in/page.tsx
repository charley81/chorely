import Link from 'next/link';

import { CardCompact } from '@/components/card-compact';
import { SignInForm } from '@/features/auth/components/sign-in-form';
import { forgotPasswordPath, signUpPath } from '@/paths';

export default function SignInPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <CardCompact
        title="Sign In"
        description="Sign in to your account"
        content={<SignInForm />}
        className="animate-fade-in-from-top w-full max-w-[420px]"
        footer={
          <>
            <Link href={signUpPath()} className="text-muted-foreground text-sm">
              No account yet?
            </Link>
            <Link
              href={forgotPasswordPath()}
              className="text-muted-foreground text-sm"
            >
              Forgot Password
            </Link>
          </>
        }
      />
    </div>
  );
}
