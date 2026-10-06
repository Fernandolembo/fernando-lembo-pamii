import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { Center } from '@/components/ui/center';
import { Text } from '@/components/ui/text';
import { Pressable } from '@/components/ui/pressable';
import { Icon } from '@/components/ui/icon';
import { useRouter } from 'expo-router';
import { Eye, EyeOff, Bell, CircleHelp } from 'lucide-react-native';

type Props = { verSaldo: boolean; onToggle: () => void };

export function Header({ verSaldo, onToggle }: Props) {
  const router = useRouter();

  return (
    <VStack className="bg-[#820AD1] px-5 pt-[60px] pb-6">
      {/* Linha de cima: avatar + ícones */}
      <HStack className="justify-between items-center">
        <Pressable onPress={() => router.push('/perfil')}>
          <Center className="w-12 h-12 rounded-full bg-white/20">
            <Text className="text-white text-lg font-bold">F</Text>
          </Center>
        </Pressable>

        <HStack className="gap-3">
          <Pressable onPress={onToggle}>
            <Center className="w-10 h-10 rounded-full bg-white/20">
              <Icon as={verSaldo ? Eye : EyeOff} />
            </Center>
          </Pressable>
          <Center className="w-10 h-10 rounded-full bg-white/20">
            <Icon as={Bell} />
          </Center>
          <Center className="w-10 h-10 rounded-full bg-white/20">
            <Icon as={CircleHelp} />
          </Center>
        </HStack>
      </HStack>

      {/* Saudação */}
      <Text className="text-white text-2xl font-bold mt-5">Olá, Fernando</Text>
      <Text className="text-white/70 text-sm mt-1">
        {verSaldo ? 'Toque no olho para ocultar os valores' : 'Valores ocultos'}
      </Text>
    </VStack>
  );
}
