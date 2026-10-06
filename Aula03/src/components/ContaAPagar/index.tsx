import { useState } from 'react';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { Text } from '@/components/ui/text';
import { Pressable } from '@/components/ui/pressable';

type Props = { nome: string; vencimento: string; valor: string };

// Cada conta guarda sozinha se já foi paga ou não
export function ContaAPagar({ nome, vencimento, valor }: Props) {
  const [paga, setPaga] = useState(false);

  return (
    <HStack className="py-3 items-center border-b border-gray-100">
      <VStack className="flex-1">
        <Text className="font-bold text-gray-800">{nome}</Text>
        <Text className="text-xs text-gray-500">Vence em {vencimento}</Text>
        <Text className="font-bold text-black mt-1">{valor}</Text>
      </VStack>
      <Pressable
        onPress={() => setPaga(true)}
        className={paga ? 'py-2 px-4 rounded-full bg-green-100' : 'py-2 px-4 rounded-full bg-[#820AD1]'}
      >
        <Text className={paga ? 'font-bold text-green-700' : 'font-bold text-white'}>
          {paga ? 'Paga ✓' : 'Pagar'}
        </Text>
      </Pressable>
    </HStack>
  );
}
