interface ColorPickerProps {
  selectedColor: string;
  onColorChange: (color: string) => void;
}

const COLORS = ['red', 'blue', 'green', 'purple', 'orange'] as const;

export function ColorPicker({ selectedColor, onColorChange }: ColorPickerProps) {
  return (
    <div className="color-picker">
      <p>Pick a color:</p>
      <div className="color-buttons">
        {COLORS.map((color) => (
          <button
            key={color}
            onClick={() => onColorChange(color)}
            style={{
              backgroundColor: color,
              border: selectedColor === color ? '3px solid #333' : '3px solid transparent',
            }}
            aria-label={`Select ${color}`}
            aria-pressed={selectedColor === color}
          />
        ))}
      </div>
    </div>
  );
}
