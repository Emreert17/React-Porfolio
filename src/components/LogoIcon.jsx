import "../styles/LogoIcon.css";
export default function LogoIcon({ src, alt }) {
  return (
    <>
      <div className="logo-icon-container">
        <img src={src} alt={alt} />
      </div>
    </>
  );
}
