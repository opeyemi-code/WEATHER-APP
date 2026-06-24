function TextButton({
  text,
  role,
  className,
  onClick,
}: {
  text: string;
  role?: string;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button className={className} onClick={onClick} role={role} type="button">
      {text}
    </button>
  );
}
export default TextButton;
