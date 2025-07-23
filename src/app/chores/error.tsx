'use client';
import { Placeholer } from '@/components/placeholder';

export default function Error({ error }: { error: Error }) {
  return <Placeholer label={error.message || 'Something went wrong!'} />;
}
