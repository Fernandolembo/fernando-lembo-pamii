import { useRouter, usePathname } from 'expo-router';
import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { Text } from '@/components/ui/text';
import { Pressable } from '@/components/ui/pressable';
import { Icon } from '@/components/ui/icon';
import { House, CreditCard, QrCode, Gift, User } from 'lucide-react-native';

const abas = [
  { nome: 'Início', icone: House, rota: '/' },
  { nome: 'Cartões', icone: CreditCard, rota: '/cartoes' },
  { nome: 'Pix', icone: QrCode, rota: '/pix' },
  { nome: 'Benefícios', icone: Gift, rota: '/beneficios' },
  { nome: 'Perfil', icone: User, rota: '/perfil' },
];

export function MenuInferior() {
  const router = useRouter();
  const rotaAtual = usePathname();

  return (
    <HStack className="bg-white pt-3 pb-7 border-t border-gray-200 justify-around">
      {abas.map((aba) => {
        const ativo = rotaAtual === aba.rota;
        return (
          <Pressable key={aba.nome} onPress={() => router.navigate(aba.rota as any)}>
            <VStack className="items-center">
              <Icon as={aba.icone} className={ativo ? 'text-[#820AD1]' : 'text-gray-400'} />
              <Text
                className={ativo ? 'text-[11px] font-bold text-[#820AD1]' : 'text-[11px] text-gray-500'}
              >
                {aba.nome}
              </Text>
            </VStack>
          </Pressable>
        );
      })}
    </HStack>
  );
}
