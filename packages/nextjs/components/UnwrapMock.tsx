import React, { FormEvent, useState } from 'react'
import { EtherInput } from './scaffold-eth'
import { InputBase } from './scaffold-eth'
import { useScaffoldContractWrite, useScaffoldContractRead } from '~~/hooks/scaffold-eth'
import { parseEther, formatEther } from 'viem'
import { useAccount } from 'wagmi'

const UnwrapMock = () => {
  const [amount, setAmount] = useState("")
  const account = useAccount()


  const { writeAsync: unwrapMock } = useScaffoldContractWrite({
    contractName: "WMOCK",
    functionName: "withdraw",
    args: [parseEther(amount)]
  })

  const { data: mockBalance } = useScaffoldContractRead({
    contractName: "MOCK",
    functionName: "balanceOf",
    args: [account.address]
  })



  const { data: wmockBalance } = useScaffoldContractRead({
    contractName: "WMOCK",
    functionName: "balanceOf",
    args: [account.address]
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    unwrapMock()
    setAmount("")
  }


  return (
    <form onSubmit={handleSubmit} className='max-w-sm mt-10 rounded-md w-11/12 p-2 bg-base-300'>
      <p className='text-center'> Unwrap Mock Token</p>

      <div className='flex gap-2'>
        <h1>{mockBalance ? `Balance: ${formatEther(mockBalance)} MOCK` : "Balance: 0 MOCK "}</h1>
        <h1>{wmockBalance ? `${formatEther(wmockBalance)} WMOCK` : "0 WMOCK "}</h1></div>

      <InputBase value={amount} onChange={value => { setAmount(value) }} />
      <button type="submit" disabled={amount === ""} className='btn btn-sm btn-accent rounded-md w-full mt-2'>UNWRAP</button>
    </form>
  )
}

export default UnwrapMock