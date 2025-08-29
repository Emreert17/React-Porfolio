export default function LogoIcon({ src, alt }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          width: "50px",
          height: "50px",
          marginTop: "8px",
          marginLeft: "5px",
        }}
      >
        <img style={{ width: "100%", height: "100%" }} src={src} alt={alt} />
      </div>
    </>
  );
}
