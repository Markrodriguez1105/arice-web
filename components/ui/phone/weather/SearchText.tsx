import { textStyle } from "@/constant/TextStyle";
import React, { useEffect, useMemo, useState } from "react";
import { StyleSheet, TextInput } from "react-native";

type SearchTextProps = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export default function SearchText({ search, setSearch }: SearchTextProps) {
  const [textShow, setTextShow] = useState(true);
  const text = useMemo(
    () => ["Search your Area", "Try Arice Weather Forecasting"],
    []
  );

  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (currentText === text[textShow ? 0 : 1].length) {
        setTimeout(() => {
          setCurrentText(0);
          setTextShow(!textShow);
        }, 1000);
        return;
      }
      setCurrentText(currentText + 1);
    }, 100);
  }, [currentText, text, textShow]);

  function typeEffect(length: number) {
    if (textShow) {
      return text[0].slice(0, length);
    } else {
      return text[1].slice(0, length);
    }
  }

  return (
    <>
      <TextInput
        style={[textStyle.body, styles.input]}
        value={search}
        onChangeText={setSearch}
        placeholder={typeEffect(currentText)}
      ></TextInput>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
  },
});
