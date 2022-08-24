interface ButtonProps {
  color?: 'primary' | 'secondary' | 'danger' | 'success';
}

export function Button({color = 'primary'}: ButtonProps) {
  return (
    <button>Enviar</button>
  )
}