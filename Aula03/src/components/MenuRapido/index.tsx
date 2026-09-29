import { ScrollView } from 'react-native';
import { Center } from '@/components/ui/center';
import { Text } from '@/components/ui/text';

const itens = ['Pix', 'Pagar', 'Transferir', 'Recarga'];

export function MenuRapido() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="border-b border-gray-200"
      contentContainerClassName="py-5 px-4"
    >
      {itens.map((item) => (
        <Center key={item} className="w-20 h-20 rounded-full bg-gray-100 mr-2.5">
          <Text className="font-bold text-gray-800">{item}</Text>
        </Center>
      ))}
    </ScrollView>
  );
}
