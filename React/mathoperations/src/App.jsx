import { useState } from 'react'
import FirstInput from './components/Input/firstInput';
import SecondInput from './components/Input/secondInput';
import AddButton from './components/Button/add';
import SubtractionButton from './components/Button/subtraction';
import MultiplyButton from './components/Button/multiply';
import DividionButton from './components/Button/dividion';
import ResultSpan from './components/result';
function App() {

  let [firstInputValue, setFirstInputValue] = useState(0);
  let [secondInputValue, setSecondInputValue] = useState(0);

  let [result, setResult] = useState(0);
  return (
    <>
      <div className='d-flex column-gap-3 m-2'>
        <FirstInput setFirstInputValue={setFirstInputValue} value={firstInputValue} />
        <SecondInput setSecondInputValue={setSecondInputValue} value={secondInputValue} />
      </div>
      <div className='d-flex column-gap-3 m-2'>
        <AddButton firstInputValue={firstInputValue} secondInputValue={secondInputValue} setResult={setResult} />
        <SubtractionButton firstInputValue={firstInputValue} secondInputValue={secondInputValue} setResult={setResult} />
        <MultiplyButton firstInputValue={firstInputValue} secondInputValue={secondInputValue} setResult={setResult} />
        <DividionButton firstInputValue={firstInputValue} secondInputValue={secondInputValue} setResult={setResult} />
      </div>
      <div className='m-2'>

        <ResultSpan>{result}</ResultSpan>
      </div>

    </>
  )
}

export default App
