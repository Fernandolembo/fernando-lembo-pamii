import { VStack } from '@/components/ui/vstack';
import { Heading } from '@/components/ui/heading';
import { Tela } from '@/components/Tela';
import { ContaAPagar } from '@/components/ContaAPagar';
import { ItemLista } from '@/components/ItemLista';
import { ScanBarcode, FileText } from 'lucide-react-native';

export default function PagarScreen() {
  return (
    <Tela titulo="Pagar">
      <VStack className="bg-white mx-4 mt-4 p-5 rounded-2xl">
        <ItemLista icone={ScanBarcode} titulo="Ler código de barras" subtitulo="Use a câmera para pagar um boleto" />
        <ItemLista icone={FileText} titulo="Digitar código do boleto" />
      </VStack>

      <VStack className="bg-white mx-4 mt-4 p-5 rounded-2xl">
        <Heading size="md" className="text-gray-800 mb-1">Contas a vencer</Heading>
        <ContaAPagar nome="Conta de luz" vencimento="10/10" valor="R$ 142,35" />
        <ContaAPagar nome="Internet" vencimento="12/10" valor="R$ 99,90" />
        <ContaAPagar nome="Água" vencimento="15/10" valor="R$ 68,40" />
      </VStack>
    </Tela>
  );
}
