import React, { FormEvent, useState } from 'react'
import { EtherInput } from './scaffold-eth'
import { useScaffoldContractWrite, useScaffoldContractRead } from '~~/hooks/scaffold-eth'
import { parseEther, formatEther } from 'viem'
import { useAccount } from 'wagmi'

const UnwrapSepolia = () => {
  const [amount, setAmount] = useState("")
  const account = useAccount()

  const { writeAsync: wrapSep } = useScaffoldContractWrite({
    contractName: "YourContract",
    functionName: "withdraw",
    args: [parseEther(amount)],
  })

  const { data: balance } = useScaffoldContractRead({
    contractName: "YourContract",
    functionName: "balanceOf",
    args: [account.address]
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    wrapSep()
    setAmount("")
  }


  return (
    <form onSubmit={handleSubmit} className='max-w-sm mt-10 rounded-md w-11/12 p-2 bg-base-300'>
      <p className='text-center'> Unwrap Sepolia</p>
      <h1>{balance ? `Balance: ${formatEther(balance)} WSEP` : "Balance: 0 WSEP"}</h1>
      <EtherInput value={amount} onChange={(value) => { setAmount(value) }} />
      <button type="submit" disabled={amount === ""} className='btn btn-sm btn-primary rounded-md w-full mt-2'>UNWRAP</button>
    </form>
  )
}

export default UnwrapSepolia