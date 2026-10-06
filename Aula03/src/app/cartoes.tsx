import { useState } from 'react';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Box } from '@/components/ui/box';
import { Tela } from '@/components/Tela';
import { Botao } from '@/components/Botao';
import { ItemLista } from '@/components/ItemLista';
import { Smartphone, SlidersHorizontal, FileText } from 'lucide-react-native';

export default function CartoesScreen() {
  const [bloqueado, setBloqueado] = useState(false);

  return (
    <Tela titulo="Cartões">
      {/* O "cartão" */}
      <VStack
        className={
          bloqueado
            ? 'mx-4 mt-4 p-6 rounded-2xl bg-gray-500 h-48 justify-between'
            : 'mx-4 mt-4 p-6 rounded-2xl bg-[#820AD1] h-48 justify-between'
        }
      >
        <HStack className="justify-between items-center">
          <Text className="text-white font-bold text-lg">nu</Text>
          <Text className="text-white/80 text-xs">{bloqueado ? 'BLOQUEADO' : 'MASTERCARD'}</Text>
        </HStack>
        <VStack>
          <Text className="text-white text-lg tracking-widest">•••• •••• •••• 4821</Text>
          <Text className="text-white/80 text-sm mt-1">FERNANDO LEMBO</Text>
        </VStack>
      </VStack>

      <VStack className="mx-4 mt-4">
        <Botao
          claro={!bloqueado}
          texto={bloqueado ? 'Desbloquear cartão' : 'Bloquear cartão'}
          onPress={() => setBloqueado(!bloqueado)}
        />
      </VStack>

      <VStack className="bg-white mx-4 mt-4 p-5 rounded-2xl">
        <Heading size="md" className="text-gray-800">Fatura atual</Heading>
        <Text className="text-[28px] font-bold text-black mt-1">R$ 350,00</Text>
        <Text className="text-sm text-gray-500">Vence em 15 de novembro</Text>
        <Box className="mt-4 h-2 rounded-full bg-gray-200">
          <Box className="h-2 w-[15%] rounded-full bg-[#820AD1]" />
        </Box>
        <Text className="mt-2 text-xs text-gray-500">Limite disponível R$ 1.950,00</Text>
      </VStack>

      <VStack className="bg-white mx-4 mt-4 p-5 rounded-2xl">
        <ItemLista icone={Smartphone} titulo="Cartão virtual" subtitulo="Para compras na internet" />
        <ItemLista icone={SlidersHorizontal} titulo="Ajustar limite" />
        <ItemLista icone={FileText} titulo="Faturas anteriores" />
      </VStack>
    </Tela>
  );
}
