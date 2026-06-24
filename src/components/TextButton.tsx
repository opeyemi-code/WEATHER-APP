function TextButton({
  text,
  role,
  className,
}: {
  text: string;
  role?: string;
  className?: string;
  onClick?: React.DOMAttributes<HTMLButtonElement>;
}) {
  return (
    <button className={className} onClick={onClick} role={role} type="button">
      {text}
    </button>
  );
}
export default TextButton;
