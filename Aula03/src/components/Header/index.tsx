import { HStack } from '@/components/ui/hstack';
import { Text } from '@/components/ui/text';
import { Pressable } from '@/components/ui/pressable';

type Props = { verSaldo: boolean; onToggle: () => void };

export function Header({ verSaldo, onToggle }: Props) {
  return (
    <HStack className="bg-[#820AD1] p-6 pt-[60px] justify-between items-center">
      <Text className="text-white text-lg font-bold">Olá, Usuário</Text>
      <Pressable onPress={onToggle}>
        <Text className="text-white text-sm">
          {verSaldo ? 'Ocultar' : 'Mostrar'}
        </Text>
      </Pressable>
    </HStack>
  );
}
