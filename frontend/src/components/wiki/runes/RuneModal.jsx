import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";

export default function RuneModal({ rune, isOpen, onClose }) {
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
              {/* RUNE NAME*/}
              <Text textAlign="center" color="#C7B377" fontSize="24px">
                {rune.name}
              </Text>

              {/* RUNE IMAGE */}
              <Image
                src={process.env.PUBLIC_URL + rune.image}
                borderRadius="md"
                my={4}
              />

              {/* RUNE TIER */}
              <Text textAlign="center" color="#797979">
                {rune.tier}
              </Text>

              {/* RECIPE */}
              <Flex justifyContent="center" color="#C7B377">
                {rune.recipe.map((element, i) => {
                  if (element === "-") return <Text>Uncraftable</Text>;
                  if (rune.recipe.length <= 1) {
                    return (
                      <Text>
                        {element.name} x {element.quantity}
                      </Text>
                    );
                  } else {
                    if (i === 0) {
                      return (
                        <Text>
                          {element.name} x {element.quantity} +
                        </Text>
                      );
                    } else {
                      return (
                        <Text ml={1}>
                          {element.name} x {element.quantity}
                        </Text>
                      );
                    }
                  }
                })}
              </Flex>

              {/* LVL REQUIREMENT */}
              <Text textAlign="center" color="white" my={2}>
                Required Level: {rune.lvl_req}
              </Text>

              {/* STATS */}
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
