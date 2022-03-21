import Counter from "../components/Counter"

const CounterPage = () => {
  return (
    <>
      <Counter initialValue={5} />
      <Counter initialValue={10} step={5} />
      <Counter initialValue={15} step={7} />
    </>
  )
}

export default CounterPage
