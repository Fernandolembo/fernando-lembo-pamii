import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Center } from '@/components/ui/center';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Icon } from '@/components/ui/icon';
import { ShoppingCart, ArrowDownLeft, Music, Utensils } from 'lucide-react-native';

const transacoes = [
  { id: 1, nome: 'Mercado Bom Preço', tipo: 'Compra no débito', valor: '- R$ 82,90', icone: ShoppingCart, entrada: false },
  { id: 2, nome: 'Transferência recebida', tipo: 'Pix de Maria Silva', valor: '+ R$ 150,00', icone: ArrowDownLeft, entrada: true },
  { id: 3, nome: 'Spotify', tipo: 'Cartão de crédito', valor: '- R$ 21,90', icone: Music, entrada: false },
  { id: 4, nome: 'Lanchonete do Zé', tipo: 'Pix enviado', valor: '- R$ 35,00', icone: Utensils, entrada: false },
];

export function UltimasTransacoes({ verSaldo }: { verSaldo: boolean }) {
  return (
    <VStack className="bg-white mx-4 mt-4 p-5 rounded-2xl">
      <Heading size="md" className="text-gray-800 mb-2">Últimas transações</Heading>

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
            {verSaldo ? t.valor : '••••'}
          </Text>
        </HStack>
      ))}

      <Text className="mt-3 text-center text-sm font-semibold text-[#820AD1]">
        Ver extrato completo
      </Text>
    </VStack>
  );
}
