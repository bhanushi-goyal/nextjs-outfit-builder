import { FaTshirt } from 'react-icons/fa';
import { GiTrousers } from 'react-icons/gi';

// Utility to map hex colors to CSS filters
function colorToFilter(color) {
  switch (color) {
    case '#388e3c': // green
      return 'invert(35%) sepia(88%) saturate(278%) hue-rotate(72deg) brightness(95%) contrast(95%)';
    case '#1976d2': // blue
      return 'invert(33%) sepia(96%) saturate(1695%) hue-rotate(186deg) brightness(92%) contrast(95%)';
    case '#d32f2f': // red
      return 'invert(21%) sepia(94%) saturate(7465%) hue-rotate(356deg) brightness(85%) contrast(98%)';
    default: // gray
      return 'grayscale(100%) brightness(80%)';
  }
}

export function ShirtIcon({ color = '#d32f2f', size = 48 }) {
  return <FaTshirt color={color} size={size} />;
}

export function PantIcon({ color = '#1976d2', size = 48 }) {
  return <GiTrousers color={color} size={size} />;
}

export function ShoeIcon({ color = '#388e3c', size = 48 }) {
  return (
    <img
      src="/sport-shoe.png"
      alt="Shoe"
      width={size}
      height={size}
      style={{
        filter: colorToFilter(color),
        objectFit: 'contain',
      }}
    />
  );
}
