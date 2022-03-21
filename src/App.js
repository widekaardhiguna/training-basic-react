import Counter from "./components/Counter"

function App() {
  return (
    <>
      <Counter initialValue={5} step={3} />
      <Counter initialValue={10} step={10} />
      <Counter initialValue={15} />
    </>
  )
}

export default App
