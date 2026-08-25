import { Text, View } from "react-native";
import { Button, ButtonIcon, ButtonText } from '@/components/ui/button';
import { EditIcon, AlertCircleIcon, CircleIcon } from '@/components/ui/icon';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
} from '@/components/ui/form-control';
import {
  Radio,
  RadioGroup,
  RadioIndicator,
  RadioLabel,
  RadioIcon,
} from '@/components/ui/radio';
import { VStack } from '@/components/ui/vstack';

export default function Index() {
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
        
        <RadioGroup className="my-2">
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
            Choose one time slot for the meeting
          </FormControlErrorText>
        </FormControlError>
      </FormControl>

      <Text style={{ marginTop: 24, marginBottom: 12 }}>
        Edit app/index.tsx to edit this screen.
      </Text>
      
      <Button variant="default" size="default">
        <ButtonText>Button</ButtonText>
        <ButtonIcon as={EditIcon} />
      </Button>
    </View>
  );
}
