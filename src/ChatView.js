// ChatView.js
import React from "react";
import SubHeaderView from "./SubHeaderView";

function ChatView() {
  return (
    <div>
      {/* SubHeaderView */}
      <SubHeaderView
        title="Título del subencabezado"
        subtitle="Subtítulo del subencabezado"
      />

      {/* Contenido de ChatView */}
      <div>
        {/* Aquí puedes colocar el contenido específico de la vista de chat */}
      </div>
    </div>
  );
}

export default ChatView;
