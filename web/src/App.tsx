

interface ButtonProps {
  title: string;
}

function Button(props: ButtonProps) {
  return (
    <button>
      {props.title}
    </button>
  )
}

function App() {
  return (
    <div>
      <button title="1"/>
      <button title="2"/>
      <button title="3"/>
    </div>
  )
}

export default App
