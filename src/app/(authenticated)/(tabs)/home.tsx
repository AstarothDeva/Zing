import { Text, Image, FlatList, View } from 'react-native'

const posts = [
  { id: '1', pfp: require('@/assets/images/pfp/pfp1.jpeg'), username: 'Elbert', caption: 'Sunrise!', images: [require('@/assets/images/posts/post1.jpeg')], time: '2h' },
  { id: '2', pfp: require('@/assets/images/pfp/pfp2.jpeg'), username: 'JayJay', caption: 'New screen done.', images: [require('@/assets/images/posts/post2.jpeg')], time: '6h' },
  { id: '3', pfp: require('@/assets/images/pfp/pfp3.jpeg'), username: 'Dingal', caption: 'Everybody Kung-fu fighting!', images: [require('@/assets/images/posts/post3.jpeg')], time: '1d' },
  { id: '4', pfp: require('@/assets/images/pfp/pfp4.jpeg'), username: 'JC', caption: 'New Episode of Attack on Titan is out1', images: [require('@/assets/images/posts/post4.jpeg')], time: '34m' },
  { id: '5', pfp: require('@/assets/images/pfp/pfp5.jpeg'), username: 'Dingal', caption: 'Let\'s play some games, any ladies available', images: [require('@/assets/images/posts/post5.1.jpg'), require('@/assets/images/posts/post5.2.jpg')], time: '34m' },
  { id: '6', pfp: require('@/assets/images/pfp/pfp6.jpeg'), username: 'JayJay', caption: 'New Hairstyle', images: [require('@/assets/images/posts/post6.jpeg')], time: '1m' },
];

export default function Home() {
  return (
    <View className='flex-1 bg-white'>
      <View className='mt-10 flex-row justify-between px-4 pb-2 border-b border-[#EDE8E8]'>
        <Text className='text-3xl font-extrabold tracking-tight'><Text className='text-[#232021]'>Z</Text><Text className='text-[#6B6466]'>i</Text><Text className='text-[#F472B6]'>n</Text><Text className='text-[#6D28D9]'>g</Text></Text>
        <Image className='h-6 w-6' source={require('@/assets/expo.icon/bell.png')} />
      </View>

      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
        <View className='bg-[#F7F4F4] rounded-3xl mx-4 mb-4 p-4'>
          <View className='flex-row justify-between'>
            <View className='flex-row items-center mb-1'>
              <Image className='h-11 w-11 rounded-full' source={item.pfp}/>
              <Text className='pl-2 text-base text-[#232021] font-semibold'>{item.username}</Text>
            </View>
            <Text className='text-[#9A9495] text-xs'>{item.time}</Text>
          </View>
          <View>
            <Text className='text-base text-[#4A4647] pt-1 '>{item.caption}</Text>
          </View>
          <View className='flex-row gap-1 mt-3 h-64 overflow-hidden rounded-2xl'>
            {item.images.map((img, index) => (
              <Image key={index} source={img} className='flex-1 h-80' resizeMode='cover' />
            ))}
          </View>
          <View className='flex-row'>
            <Image className='w-8 h-8 mt-2 mr-3' source={require('@/assets/expo.icon/heart.png')} />
            <Image className='w-8 h-8 mt-2 mr-3' source={require('@/assets/expo.icon/comment.png')} />
            <Image className='w-8 h-8 mt-2 mr-3' source={require('@/assets/expo.icon/send.png')} />
          </View>

        </View>

        )}
      />
      
    </View>
  )
}