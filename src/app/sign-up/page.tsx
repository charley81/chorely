import Link from 'next/link';

import { CardCompact } from '@/components/card-compact';
import { SignUpForm } from '@/features/auth/components/sign-up-form';
import { signInPath } from '@/paths';

export default function SignUpPage() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <CardCompact
        title="Sign up"
        description="Create an account to get started"
        content={<SignUpForm />}
        className="animate-fade-in-from-top w-full max-w-[420px]"
        footer={
          <Link href={signInPath()} className="text-muted-foreground text-sm">
            Have an account? Sign in now
          </Link>
        }
      />
    </div>
  );
}
