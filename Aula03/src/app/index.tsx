import { useState } from 'react';
import { ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Box } from '@/components/ui/box';
import { Header } from '@/components/Header';
import { CartaoConta } from '@/components/CartaoConta';
import { MenuRapido } from '@/components/MenuRapido';
import { CartaoCredito } from '@/components/CartaoCredito';

export default function App() {
  const [verSaldo, setVerSaldo] = useState(true);

  return (
    <Box className="flex-1 bg-white">
      <StatusBar style="light" />
      <Header verSaldo={verSaldo} onToggle={() => setVerSaldo(!verSaldo)} />
      <ScrollView>
        <CartaoConta verSaldo={verSaldo} />
        <MenuRapido />
        <CartaoCredito />
      </ScrollView>
    </Box>
  );
}
