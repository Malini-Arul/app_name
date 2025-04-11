import React, { useState } from "react";
import "./styles.css";

function InfoSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded((prev) => !prev);
  };

  const shortText =
    "Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra...";

  const fullText =
    "Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna quis libero viverra facilisis ut ac est. Morbi commodo, eros in dignissim tempus, lacus odio rutrum augue, in semper sem magna quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit amet elit. Nunc egestas nisi eget enim gravida facilisis. Pellentesque laoreet varius turpis vel pharetra. Ut ante justo, consequat vitae elementum tempor, accumsan nec eros.";

  return (
    <section className="info-section" id="about">
      <div className="info-container">
        <h2 className="info-title">About me</h2>
        <p className="info-text">
          {isExpanded ? fullText : shortText}
          <span
            className="read-more"
            onClick={toggleReadMore}
            style={{ cursor: "pointer", color: "#00bcd4", marginLeft: "8px" }}
          >
            {isExpanded ? "Read less" : "Read more"}
          </span>
        </p>
      </div>
    </section>
  );
}

export default InfoSection;
