import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

export function MaxWidthProvider({ className, children }: Props) {
  return (
    <div className={`max-w-[64.375rem] px-2 ${className}`}>{children}</div>
  );
}
