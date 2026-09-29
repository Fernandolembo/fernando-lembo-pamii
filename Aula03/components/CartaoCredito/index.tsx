import { VStack } from '@/components/ui/vstack';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';

export function CartaoCredito() {
  return (
    <VStack className="p-5 border-b border-gray-200">
      <Heading size="md" className="text-gray-800 mb-1">Cartão de Crédito</Heading>
      <Text className="text-sm text-gray-500">Fatura atual</Text>
      <Text className="text-[22px] font-bold text-black">R$ 350,00</Text>
    </VStack>
  );
}
