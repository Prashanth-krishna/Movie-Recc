import "./header.css";

export default function Header(props) {
  return (
    <div className="header-container">
      <h2 className="header-text">{props.header}</h2>
    </div>
  );
}
