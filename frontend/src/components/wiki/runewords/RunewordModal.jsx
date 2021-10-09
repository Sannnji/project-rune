import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Text,
} from "@chakra-ui/react";

export default function RunewordModal({ runeword, isOpen, onClose }) {
  if (runeword == null) {
    return <div />;
  } else {
    return (
      <>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent fontFamily="AvQest" backgroundColor="#090909">
            <ModalCloseButton
              color="#C7B377"
              _focus={{ outline: "none", boxShadow: "none" }}
            />

            <ModalBody align="center" py={8}>
              <Text textAlign="center" color="#C7B377" fontSize="24px">
                {runeword.name}
              </Text>
              
              <Text color="#797979">
                {runeword.gear.map((gear) => {
                  return gear + " ";
                })}
              </Text>

              <Text color="#C7B377">'{runeword.recipe}'</Text>

              <Text color="white">Required Level: {runeword.lvl_req}</Text>
              {runeword.stats.map((stat, index) => {
                return (
                  <Text key={index} color="#6969FF">
                    {stat}
                  </Text>
                );
              })}
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  }
}
