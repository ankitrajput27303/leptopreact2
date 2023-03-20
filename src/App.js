import './App.css';
import ArrayUsestate from './ArrayUsestate';
// import { add, sub, mult, div } from "./Calcul"
import BasicForm from './Componets/Forms/BasicForm';
import ShortCircuitEval from './ShortCircuitEval';
// import SumCalcul from './SumCalcul';
import ToggalUsestate from './ToggalUsesate';
import Usestate from './Usestate';

const App = () => {
  
  return (
    <>
    {/* <SumCalcul/> */}
    <Usestate/>
    <ToggalUsestate/>
    <ArrayUsestate/>
    <ShortCircuitEval/>
    <BasicForm/>
    </>
  );
}

export default App;