import React from "react";
import { Button } from "react-native";

interface ButtonComponentProps {
  title: string;
  onPress: () => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  title,
  onPress,
}) => {
  return <Button title={title} onPress={onPress} />;
};

export default ButtonComponent;
