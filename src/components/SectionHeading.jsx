import "../styles/SectionHeading.css";
export default function SectionHeading({ children }) {
  return (
    <>
      <h2 className="section-title">{children}</h2>
    </>
  );
}
