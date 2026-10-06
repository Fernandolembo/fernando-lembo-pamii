import { HStack } from '@/components/ui/hstack';
import { VStack } from '@/components/ui/vstack';
import { Text } from '@/components/ui/text';
import { Pressable } from '@/components/ui/pressable';
import { Icon } from '@/components/ui/icon';
import { House, CreditCard, QrCode, Gift, User } from 'lucide-react-native';

const abas = [
  { nome: 'Início', icone: House, ativo: true },
  { nome: 'Cartões', icone: CreditCard, ativo: false },
  { nome: 'Pix', icone: QrCode, ativo: false },
  { nome: 'Benefícios', icone: Gift, ativo: false },
  { nome: 'Perfil', icone: User, ativo: false },
];

export function MenuInferior() {
  return (
    <HStack className="bg-white pt-3 pb-7 border-t border-gray-200 justify-around">
      {abas.map((aba) => (
        <Pressable key={aba.nome}>
          <VStack className="items-center">
            <Icon as={aba.icone} className={aba.ativo ? 'text-[#820AD1]' : 'text-gray-400'} />
            <Text
              className={
                aba.ativo
                  ? 'text-[11px] font-bold text-[#820AD1]'
                  : 'text-[11px] text-gray-500'
              }
            >
              {aba.nome}
            </Text>
          </VStack>
        </Pressable>
      ))}
    </HStack>
  );
}
