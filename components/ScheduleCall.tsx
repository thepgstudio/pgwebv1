import React, { useEffect, useState } from "react";
import styles from "../src/styles/ScheduleButton.module.css";
import { PopupModal, InlineWidget } from "react-calendly";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

const ScheduleButton = () => {
  const [wave, setWave] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setTimeout(() => {
      setWave(true);
    }, 1000);

    setTimeout(() => {
      setWave(false);
    }, 5000);
  }, []);

  return (
    <>
      <div className={styles.scheduleButtonContainer}>
        <button
          className={`${styles.scheduleButton} ${wave ? styles.wave : ""}`}
          onClick={onOpen}
        >
          Schedule a Call
        </button>
      </div>

      <Modal size={'4xl'} isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
          <ModalCloseButton />
        <ModalContent>
          <ModalBody>
            <InlineWidget url="https://calendly.com/thepgstudio/meet-with-pgstudio" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ScheduleButton;
