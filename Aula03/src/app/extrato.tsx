import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Center } from '@/components/ui/center';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Icon } from '@/components/ui/icon';
import { Tela } from '@/components/Tela';
import { transacoes } from '@/data/transacoes';

export default function ExtratoScreen() {
  return (
    <Tela titulo="Extrato">
      <VStack className="bg-white mx-4 mt-4 p-5 rounded-2xl">
        <Heading size="md" className="text-gray-800 mb-2">Todas as transações</Heading>
        {transacoes.map((t) => (
          <HStack key={t.id} className="py-3 items-center border-b border-gray-100">
            <Center className="w-11 h-11 rounded-full bg-gray-100">
              <Icon as={t.icone} className="text-gray-700" />
            </Center>
            <VStack className="flex-1 ml-3">
              <Text className="font-bold text-gray-800">{t.nome}</Text>
              <Text className="text-xs text-gray-500">{t.tipo}</Text>
            </VStack>
            <Text className={t.entrada ? 'font-bold text-green-600' : 'font-bold text-gray-800'}>
              {t.valor}
            </Text>
          </HStack>
        ))}
      </VStack>
    </Tela>
  );
}
