import { Text, Image, View, FlatList, Modal, Pressable} from 'react-native'
import { useState } from 'react'
import { router } from 'expo-router'
import { Menu, Repeat, ChevronRight, LogOut } from 'lucide-react-native'

const posts = [
  { id: '1', images: require('@/assets/images/profilepost/post1.jpg')},
  { id: '2', images: require('@/assets/images/profilepost/post2.jpg')},
  { id: '3', images: require('@/assets/images/profilepost/post3.jpg')},
  { id: '4', images: require('@/assets/images/profilepost/post4.jpg')},
  { id: '5', images: require('@/assets/images/profilepost/post5.jpg')},
  { id: '6', images: require('@/assets/images/profilepost/post6.jpg')},
  { id: '7', images: require('@/assets/images/profilepost/post7.jpg')},
  { id: '8', images: require('@/assets/images/profilepost/post8.jpg')},
  { id: '9', images: require('@/assets/images/profilepost/post9.jpg')},
];

export default function Profile() {
  const [open, setOpen] = useState(false)
  return (
  <View className='flex-1'>
      <View className='mt-10 flex-row justify-between px-4 pb-2 border-b border-[#EDE8E8] items-center'>
        <Text className='text-3xl font-extrabold tracking-tight'><Text className='text-[#232021]'>Z</Text><Text className='text-[#6B6466]'>i</Text><Text className='text-[#F472B6]'>n</Text><Text className='text-[#6D28D9]'>g</Text></Text>
        <Pressable className='p-2' onPress={() => setOpen(true)}>
          <Menu size={24} color='#232021' />
        </Pressable>
      </View>
    <View className='bg-[#F7F4F4] flex-1'>
      <FlatList
      data={posts}
      numColumns={3}
      keyExtractor={(item)=>item.id}

      renderItem={({ item }) => (
        <View className='w-1/3 aspect-square p-0.5'>
          <Image className='w-full h-full' source={item.images}/>
        </View>  
    )}
      ListHeaderComponent={
        <View className='border-b border-[#EDE8E8]'>

        <View className='h-52 overflow-hidden'>
          <Image className='w-full h-64 p-0.5' source={require('@/assets/images/coverphoto.jpg')}/>
        </View>

        <View className='items-center'>
          <Image className='w-32 h-32 rounded-full z-10 -mt-16' source={require('@/assets/images/profile.jpg')}/>
        </View>

        <View className='items-center mb-3'>
          <Text className='font-semibold text-[#232021] text-2xl '>Chad Hartley P. Roxas</Text>
          <Text className='text-lg text-[#4A4647]'>@orming21</Text>
          <Text className='text-lg text-[#4A4647]'>Bioflu</Text>

          <View className='flex-row w-full justify-center mt-5'>
            <View className='flex-1 items-center'><Text className='text-2xl font-semibold'>24</Text><Text className='text-lg text-[#4A4647]'>Posts</Text></View>
            <View className='flex-1 items-center'><Text className='text-2xl font-semibold'>318</Text><Text className='text-lg text-[#4A4647]'>Followers</Text></View>
            <View className='flex-1 items-center'><Text className='text-2xl font-semibold'>190</Text><Text className='text-lg text-[#4A4647]'>Following</Text></View>
         </View>
        </View>

        </View>
      }
      
    />
    </View>
    
    <Modal visible={open} transparent animationType='slide' onRequestClose={() => setOpen(false)}>
      <View className='flex-1 justify-end'>
        <Pressable className='absolute inset-0 bg-black/40' onPress={() => setOpen(false)} />
          <View className='bg-white rounded-t-3xl px-6 pt-3 pb-10'>            
            <View className='h-1 w-10 rounded-full bg-[#EDE8E8] self-center mb-4' />       

            <Pressable className='flex-row items-center py-4 border-b border-[#EDE8E8]'>   
              <Repeat size={22} color='#232021' />
              <Text className='ml-3 flex-1 text-base text-[#232021]'>Switch account</Text>
              <ChevronRight size={20} color='#9A9495' />
            </Pressable>

            <Pressable className='flex-row items-center py-4' onPress={() => router.replace('/login')}>  
              <LogOut size={22} color='#DC2626' />
              <Text className='ml-3 text-base text-red-600'>Log out</Text>
            </Pressable>
          </View>
      </View>
    </Modal>

  </View>
  )
  
  
}


