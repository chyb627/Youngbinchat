import { useState } from 'react';

const useTextInput = (defaultValue: string) => {
  const [value, setValue] = useState(defaultValue);

  const onChangeText = (text: React.SetStateAction<string>) => setValue(text);

  return [value, onChangeText, setValue] as const;
};

export default useTextInput;
