import "../../styles/Intro.css";
export default function IntroTextCard({ description }) {
  return (
    <>
      <div className="intro-text-card">
        <h2>{description.title}</h2>
        <p>{description.description}</p>
      </div>
    </>
  );
}
