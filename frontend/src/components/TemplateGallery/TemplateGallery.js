import React from "react";
import "./TemplateGallery.css";

const templates = [
  { id: 1, text: "Generate an image of a futuristic cityscape." },
  { id: 2, text: "Write a poem about AI and human creativity." },
  { id: 3, text: "Create a summary of a given research paper." },
  { id: 4, text: "Compose a melody inspired by space travel." },
];

const TemplateGallery = ({ onTemplateSelect }) => {
  return (
    <div className="template-gallery">
      <h2>Template Gallery</h2>
      <div className="templates">
        {templates.map((template) => (
          <button
            key={template.id}
            className="template-btn"
            onClick={() => onTemplateSelect(template.text)}
          >
            {template.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TemplateGallery;
