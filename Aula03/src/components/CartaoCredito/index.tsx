import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Box } from '@/components/ui/box';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Pressable } from '@/components/ui/pressable';
import { Icon } from '@/components/ui/icon';
import { useRouter } from 'expo-router';
import { CreditCard, ChevronRight } from 'lucide-react-native';

export function CartaoCredito() {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.push('/cartoes')} className="bg-white mx-4 mt-4 p-5 rounded-2xl">
      <HStack className="justify-between items-center">
        <HStack className="gap-2 items-center">
          <Icon as={CreditCard} className="text-[#820AD1]" />
          <Heading size="md" className="text-gray-800">Cartão de crédito</Heading>
        </HStack>
        <Icon as={ChevronRight} className="text-gray-400" />
      </HStack>

      <VStack className="mt-3">
        <Text className="text-sm text-gray-500">Fatura atual</Text>
        <Text className="text-[28px] font-bold text-black">R$ 350,00</Text>
        <Text className="text-sm text-gray-500 mt-1">Vence em 15 de novembro</Text>
      </VStack>

      {/* Barra de limite */}
      <Box className="mt-4 h-2 rounded-full bg-gray-200">
        <Box className="h-2 w-[15%] rounded-full bg-[#820AD1]" />
      </Box>
      <HStack className="mt-2 justify-between">
        <Text className="text-xs text-gray-500">Limite disponível</Text>
        <Text className="text-xs font-bold text-gray-800">R$ 1.950,00</Text>
      </HStack>
    </Pressable>
  );
}
