import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Center } from '@/components/ui/center';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Icon } from '@/components/ui/icon';
import { Tela } from '@/components/Tela';
import { Percent, Plane, ShoppingBag, Utensils } from 'lucide-react-native';

const ofertas = [
  { id: 1, titulo: '5% de cashback', texto: 'Em compras no supermercado', icone: Percent },
  { id: 2, titulo: 'Desconto em viagens', texto: 'Até 15% em passagens aéreas', icone: Plane },
  { id: 3, titulo: 'Moda com desconto', texto: 'Cupons em lojas parceiras', icone: ShoppingBag },
  { id: 4, titulo: 'Delivery grátis', texto: 'Frete grátis no primeiro pedido', icone: Utensils },
];

export default function BeneficiosScreen() {
  return (
    <Tela titulo="Benefícios">
      <VStack className="mx-4 mt-4 p-5 rounded-2xl bg-[#2D0A4E]">
        <Text className="text-xs font-bold text-[#D9B3FF]">PROGRAMA DE RECOMPENSAS</Text>
        <Heading size="xl" className="text-white mt-1">1.250 pontos</Heading>
        <Text className="text-white/70 text-sm mt-1">Troque por descontos e produtos</Text>
      </VStack>

      <VStack className="mt-4">
        {ofertas.map((o) => (
          <HStack key={o.id} className="bg-white mx-4 mb-3 p-4 rounded-2xl items-center">
            <Center className="w-12 h-12 rounded-full bg-[#F3E5FF]">
              <Icon as={o.icone} className="text-[#820AD1]" />
            </Center>
            <VStack className="flex-1 ml-3">
              <Text className="font-bold text-gray-800">{o.titulo}</Text>
              <Text className="text-xs text-gray-500">{o.texto}</Text>
            </VStack>
          </HStack>
        ))}
      </VStack>
    </Tela>
  );
}
