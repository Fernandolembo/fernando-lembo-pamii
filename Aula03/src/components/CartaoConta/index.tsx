import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Pressable } from '@/components/ui/pressable';
import { Icon } from '@/components/ui/icon';
import { Wallet, ChevronRight } from 'lucide-react-native';

export function CartaoConta({ verSaldo }: { verSaldo: boolean }) {
  return (
    <Pressable className="bg-white mx-4 mt-4 p-5 rounded-2xl">
      <HStack className="justify-between items-center">
        <HStack className="gap-2 items-center">
          <Icon as={Wallet} className="text-[#820AD1]" />
          <Heading size="md" className="text-gray-800">Conta</Heading>
        </HStack>
        <Icon as={ChevronRight} className="text-gray-400" />
      </HStack>

      <VStack className="mt-3">
        <Text className="text-sm text-gray-500">Saldo disponível</Text>
        <Text className="text-[28px] font-bold text-black">
          {verSaldo ? 'R$ 1.250,00' : '••••••'}
        </Text>
      </VStack>

      <HStack className="mt-3 pt-3 border-t border-gray-100 justify-between">
        <Text className="text-sm text-gray-500">Rendeu hoje</Text>
        <Text className="text-sm font-bold text-green-600">
          {verSaldo ? '+ R$ 0,42' : '••••'}
        </Text>
      </HStack>
    </Pressable>
  );
}
