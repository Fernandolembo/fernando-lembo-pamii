import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Pressable } from '@/components/ui/pressable';
import { Icon } from '@/components/ui/icon';
import { useRouter } from 'expo-router';
import { TrendingUp } from 'lucide-react-native';

export function Banner() {
  const router = useRouter();

  return (
    <Pressable onPress={() => router.push('/beneficios')} className="bg-[#2D0A4E] mx-4 mt-4 p-5 rounded-2xl">
      <HStack className="items-center justify-between">
        <VStack className="flex-1 pr-3">
          <Text className="text-xs font-bold text-[#D9B3FF]">NOVIDADE</Text>
          <Heading size="md" className="text-white mt-1">
            Seu limite pode aumentar!
          </Heading>
          <Text className="text-sm text-white/70 mt-1">
            Veja a oferta que preparamos para você.
          </Text>
          <Text className="text-sm font-bold text-white mt-3">Quero conhecer</Text>
        </VStack>
        <Icon as={TrendingUp} className="text-[#D9B3FF] h-14 w-14" />
      </HStack>
    </Pressable>
  );
}
