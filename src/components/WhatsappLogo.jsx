import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function WhatsappLogo() {
  return (
    <div className="fixed bottom-4 right-4 z-50 bg-green-500 rounded-full">
      <FaWhatsapp className="text-white text-6xl p-3" />
    </div>
  );
}

export default WhatsappLogo;
