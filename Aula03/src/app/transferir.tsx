import { useState } from 'react';
import { ScrollView } from 'react-native';
import { VStack } from '@/components/ui/vstack';
import { HStack } from '@/components/ui/hstack';
import { Center } from '@/components/ui/center';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Pressable } from '@/components/ui/pressable';
import { Icon } from '@/components/ui/icon';
import { CircleCheck } from 'lucide-react-native';
import { Tela } from '@/components/Tela';
import { Botao } from '@/components/Botao';

const contatos = ['Maria', 'João', 'Ana', 'Carlos', 'Beatriz'];
const valores = [10, 50, 100, 200];

export default function TransferirScreen() {
  const [contato, setContato] = useState('');
  const [valor, setValor] = useState(0);
  const [enviado, setEnviado] = useState(false);

  const podeEnviar = contato !== '' && valor > 0;

  if (enviado) {
    return (
      <Tela titulo="Transferir">
        <VStack className="bg-white mx-4 mt-4 p-8 rounded-2xl items-center">
          <Icon as={CircleCheck} className="text-green-600 h-16 w-16" />
          <Heading size="lg" className="text-gray-800 mt-4">Transferência enviada!</Heading>
          <Text className="text-gray-500 mt-2 text-center">
            R$ {valor},00 para {contato}
          </Text>
          <VStack className="mt-6 w-full">
            <Botao
              texto="Fazer outra transferência"
              onPress={() => {
                setEnviado(false);
                setContato('');
                setValor(0);
              }}
            />
          </VStack>
        </VStack>
      </Tela>
    );
  }

  return (
    <Tela titulo="Transferir">
      <VStack className="bg-white mx-4 mt-4 p-5 rounded-2xl">
        <Heading size="md" className="text-gray-800 mb-3">Para quem?</Heading>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {contatos.map((nome) => (
            <Pressable key={nome} onPress={() => setContato(nome)} className="mr-4">
              <VStack className="items-center">
                <Center
                  className={
                    contato === nome
                      ? 'w-16 h-16 rounded-full bg-[#820AD1]'
                      : 'w-16 h-16 rounded-full bg-gray-100'
                  }
                >
                  <Text className={contato === nome ? 'text-xl font-bold text-white' : 'text-xl font-bold text-gray-700'}>
                    {nome[0]}
                  </Text>
                </Center>
                <Text className="mt-1 text-xs text-gray-800">{nome}</Text>
              </VStack>
            </Pressable>
          ))}
        </ScrollView>
      </VStack>

      <VStack className="bg-white mx-4 mt-4 p-5 rounded-2xl">
        <Heading size="md" className="text-gray-800 mb-3">Quanto?</Heading>
        <HStack className="flex-wrap gap-2">
          {valores.map((v) => (
            <Pressable
              key={v}
              onPress={() => setValor(v)}
              className={
                valor === v
                  ? 'py-2 px-5 rounded-full bg-[#820AD1]'
                  : 'py-2 px-5 rounded-full bg-gray-100'
              }
            >
              <Text className={valor === v ? 'font-bold text-white' : 'font-bold text-gray-700'}>
                R$ {v}
              </Text>
            </Pressable>
          ))}
        </HStack>
      </VStack>

      <VStack className="mx-4 mt-4">
        <Text className="text-center text-gray-500 mb-3">
          {podeEnviar ? `Enviar R$ ${valor},00 para ${contato}` : 'Escolha um contato e um valor'}
        </Text>
        <Botao texto="Transferir" onPress={() => podeEnviar && setEnviado(true)} />
      </VStack>
    </Tela>
  );
}
