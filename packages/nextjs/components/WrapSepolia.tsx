import React, { FormEvent, useState } from 'react'
import { EtherInput } from './scaffold-eth'
import { useScaffoldContractWrite, useScaffoldContractRead } from '~~/hooks/scaffold-eth'
import { parseEther, formatEther } from 'viem'
import { useAccount } from 'wagmi'

const WrapSepolia = () => {
  const [amount, setAmount] = useState("")
  const account = useAccount()

  const { writeAsync: wrapSep } = useScaffoldContractWrite({
    contractName: "YourContract",
    functionName: "deposit",
    value: parseEther(amount),
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
    <form onSubmit={handleSubmit} className='max-w-sm rounded-md w-11/12 p-2 bg-base-300'>
      <p className='text-center'> Wrap Sepolia</p>
      <h1>{balance ? `Balance: ${formatEther(balance)} WSEP` : ""}</h1>
      <EtherInput value={amount} onChange={(value) => { setAmount(value) }} />
      <button type="submit" disabled={amount === ""} className='btn btn-sm btn-accent rounded-md w-full mt-2'>WRAP</button>
    </form>
  )
}

export default WrapSepolia