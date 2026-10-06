import { Pressable } from '@/components/ui/pressable';
import { Text } from '@/components/ui/text';

type Props = { texto: string; onPress?: () => void; claro?: boolean };

// Botão roxo (ou branco, se "claro") feito com o Pressable do gluestack
export function Botao({ texto, onPress, claro }: Props) {
  return (
    <Pressable
      onPress={onPress}
      className={
        claro
          ? 'py-3 px-5 rounded-full bg-white border border-[#820AD1] items-center'
          : 'py-3 px-5 rounded-full bg-[#820AD1] items-center active:opacity-80'
      }
    >
      <Text className={claro ? 'font-bold text-[#820AD1]' : 'font-bold text-white'}>
        {texto}
      </Text>
    </Pressable>
  );
}
