import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface BtnProps extends TouchableOpacityProps {
    label: string
}

export default function Button({label, ...props}: BtnProps) {
  return (
    <TouchableOpacity className='h-12 bg-[#8B5CF6] rounded-[25px] items-center justify-center mt-14' {...props}>
        <Text className='text-white uppercase text-2xl font-extrabold '>{label}</Text>
    </TouchableOpacity>
  )
}