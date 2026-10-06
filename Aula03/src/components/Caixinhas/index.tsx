import { ScrollView } from 'react-native';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Pressable } from '@/components/ui/pressable';
import { Icon } from '@/components/ui/icon';
import { Plane, Smartphone, PiggyBank } from 'lucide-react-native';

const caixinhas = [
  { nome: 'Viagem', icone: Plane, guardado: 'R$ 800,00', meta: 'Meta R$ 2.000', largura: 'w-[40%]' },
  { nome: 'Celular novo', icone: Smartphone, guardado: 'R$ 450,00', meta: 'Meta R$ 1.500', largura: 'w-[30%]' },
  { nome: 'Reserva', icone: PiggyBank, guardado: 'R$ 1.200,00', meta: 'Meta R$ 3.000', largura: 'w-[40%]' },
];

export function Caixinhas() {
  return (
    <VStack className="mt-4">
      <HStack className="px-5 mb-3 justify-between items-center">
        <Heading size="md" className="text-gray-800">Guardar dinheiro</Heading>
        <Text className="text-sm font-semibold text-[#820AD1]">Ver tudo</Text>
      </HStack>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerClassName="px-4"
      >
        {caixinhas.map((item) => (
          <Pressable key={item.nome} className="bg-white w-44 p-4 rounded-2xl mr-3">
            <Icon as={item.icone} size="xl" className="text-[#820AD1]" />
            <Text className="mt-2 font-bold text-gray-800">{item.nome}</Text>
            <Text className="text-lg font-bold text-black">{item.guardado}</Text>
            <Box className="mt-2 h-1.5 rounded-full bg-gray-200">
              <Box className={`h-1.5 rounded-full bg-[#820AD1] ${item.largura}`} />
            </Box>
            <Text className="mt-1 text-xs text-gray-500">{item.meta}</Text>
          </Pressable>
        ))}
      </ScrollView>
    </VStack>
  );
}
