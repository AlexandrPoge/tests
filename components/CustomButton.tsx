import { Text, TouchableOpacity } from 'react-native';

type Props = {
  title: string;
  handlePress?: () => void;
  containerStyles?: string;
  textStyles?: string;
};

const CustomButton = ({ title, handlePress, containerStyles, textStyles }: Props) => {
  return (
    <>
      <TouchableOpacity
        className={`h-[40px] justify-center items-center border-[#306FE3] rounded-[5px] ${containerStyles}`}
        onPress={handlePress}
        activeOpacity={0.7}>
        <Text className={`text-lg  ${textStyles}`}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};
export default CustomButton;
