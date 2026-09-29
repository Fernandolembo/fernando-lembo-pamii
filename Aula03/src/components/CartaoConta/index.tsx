import { VStack } from '@/components/ui/vstack';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';

export function CartaoConta({ verSaldo }: { verSaldo: boolean }) {
  return (
    <VStack className="p-5 border-b border-gray-200">
      <Heading size="md" className="text-gray-800 mb-1">Conta</Heading>
      <Text className="text-[22px] font-bold text-black">
        {verSaldo ? 'R$ 1.250,00' : '••••••'}
      </Text>
    </VStack>
  );
}
