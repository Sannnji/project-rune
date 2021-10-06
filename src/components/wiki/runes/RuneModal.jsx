import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Text,
  Image,
} from "@chakra-ui/react";

export default function RuneModal({ rune, isOpen, onClose }) {
  console.log(rune);

  if (rune == null) {
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
                {rune.name}
              </Text>
              <Image src={process.env.PUBLIC_URL + `/${rune.image}`} my={4} />
              <Text textAlign="center" color="#797979">
                {rune.tier}
              </Text>
              <Text textAlign="center" color="white" my={2}>
                Required Level: {rune.lvl_req}
              </Text>

              <Text color="white">Weapon</Text>
              <Text color="#6969FF">{rune.weapon_bonus}</Text>
              <Text color="white">Armor & Helm</Text>
              <Text color="#6969FF">{rune.armor_helm_bonus}</Text>
              <Text color="white">Shield</Text>
              <Text color="#6969FF">{rune.shield_bonus}</Text>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  }
}
