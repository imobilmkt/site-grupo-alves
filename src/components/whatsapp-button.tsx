"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

type WhatsAppButtonProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "target" | "rel"> & {
  children: ReactNode;
};

export function WhatsAppButton({ children, onClick, ...props }: WhatsAppButtonProps) {
  return (
    <a
      {...props}
      target="_blank"
      rel="noreferrer"
      onClick={(event) => {
        if (typeof window.gtag_report_conversion === "function") {
          window.gtag_report_conversion();
        }
        onClick?.(event);
      }}
    >
      {children}
    </a>
  );
}
