import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Tela } from '@/components/Tela';
import { ItemLista } from '@/components/ItemLista';
import { useRouter } from 'expo-router';
import { Send, QrCode, Copy, HandCoins, CalendarClock } from 'lucide-react-native';

export default function PixScreen() {
  const router = useRouter();

  return (
    <Tela titulo="Área Pix">
      <VStack className="bg-white mx-4 mt-4 p-5 rounded-2xl">
        <Heading size="md" className="text-gray-800">O que você quer fazer?</Heading>
        <ItemLista icone={Send} titulo="Enviar" subtitulo="Pagar com chave, QR code ou Copia e Cola" onPress={() => router.push('/transferir')} />
        <ItemLista icone={QrCode} titulo="Receber" subtitulo="Gere um QR code para receber" />
        <ItemLista icone={Copy} titulo="Pix Copia e Cola" subtitulo="Cole o código para pagar" onPress={() => router.push('/pagar')} />
        <ItemLista icone={HandCoins} titulo="Cobrar" subtitulo="Envie um pedido de pagamento" />
        <ItemLista icone={CalendarClock} titulo="Agendar" subtitulo="Programe um Pix para outro dia" />
      </VStack>

      <VStack className="bg-white mx-4 mt-4 p-5 rounded-2xl">
        <Heading size="md" className="text-gray-800 mb-2">Minhas chaves</Heading>
        <HStack className="py-3 justify-between border-b border-gray-100">
          <Text className="text-gray-500">CPF</Text>
          <Text className="font-bold text-gray-800">•••.•••.•••-12</Text>
        </HStack>
        <HStack className="py-3 justify-between border-b border-gray-100">
          <Text className="text-gray-500">E-mail</Text>
          <Text className="font-bold text-gray-800">fernando@email.com</Text>
        </HStack>
        <HStack className="py-3 justify-between">
          <Text className="text-gray-500">Celular</Text>
          <Text className="font-bold text-gray-800">(11) •••••-1234</Text>
        </HStack>
      </VStack>
    </Tela>
  );
}
