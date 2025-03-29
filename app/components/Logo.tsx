'use client';
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';
import cn from '@/app/utils/TailwindMergeAndClsx';

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const VEMIHeaderLogo = ({ className, children }: Props) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = async () => {
    if (pathname === '/') {
      window.location.reload();
      return;
    }
    router.push('/');
  };

  return (
    <div className={cn('fixed top-[32px] left-[32px] cursor-pointer', className)} onClick={handleClick}>
      <div className="text-white font-bold text-3xl">VEMI AI</div>
    </div>
  );
};

export default VEMIHeaderLogo;
