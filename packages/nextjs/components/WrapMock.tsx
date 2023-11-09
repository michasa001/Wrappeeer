import React, { FormEvent, useState } from 'react'
import { InputBase } from './scaffold-eth'
import { useScaffoldContractWrite, useScaffoldContractRead, useDeployedContractInfo } from '~~/hooks/scaffold-eth'
import { parseEther, formatEther } from 'viem'
import { useAccount } from 'wagmi'

const WrapMock = () => {
  const [amount, setAmount] = useState("")
  const account = useAccount()

  const { data: wmockData } = useDeployedContractInfo("WMOCK")

  const { writeAsync: wrapMock } = useScaffoldContractWrite({
    contractName: "WMOCK",
    functionName: "deposit",
    args: [parseEther(amount)]
  })

  const { writeAsync: mintMock } = useScaffoldContractWrite({
    contractName: "MOCK",
    functionName: "faucet",
    args: [account.address]
  })

  const { writeAsync: approve } = useScaffoldContractWrite({
    contractName: "MOCK",
    functionName: "approve",
    args: [wmockData?.address, parseEther(amount)]
  })

  const { data: mockBalance } = useScaffoldContractRead({
    contractName: "MOCK",
    functionName: "balanceOf",
    args: [account.address]
  })

  const { data: allowance } = useScaffoldContractRead({
    contractName: "MOCK",
    functionName: "allowance",
    args: [account.address, wmockData?.address]
  })

  const { data: wmockBalance } = useScaffoldContractRead({
    contractName: "WMOCK",
    functionName: "balanceOf",
    args: [account.address]
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    allowance && parseEther(amount) <= allowance ?
      wrapMock() : approve()
  }


  return (
    <form onSubmit={handleSubmit} className='max-w-sm mt-10 rounded-md w-11/12 p-2 bg-base-300'>
      <p className='text-center'> Wrap Mock Token</p>

      <div className='flex gap-2'>
        <h1>{mockBalance ? `Balance: ${formatEther(mockBalance)} MOCK` : "Balance: 0 MOCK "}</h1>
        <h1>{wmockBalance ? `${formatEther(wmockBalance)} WMOCK` : "0 WMOCK "}</h1></div>

      <InputBase value={amount} onChange={value => { setAmount(value) }} />
      <div className='flex justify-around'> <button onClick={() => mintMock()} className='btn btn-sm btn-accent rounded-md w-[45%] mt-2 mb-2'>MINT 100 MOCK</button>
        <button type="submit" disabled={amount === ""} className='btn btn-sm btn-accent rounded-md w-[45%]  mt-2'>{allowance && parseEther(amount) <= allowance ? "WRAP" : "APPROVE"}</button></div>

    </form>
  )
}

export default WrapMock