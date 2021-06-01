import { useIsFocused } from '@react-navigation/core';
import React from 'react';
import { StatusBar, StatusBarStyle } from 'react-native';

interface DataStatusProps {
  barStyle: StatusBarStyle,
  backgroundColor: string
}

export default function StatusBarPage({ barStyle, backgroundColor }: DataStatusProps) {
  const isFocused = useIsFocused()
  return isFocused ? <StatusBar barStyle={barStyle} backgroundColor={backgroundColor} /> : null;
}
