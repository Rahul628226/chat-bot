import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

const Button = React.forwardRef(
  ({ className = "", variant = "default", size = "default", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <>
        <style>{`
          .botstart-button {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            gap: 0.5rem;
            white-space: nowrap;
            font-weight: 500;
            font-size: 0.875rem; /* text-sm */
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.2s;
          }

          /* Variants */
          .botstart-button-default { background: #2563eb; color: white; }
          .botstart-button-default:hover { background: #1d4ed8; }

          .botstart-button-destructive { background: #dc2626; color: white; }
          .botstart-button-destructive:hover { background: #b91c1c; }

          .botstart-button-outline {
            border: 1px solid #d1d5db;
            background: white;
            color: #111827;
          }
          .botstart-button-outline:hover { background: #f3f4f6; color: #111827; }

          .botstart-button-secondary { background: #e5e7eb; color: #111827; }
          .botstart-button-secondary:hover { background: #d1d5db; }

          .botstart-button-ghost { background: transparent; color: #111827; }
          .botstart-button-ghost:hover { background: #f3f4f6; }

          .botstart-button-link { background: transparent; color: #2563eb; text-decoration: underline; }
          .botstart-button-link:hover { text-decoration: underline; }

          .botstart-button-round { background: #e5e7eb; color: #111827; border-radius: 9999px; }
          .botstart-button-round:hover { background: #d1d5db; }

          /* Sizes */
          .botstart-button-default-size { height: 40px; padding: 0 16px; }
          .botstart-button-sm { height: 36px; padding: 0 12px; }
          .botstart-button-lg { height: 44px; padding: 0 32px; }
          .botstart-button-icon { height: 40px; width: 40px; padding: 0; }

          .botstart-button:disabled {
            pointer-events: none;
            opacity: 0.5;
          }
        `}</style>

        <Comp
          className={`botstart-button botstart-button-${variant} botstart-button-${size} ${className}`}
          ref={ref}
          {...props}
        />
      </>
    );
  }
);

Button.displayName = "Button";

export { Button };
