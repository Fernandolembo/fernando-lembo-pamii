import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Center } from '@/components/ui/center';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Icon } from '@/components/ui/icon';
import { useRouter } from 'expo-router';
import { Pressable } from '@/components/ui/pressable';
import { transacoes } from '@/data/transacoes';

export function UltimasTransacoes({ verSaldo }: { verSaldo: boolean }) {
  const router = useRouter();

  return (
    <VStack className="bg-white mx-4 mt-4 p-5 rounded-2xl">
      <Heading size="md" className="text-gray-800 mb-2">Últimas transações</Heading>

      {transacoes.slice(0, 4).map((t) => (
        <HStack key={t.id} className="py-3 items-center border-b border-gray-100">
          <Center className="w-11 h-11 rounded-full bg-gray-100">
            <Icon as={t.icone} className="text-gray-700" />
          </Center>

          <VStack className="flex-1 ml-3">
            <Text className="font-bold text-gray-800">{t.nome}</Text>
            <Text className="text-xs text-gray-500">{t.tipo}</Text>
          </VStack>

          <Text className={t.entrada ? 'font-bold text-green-600' : 'font-bold text-gray-800'}>
            {verSaldo ? t.valor : '••••'}
          </Text>
        </HStack>
      ))}

      <Pressable onPress={() => router.push('/extrato')}>
        <Text className="mt-3 text-center text-sm font-semibold text-[#820AD1]">
          Ver extrato completo
        </Text>
      </Pressable>
    </VStack>
  );
}
