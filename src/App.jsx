import { useState , useEffect } from 'react'
import ReadContract from './components/ReadContract'
import WriteContract from './components/WriteContract'
import Web3 from 'web3'
import ABI from "./ABI/ABI.json"
import './App.css'
function App() {
  const [state, setState] = useState({web3:null,contract:null})
  useEffect(()=>{
    const template = async()=>{
      let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"))
      
      const contractAddress = "0x0f15EcD8fE57ce2Eb6157AA3aecf6504941C356E";
      const contractInstance = new web3.eth.Contract(ABI,contractAddress);
      setState({web3:web3,contract:contractInstance})
      
    }
    template()
  },[])
  return (
    <>
      <ReadContract state={state}/>
      <WriteContract state={state}/>
    </>
  ) 
}

export default App
