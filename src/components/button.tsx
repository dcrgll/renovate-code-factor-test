'use client';

export default function Button() {
  const onClick = () => {
    window.alert('hello from the button');
  };

  return (
    <button
      onClick={onClick}
      style={{
        padding: '0.5rem 1rem',
        backgroundColor: 'blue',
        color: 'white',
        border: 'none',
        borderRadius: '0.25rem',
      }}
    >
      Here is a button
    </button>
  );
}
