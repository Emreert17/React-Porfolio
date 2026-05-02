import "../../styles/LogoIcon.css";
export default function LogoIcon({ src, alt, style }) {
  return (
    <>
      <div className="logo-icon-container">
        <img src={src} alt={alt} style={style} />
      </div>
    </>
  );
}
