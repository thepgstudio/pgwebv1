import React, { useState } from "react";
import {
  Box,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";

interface LightboxProps {
  images: string[];
}

const CustomLightBox: React.FC<LightboxProps> = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const openLightbox = (index:number) => {
    setSelectedImageIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
    setIsOpen(false);
  };

  const goToNextImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex < images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const goToPreviousImage = () => {
    if (selectedImageIndex !== null && selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  return (
    <>
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          alt={`Image ${index + 1}`}
          onClick={() => openLightbox(index)}
          cursor="pointer"
          maxW="100%"
        />
      ))}
      {selectedImageIndex !== null && (
        <Modal isOpen={isOpen} onClose={closeLightbox} size={"md"}>
          <ModalOverlay />
          <ModalContent w={"80vw"} h={"80vh"}>
            <ModalCloseButton />
            <ModalBody>
              <Box display={"flex"} justifyContent={"center"} alignItems={"center"} textAlign="center">
                <Image
                  src={images[selectedImageIndex]}
                  alt="Selected Image"
                  maxH="100%"
                  maxW="100%"
                />
              </Box>
            </ModalBody>
            <ModalFooter>
              <Button
                variant="ghost"
                onClick={goToPreviousImage}
                isDisabled={selectedImageIndex === 0}
              >
                Previous
              </Button>
              <Button
                variant="ghost"
                onClick={goToNextImage}
                isDisabled={selectedImageIndex === images.length - 1}
              >
                Next
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default CustomLightBox;
