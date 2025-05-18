import React from 'react'
import { TextInput, TextInputProps } from 'react-native'

function Input({...rest}: TextInputProps) {
  return (
    <TextInput
        className={` ${rest.className} text-lg z-10 placeholder:text-gray-400 focus:text-gray-600 border border-gray-500 rounded-lg bg-gray-50 focus:bg-white focus:border-black py-3 px-4 `}
        {...rest}
    />
  )
}

export default Input