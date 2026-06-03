const Button = ({ label, href, variant = "primary" }) => {
  const className = variant === "primary" ? "btn-primary" : "btn-outline";

  return (
    <a href={href} className={className}>
      {label}
    </a>
  );
};

export default Button;