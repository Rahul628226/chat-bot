import * as React from "react";

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <>
      <style>{`
        .botstart-input {
          flex: 1;
          height: 40px;
          width: 100%;
          border-radius: 8px;
          border: 1px solid #d1d5db; /* border-input equivalent */
          background: #f9fafb; /* background equivalent */
          padding: 8px 12px;
          font-size: 14px;
          color: #000;
        }
        .botstart-input::placeholder {
          color: #9ca3af; /* placeholder:text-muted-foreground */
        }
        .botstart-input:disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }
        .botstart-input:focus {
          outline: none;
          box-shadow: 0 0 0 0px transparent;
        }
      `}</style>
      <input
        type={type}
        className={`botstart-input ${className || ""}`}
        ref={ref}
        {...props}
      />
    </>
  );
});

Input.displayName = "Input";

export { Input };
