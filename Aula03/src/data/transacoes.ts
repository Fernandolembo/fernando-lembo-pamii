import { ShoppingCart, ArrowDownLeft, Music, Utensils, Fuel, Pill, Bus } from 'lucide-react-native';

export const transacoes = [
  { id: 1, nome: 'Mercado Bom Preço', tipo: 'Compra no débito', valor: '- R$ 82,90', icone: ShoppingCart, entrada: false },
  { id: 2, nome: 'Transferência recebida', tipo: 'Pix de Maria Silva', valor: '+ R$ 150,00', icone: ArrowDownLeft, entrada: true },
  { id: 3, nome: 'Spotify', tipo: 'Cartão de crédito', valor: '- R$ 21,90', icone: Music, entrada: false },
  { id: 4, nome: 'Lanchonete do Zé', tipo: 'Pix enviado', valor: '- R$ 35,00', icone: Utensils, entrada: false },
  { id: 5, nome: 'Posto Shell', tipo: 'Cartão de crédito', valor: '- R$ 120,00', icone: Fuel, entrada: false },
  { id: 6, nome: 'Farmácia Saúde', tipo: 'Compra no débito', valor: '- R$ 47,30', icone: Pill, entrada: false },
  { id: 7, nome: 'Recarga bilhete único', tipo: 'Pagamento', valor: '- R$ 50,00', icone: Bus, entrada: false },
  { id: 8, nome: 'Pix recebido', tipo: 'Pix de João Pedro', valor: '+ R$ 200,00', icone: ArrowDownLeft, entrada: true },
];
