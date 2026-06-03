function TextButton({
  text,
  role,
  className,
}: {
  text: string;
  role?: string;
  className?: string;
}) {
  return (
    <button className={className} role={role} type="button">
      {text}
    </button>
  );
}
export default TextButton;
