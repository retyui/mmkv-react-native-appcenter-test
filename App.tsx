import React, {useEffect} from 'react';
import {SafeAreaView, Button, Text} from 'react-native';
import MMKVStorage, {useMMKVStorage} from 'react-native-mmkv-storage';

const MMKV = new MMKVStorage.Loader().initialize();

export default function App() {
  const [value, setValue] = useMMKVStorage('key', MMKV, '');

  useEffect(() => {}, []);

  return (
    <SafeAreaView>
      <Text>MMKV.key: {value}</Text>
      <Button
        onPress={() => {
          setValue(Math.random().toString(36).slice(2));
        }}
        title="Update MMKV value"
      />
    </SafeAreaView>
  );
}
