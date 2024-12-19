type ButtonProps = {
  type: "button" | "submit" | "reset";
  onClick: () => void;
  text: string;
  disabled: boolean;
};

export function Button({ type, onClick, text, disabled }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={() => onClick()}
      className="border bg-black text-white px-4 py-4"
      disabled={disabled}
    >
      {text}
    </button>
  );
}
