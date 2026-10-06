import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { Center } from '@/components/ui/center';
import { Text } from '@/components/ui/text';
import { Pressable } from '@/components/ui/pressable';
import { Icon } from '@/components/ui/icon';
import { ChevronRight } from 'lucide-react-native';

type Props = {
  icone: any;
  titulo: string;
  subtitulo?: string;
  onPress?: () => void;
};

// Linha de lista com ícone, título e seta (usada em várias telas)
export function ItemLista({ icone, titulo, subtitulo, onPress }: Props) {
  return (
    <Pressable onPress={onPress} className="active:opacity-60">
      <HStack className="py-3 items-center border-b border-gray-100">
        <Center className="w-11 h-11 rounded-full bg-gray-100">
          <Icon as={icone} className="text-[#820AD1]" />
        </Center>
        <VStack className="flex-1 ml-3">
          <Text className="font-bold text-gray-800">{titulo}</Text>
          {subtitulo ? <Text className="text-xs text-gray-500">{subtitulo}</Text> : null}
        </VStack>
        <Icon as={ChevronRight} className="text-gray-400" />
      </HStack>
    </Pressable>
  );
}
