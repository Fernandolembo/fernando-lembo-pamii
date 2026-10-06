import { useState } from 'react';
import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Box } from '@/components/ui/box';
import { Header } from '@/components/Header';
import { CartaoConta } from '@/components/CartaoConta';
import { MenuRapido } from '@/components/MenuRapido';
import { CartaoCredito } from '@/components/CartaoCredito';
import { Caixinhas } from '@/components/Caixinhas';
import { Banner } from '@/components/Banner';
import { UltimasTransacoes } from '@/components/UltimasTransacoes';
import { MenuInferior } from '@/components/MenuInferior';

export default function App() {
  const [verSaldo, setVerSaldo] = useState(true);

  return (
    <Box className="flex-1 bg-gray-100">
      <StatusBar style="light" />
      <Header verSaldo={verSaldo} onToggle={() => setVerSaldo(!verSaldo)} />
      <ScrollView contentContainerClassName="pb-6">
        <CartaoConta verSaldo={verSaldo} />
        <MenuRapido />
        <CartaoCredito />
        <Banner />
        <Caixinhas />
        <UltimasTransacoes verSaldo={verSaldo} />
      </ScrollView>
      <MenuInferior />
    </Box>
  );
}
