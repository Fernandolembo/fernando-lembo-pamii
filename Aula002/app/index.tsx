import React from "react";
import { Text, View } from "react-native";
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import { EditIcon, AlertCircleIcon, CircleIcon, Icon, ChevronLeftIcon, ChevronRightIcon } from '@/components/ui/icon';
import { FormControl, FormControlLabel, FormControlLabelText, FormControlError, FormControlErrorIcon, FormControlErrorText } from '@/components/ui/form-control';
import { Radio, RadioGroup, RadioIndicator, RadioLabel, RadioIcon } from '@/components/ui/radio';
import { VStack } from '@/components/ui/vstack';
import { Calendar, CalendarHeader, CalendarHeaderPrevButton,CalendarHeaderNextButton, CalendarHeaderTitle, CalendarWeekDaysHeader,CalendarBody, CalendarGrid} from '@/components/ui/calendar';

export default function Index() {
  const [selectedDay, setSelectedDay] = React.useState("Mango");
  const [selectedDate, setSelectedDate] = React.useState(new Date());

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
      }}
    >
      <FormControl isInvalid>
        <FormControlLabel>
          <FormControlLabelText>
            Qual dia é melhor para você?
          </FormControlLabelText>
        </FormControlLabel>
        
        {}
        <Calendar mode="single" value={selectedDate} onValueChange={setSelectedDate} className="mb-4 bg-white rounded-lg p-4 shadow-sm border border-slate-200">
  <CalendarHeader className="flex-row justify-between items-center mb-2">
    <CalendarHeaderPrevButton className="p-2 active:opacity-60">
      <Icon as={ChevronLeftIcon} className="text-primary-500" />
    </CalendarHeaderPrevButton>
    <CalendarHeaderTitle className="text-lg font-bold text-slate-800" />
    <CalendarHeaderNextButton className="p-2 active:opacity-60">
      <Icon as={ChevronRightIcon} className="text-primary-500" />
    </CalendarHeaderNextButton>
  </CalendarHeader>

  <CalendarWeekDaysHeader className="text-slate-400 font-medium" />

  <CalendarBody>
    {}
    <CalendarGrid />
  </CalendarBody>
</Calendar>


        <RadioGroup value={selectedDay} onChange={setSelectedDay} className="my-2">
          <VStack className="gap-2">
            <Radio size="sm" value="Mango">
              <RadioIndicator>
                <RadioIcon as={CircleIcon} />
              </RadioIndicator>
              <RadioLabel>Segunda</RadioLabel>
            </Radio>
            <Radio size="sm" value="Apple">
              <RadioIndicator>
                <RadioIcon as={CircleIcon} />
              </RadioIndicator>
              <RadioLabel>Terça</RadioLabel>
            </Radio>
            <Radio size="sm" value="Orange">
              <RadioIndicator>
                <RadioIcon as={CircleIcon} />
              </RadioIndicator>
              <RadioLabel>Quarta</RadioLabel>
            </Radio>
          </VStack>
        </RadioGroup>

        <FormControlError>
          <FormControlErrorIcon as={AlertCircleIcon} />
          <FormControlErrorText>
            Escolha uma das opções acima
          </FormControlErrorText>
        </FormControlError>
      </FormControl>

      <Button variant="default" size="default">
        <ButtonText>Selecionar esse dia</ButtonText>
        <ButtonIcon as={EditIcon} />
      </Button>
    </View>
  );
}
