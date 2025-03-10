import React from 'react';

// Función para determinar si el color es oscuro o claro
const isDarkColor = (hex: any) => {
  const rgb = parseInt(hex.replace("#", ""), 16);
  const r = (rgb >> 16) & 0xff;
  const g = (rgb >>  8) & 0xff;
  const b = (rgb >>  0) & 0xff;
  // Fórmula de luminosidad relativa
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance < 128;
};

const ColorVariationCards = () => {
  const colorVariations = [
    { shade: "50", hex: "#F0F7FF" },
    { shade: "100", hex: "#E0EFFF" },
    { shade: "200", hex: "#C2DFFF" },
    { shade: "300", hex: "#94C5FF" },
    { shade: "400", hex: "#6AABFF" },
    { shade: "500", hex: "#4f91e8" },
    { shade: "600", hex: "#3B74D9" },
    { shade: "700", hex: "#2B57B8" },
    { shade: "800", hex: "#1E3D8F" },
    { shade: "900", hex: "#142C6B" },
    { shade: "950", hex: "#0A1D4F" }
  ];

  return (
    <div className="w-full max-w-full p-4">
      <div className="flex flex-wrap gap-4 justify-center">
        {colorVariations.map((color) => (
          <div
            key={color.shade}
            className="rounded-lg overflow-hidden shadow-lg w-24"
            aria-label={`Color shade ${color.shade} with color ${color.hex}`}
          >
            <div
              className="h-24 flex items-center justify-center"
              style={{ backgroundColor: color.hex }}
            >
              <span className={`text-lg font-bold ${isDarkColor(color.hex) ? 'text-white' : 'text-gray-900'}`}>
                {color.hex}
              </span>
            </div>
            <div className="bg-white p-2 text-center">
              <p className="text-gray-700 font-semibold">{color.shade}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorVariationCards;