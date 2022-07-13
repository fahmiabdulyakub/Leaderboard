import {Text, View} from 'react-native';
import React, {forwardRef, useImperativeHandle, useState} from 'react';
import Modal from 'react-native-modal';
import styles from './styles';
import {ModalInfoRefType, PropsType} from './types';

const ModalInfo = forwardRef<ModalInfoRefType, PropsType>(({text}, ref) => {
  const [isOpen, setIsOpen] = useState(true);

  useImperativeHandle(
    ref,
    () => ({
      open: () => {
        setIsOpen(true);
      },
      close: () => {
        onClose();
      },
    }),
    [],
  );

  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <Modal
      isVisible={isOpen}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      animationIn="zoomIn"
      animationInTiming={300}
      animationOutTiming={500}
      useNativeDriver={true}
      animationOut="zoomOut">
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </Modal>
  );
});

export default ModalInfo;
