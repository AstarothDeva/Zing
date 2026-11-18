import { Text, TextInput, TextInputProps, View } from 'react-native'

interface InputProps extends TextInputProps {
    label: string
}

export default function Input({ label, ...props }: InputProps) {
    return (
        <View>
            <Text className='text-slate-400'>{label}</Text>
            <TextInput {...props} />
        </View>
    )
}