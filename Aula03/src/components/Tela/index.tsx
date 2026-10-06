import { ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ChevronLeft } from 'lucide-react-native';
import { Box } from '@/components/ui/box';
import { HStack } from '@/components/ui/hstack';
import { Heading } from '@/components/ui/heading';
import { Pressable } from '@/components/ui/pressable';
import { Center } from '@/components/ui/center';
import { Icon } from '@/components/ui/icon';
import { MenuInferior } from '@/components/MenuInferior';

type Props = { titulo: string; children: React.ReactNode };

// Moldura padrão das telas internas: topo roxo com botão voltar + conteúdo + menu de baixo
export function Tela({ titulo, children }: Props) {
  const router = useRouter();

  return (
    <Box className="flex-1 bg-gray-100">
      <StatusBar style="light" />
      <HStack className="bg-[#820AD1] px-5 pt-[60px] pb-5 items-center">
        <Pressable onPress={() => (router.canGoBack() ? router.back() : router.replace('/'))}>
          <Center className="w-10 h-10 rounded-full bg-white/20">
            <Icon as={ChevronLeft} />
          </Center>
        </Pressable>
        <Heading size="lg" className="text-white ml-4">{titulo}</Heading>
      </HStack>
      <ScrollView contentContainerClassName="pb-6">{children}</ScrollView>
      <MenuInferior />
    </Box>
  );
}
