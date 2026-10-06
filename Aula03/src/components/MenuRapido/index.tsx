import { ScrollView } from 'react-native';
import { VStack } from '@/components/ui/vstack';
import { Center } from '@/components/ui/center';
import { Text } from '@/components/ui/text';
import { Pressable } from '@/components/ui/pressable';
import { Icon } from '@/components/ui/icon';
import { QrCode, Receipt, Send, Landmark, Smartphone, HandCoins } from 'lucide-react-native';

const itens = [
  { nome: 'Pix', icone: QrCode },
  { nome: 'Pagar', icone: Receipt },
  { nome: 'Transferir', icone: Send },
  { nome: 'Depositar', icone: Landmark },
  { nome: 'Recarga', icone: Smartphone },
  { nome: 'Cobrar', icone: HandCoins },
];

export function MenuRapido() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mt-4"
      contentContainerClassName="px-4"
    >
      {itens.map((item) => (
        <Pressable key={item.nome} className="mr-4">
          <VStack className="items-center">
            <Center className="w-[68px] h-[68px] rounded-full bg-white">
              <Icon as={item.icone} size="lg" className="text-[#820AD1]" />
            </Center>
            <Text className="mt-2 text-xs font-semibold text-gray-800">
              {item.nome}
            </Text>
          </VStack>
        </Pressable>
      ))}
    </ScrollView>
  );
}
