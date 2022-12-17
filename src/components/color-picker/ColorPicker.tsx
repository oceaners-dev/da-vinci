import React, { useState } from 'react'

export type ColorPickerProps = {
  color: string
  onChange: (color: string) => void
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color, onChange }) => {
  const [selectedColor, setSelectedColor] = useState(color)

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedColor(event.target.value)
    onChange(event.target.value)
  }

  return (
    <div style={{ position: 'relative' }}>
      <input
        type="color"
        value={selectedColor}
        onChange={handleColorChange}
        style={{
          appearance: 'none',
          width: '100%',
          height: '2rem',
          padding: '0.375rem 0.75rem',
          fontSize: '1rem',
          lineHeight: '1.5',
          color: '#495057',
          backgroundColor: '#fff',
          backgroundClip: 'padding-box',
          border: '1px solid #ced4da',
          borderRadius: '0.25rem',
          transition:
            'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
          outline: '0',
          boxShadow: '0 0 0 0.2rem rgba(0,123,255,0.25)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '0',
          right: '0',
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          padding: '0.375rem 0.75rem',
          color: '#6c757d',
          pointerEvents: 'none',
          backgroundColor: color,
        }}
      >
        <svg
          style={{
            fill: 'currentColor',
            height: '1.5rem',
            width: '1.5rem',
          }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  )
}

export { ColorPicker }
