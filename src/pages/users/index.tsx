import { api } from "@/services/api";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Text,
  Tr,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Select,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

type UserProps = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export default function Users() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [users, setUsers] = useState<UserProps[]>();
  const [newuser, setNewuser] = useState(0);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  useEffect(() => {
    const getUsers = async () => {
      const list = await api.get("users");
      const users = list.data.map((user: any) => {
        return {
          id: user.ID,
          name: user.Name,
          email: user.Email,
          role: user.Role,
        };
      });
      setUsers(users);
    };
    getUsers();
    setNewuser(0);
  }, [newuser]);
  const handleSubmit = async () => {
    const data = {
      name,
      email,
      password,
      role,
    };
    const response = await api.post("users", data);
    console.log(response.data);
    setNewuser(1);
    setName("");
    setEmail("");
    setPassword("");
    setRole("");
    onClose();
  };

  return (
    <>
      <Box as="div">
        <Flex w="100%" maxW="1480px" mx="auto" my="6">
          <Box flex="1" p="8" bg="gray.700" borderRadius="8">
            <Flex justify="space-between" mb="8" align="center">
              <Heading size="lg" color="gray.100" fontWeight="normal">
                Usuários
              </Heading>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                onClick={onOpen}
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Flex>

            <Table variant="simple" color="white" colorScheme="blue">
              <Thead>
                <Tr>
                  <Th px={["4", "4", "6"]} color="green.500" w="8">
                    <Checkbox colorScheme="pink" />
                  </Th>
                  <Th color="white">Usuário</Th>
                  <Th color="white">Função</Th>
                  <Th width="8"></Th>
                </Tr>
              </Thead>
              <Tbody>
                {users
                  ? users.map((user) => {
                      return (
                        <Tr key={user.id}>
                          <Td px={["4", "4", "6"]}>
                            <Checkbox colorScheme="pink" />
                          </Td>
                          <Td>
                            <Box>
                              <Text fontWeight="bold">{user.name}</Text>
                              <Text fontSize="sm" color="gray.300">
                                {user.email}
                              </Text>
                            </Box>
                          </Td>
                          <Td>{user.role}</Td>

                          <Td>
                            <Button
                              as="a"
                              size="sm"
                              fontSize="sm"
                              colorScheme="purple"
                              leftIcon={
                                <Icon as={RiPencilLine} fontSize="16" />
                              }
                            >
                              Editar
                            </Button>
                          </Td>
                        </Tr>
                      );
                    })
                  : ""}
              </Tbody>
            </Table>
          </Box>
        </Flex>
      </Box>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Novo usuário</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nome</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Nome..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>E-mail</FormLabel>
              <Input
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Senha</FormLabel>
              <Input
                placeholder="Senha"
                value={password}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Cargo</FormLabel>
              <Select
                placeholder="Escolha um"
                onChange={(e) => setRole(e.target.value)}
                value={role}
              >
                <option value="admin">Admin</option>
                <option value="secretaria">Secretaria</option>
                <option value="coordenador">Coordernador</option>
              </Select>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
              Salvar
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const list = await api.get("users");
//   const users = list.data.map((user: any) => {
//     return {
//       id: user.ID,
//       name: user.Name,
//       email: user.Email,
//       role: user.Role,
//     };
//   });
//   return {
//     props: {
//       users,
//     },
//   };
// };
