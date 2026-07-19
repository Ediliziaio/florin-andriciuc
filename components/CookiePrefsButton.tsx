"use client";

export function CookiePrefsButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event("fa:cookie-settings"))}
      className={className}
    >
      {children}
    </button>
  );
}
