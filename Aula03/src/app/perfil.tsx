import { VStack } from '@/components/ui/vstack';
import { Center } from '@/components/ui/center';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Tela } from '@/components/Tela';
import { ItemLista } from '@/components/ItemLista';
import { UserRound, ShieldCheck, Bell, Settings, LogOut } from 'lucide-react-native';

export default function PerfilScreen() {
  return (
    <Tela titulo="Perfil">
      <VStack className="bg-white mx-4 mt-4 p-6 rounded-2xl items-center">
        <Center className="w-20 h-20 rounded-full bg-[#820AD1]">
          <Text className="text-white text-3xl font-bold">F</Text>
        </Center>
        <Heading size="lg" className="text-gray-800 mt-3">Fernando Lembo</Heading>
        <Text className="text-gray-500">fernando@email.com</Text>
        <Text className="text-xs text-gray-400 mt-1">Ag 0001 · Conta 12345-6</Text>
      </VStack>

      <VStack className="bg-white mx-4 mt-4 p-5 rounded-2xl">
        <ItemLista icone={UserRound} titulo="Dados pessoais" />
        <ItemLista icone={ShieldCheck} titulo="Segurança" subtitulo="Senha e biometria" />
        <ItemLista icone={Bell} titulo="Notificações" />
        <ItemLista icone={Settings} titulo="Configurar app" />
        <ItemLista icone={LogOut} titulo="Sair do app" />
      </VStack>
    </Tela>
  );
}
