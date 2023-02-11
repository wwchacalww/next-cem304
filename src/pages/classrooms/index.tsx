import { api } from "@/services/api";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  Tab,
  Table,
  TableCaption,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Select,
  Td,
  Th,
  Thead,
  Tr,
  Button,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { useState } from "react";

type StudentProps = {
  id: string,
  name: string,
  ieducar: number,
  gender: string,
  anne: string,
  birth_day: string,
}

type ClassProps = {
  id: string;
  name: string;
  anne: string;
  shift: string;
  level: string;
  students: StudentProps[];
};

type Props = {
  classrooms: ClassProps[];
};

export default function Classrooms({ classrooms }: Props) {
  const [ classroomId, setClassroomId] = useState("");
  const [ studentId, setStudentId] = useState("");

  const hadleChangeClassroom = async (id: string) => {
    setStudentId(id);
    const data = {
      id,
      classroom_id: classroomId,
    }
    const response = await api.put("students/change", data);
    console.log(response.data);
  }

  const optClass = (
    <Select placeholder='Trocar de turma' onChange={(e) => setClassroomId(e.target.value)}>
      { classrooms.map( (classroom) => ( <option key={classroom.id} value={classroom.id}>{classroom.name}</option>))}
    </Select>
  );
  return (
    <>
      <Box as="div">
        <Flex w="100%" maxW="1480px" mx="auto" my="6">
          <Box flex="1" p="8" borderRadius="8">
            <Heading size="lg" color="red.500" fontWeight="normal">
              Turmas 2023
            </Heading>
            <Tabs size="md" variant="enclosed">
              <TabList bg={"white"}>
                <Tab>1º Ano</Tab>
                <Tab>2º Ano</Tab>
                <Tab>3º Ano</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <p>Turmas do 1º ano do Ensino Médio 2023</p>
                  <Accordion allowToggle>
                    <>
                      {classrooms.map((classroom) => {
                        if (classroom.level === "1º ano") {
                          return (
                            <div key={classroom.id}>
                              <AccordionItem>
                                <h2>
                                  <AccordionButton
                                    _expanded={{ bg: "tomato", color: "white" }}
                                  >
                                    <Box as="span" flex="1" textAlign="left">
                                      {classroom.name} - { classroom.students.length} alunos
                                    </Box>
                                    <AccordionIcon />
                                  </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                
                                  <TableContainer>
                                    <Table variant='simple'>
                                      <TableCaption>Imperial to metric conversion factors</TableCaption>
                                      <Thead>
                                        <Tr>
                                          <Th>Nome do estudante</Th>
                                          <Th>Opções</Th>
                                        </Tr>
                                      </Thead>
                                      <Tbody>
                                      {classroom.students.map( (std) => (
                                        <Tr key={std.id}>
                                          <Td>{std.name}</Td>
                                          <Td>{ optClass }</Td>
                                          <Td><Button bg={"green.500"} color={"white"} onClick={() => hadleChangeClassroom(std.id)}>
                                              Salvar
                                            </Button></Td>
                                        </Tr>
                                      ))}
                                      </Tbody>
                                    </Table>
                                  </TableContainer>
                                  
                                </AccordionPanel>
                              </AccordionItem>
                            </div>
                          );
                        }
                      })}
                    </>
                  </Accordion>
                </TabPanel>
                <TabPanel>
                <p>Turmas do 2º ano do Ensino Médio 2023</p>
                  <Accordion allowToggle>
                    <>
                      {classrooms.map((classroom) => {
                        if (classroom.level === "2º ano") {
                          return (
                            <div key={classroom.id}>
                              <AccordionItem>
                                <h2>
                                  <AccordionButton
                                    _expanded={{ bg: "tomato", color: "white" }}
                                  >
                                    <Box as="span" flex="1" textAlign="left">
                                      {classroom.name} - { classroom.students.length} alunos
                                    </Box>
                                    <AccordionIcon />
                                  </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                
                                  <TableContainer>
                                    <Table variant='simple'>
                                      <TableCaption>Imperial to metric conversion factors</TableCaption>
                                      <Thead>
                                        <Tr>
                                          <Th>Nome do estudante</Th>
                                          <Th>Opções</Th>
                                        </Tr>
                                      </Thead>
                                      <Tbody>
                                      {classroom.students.map( (std) => (
                                        <Tr key={std.id}>
                                          <Td>{std.name}</Td>
                                          <Td>{ optClass }</Td>
                                          <Td><Button bg={"green.500"} color={"white"} onClick={() => hadleChangeClassroom(std.id)}>
                                              Salvar
                                            </Button></Td>
                                        </Tr>
                                      ))}
                                      </Tbody>
                                    </Table>
                                  </TableContainer>
                                  
                                </AccordionPanel>
                              </AccordionItem>
                            </div>
                          );
                        }
                      })}
                    </>
                  </Accordion>
                </TabPanel>
                <TabPanel>
                  <p>Turmas do 3º ano do Ensino Médio 2023</p>
                  <Accordion allowToggle>
                    <>
                      {classrooms.map((classroom) => {
                        if (classroom.level === "3º ano") {
                          return (
                            <div key={classroom.id}>
                              <AccordionItem>
                                <h2>
                                  <AccordionButton
                                    _expanded={{ bg: "tomato", color: "white" }}
                                  >
                                    <Box as="span" flex="1" textAlign="left">
                                      {classroom.name} - { classroom.students.length} alunos
                                    </Box>
                                    <AccordionIcon />
                                  </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                
                                  <TableContainer>
                                    <Table variant='simple'>
                                      <TableCaption>Imperial to metric conversion factors</TableCaption>
                                      <Thead>
                                        <Tr>
                                          <Th>Nome do estudante</Th>
                                          <Th>Opções</Th>
                                        </Tr>
                                      </Thead>
                                      <Tbody>
                                      {classroom.students.map( (std) => (
                                        <Tr key={std.id}>
                                          <Td>{std.name}</Td>
                                          <Td>{ optClass }</Td>
                                          <Td><Button bg={"green.500"} color={"white"} onClick={() => hadleChangeClassroom(std.id)}>
                                              Salvar
                                            </Button></Td>
                                        </Tr>
                                      ))}
                                      </Tbody>
                                    </Table>
                                  </TableContainer>
                                  
                                </AccordionPanel>
                              </AccordionItem>
                            </div>
                          );
                        }
                      })}
                    </>
                  </Accordion>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const list = await api.get("classrooms/list?year=2023");
  
  const classrooms = list.data.map((classroom: any) => {
    let students: StudentProps[] = []
    if(classroom.students) {
      students = classroom.students.map( (std: any) => {
        return {
          id: std.id,
          name: std.Name,
          ieducar: std.ieducar,
          gender: std.gender,
          anne: std.anne,
          birth_day: std.birth_day,
        }
      })
    }
    return {
      id: classroom.id,
      name: classroom.Name,
      anne: classroom.ANNE,
      shift: classroom.shift,
      level: classroom.level,
      students,
    };
  });
  return {
    props: {
      classrooms,
    },
  };
};
