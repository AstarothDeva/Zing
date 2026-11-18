import Button from '@/src/components/button'
import Input from '@/src/components/input'
import { router } from 'expo-router'
import { Image, Text, Pressable, Switch, View } from 'react-native'

export default function Register() {
  return (
    <View className='flex-1 bg-white'>
      <View className='items-center pt-7 h-36 z-20'>
        <Image source={require('@/assets/images/zing-logo.png')} className='h-24 w-24' resizeMode='contain'/>
      </View>
      
      <View className='bg-white w-2/5 h-36 absolute top-0 left-0 rounded-bl-[45px] z-10'></View>
      <View className='bg-[#232021] w-2/5 absolute top-0 bottom-0 left-0 mb-24 rounded-br-[35px]'></View>

      <View className= 'flex-1 bg-[#232021] rounded-br-[30px] rounded-bl-[30px] rounded-tl-[30px]'>
        <View className='p-6 gap-10'>

          <View className='mt-10 bg-slate-600 rounded-full flex-row items-center justify-between'>
          <Pressable className='bg-slate-600 w-1/2 rounded-full items-center p-2' onPress={() => router.replace('/login')}> 
            <Text className='text-xl text-white'>Login</Text>
          </Pressable>
            <View className='bg-[#6D28D9] w-1/2 rounded-full items-center p-2'>
              <Text className='text-xl text-white'>Sign up</Text>
            </View>
          </View>
          
          <Input className='border-[#6D28D9] border-b' label='Name:'/>
          <Input className='border-[#6D28D9] border-b' label='Email:'/>
          <Input className='border-[#6D28D9] border-b' label='Password:' secureTextEntry={true}/>
          <Input className='border-[#6D28D9] border-b' label='Confirm Password:' secureTextEntry={true}/>
          <Button label='Register' onPress={() => router.replace('/login')}/>
        </View>
      </View>

    </View>
    
  )
}

/*
 <View className='p-6 gap-4'>
         <Input label='Name'/>
         <Input label='Email'/>
         <Input label='Password' secureTextEntry={true}/>
         <Input label='Confirm Password' secureTextEntry={true}/>
         <Button label='Register'/>
       </View>
*/