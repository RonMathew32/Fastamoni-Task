import React from "react";
import { Appearance } from "react-native";

const lightColors = {
    background: '#F0F0F0',
    primary: '#D12E2F',
    white: '#FFFFFF',
    green: '#49C661',
    orange: "#FF914D",
    red: '#FF0000',
    black: '#000000',
    darkGray: '#545454',
    lightGray: '#F0F0F0',
    powderblue: '#3498db',
    lavendarWhite: '#D2D2D2',
    lavendarWhiteDim: '#D9D9D9',
    lavendarWhiteDark: '#A6A6A6',
    hardCodeWhite: '#FFFFFF',
    hardLavendarWhiteDim: '#1A1A1A',
  };

  const darkColors = {
    background: '#1A1A1A',
    primary: '#D12E2F',
    white: '#000000',
    green: '#49C661',
    orange: "#FF914D",
    red: '#FF0000',
    black: '#FFFFFF',
    darkGray: '#F0F0F0',
    lightGray: '#F0F0F0',
    powderblue: '#3498db',
    lavendarWhite: '#D2D2D2',
    lavendarWhiteDim: '#1A1A1A',
    lavendarWhiteDark: '#A6A6A6',
    hardCodeWhite: '#FFFFFF',
    hardLavendarWhiteDim: '#1A1A1A',
  };

const colorScheme = Appearance.getColorScheme();

export const COLORS = colorScheme === 'dark'? darkColors : lightColors;