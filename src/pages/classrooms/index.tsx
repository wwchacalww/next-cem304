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
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { GetServerSideProps } from "next";

type ClassProps = {
  id: string;
  name: string;
  anne: string;
  shift: string;
  level: string;
};

type Props = {
  classrooms: ClassProps[];
};

export default function Classrooms({ classrooms }: Props) {
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
                                      {classroom.name}
                                    </Box>
                                    <AccordionIcon />
                                  </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip
                                  ex ea commodo consequat.
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
                                      {classroom.name}
                                    </Box>
                                    <AccordionIcon />
                                  </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip
                                  ex ea commodo consequat.
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
                                      {classroom.name}
                                    </Box>
                                    <AccordionIcon />
                                  </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua.
                                  Ut enim ad minim veniam, quis nostrud
                                  exercitation ullamco laboris nisi ut aliquip
                                  ex ea commodo consequat.
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
    return {
      id: classroom.id,
      name: classroom.Name,
      anne: classroom.ANNE,
      shift: classroom.shift,
      level: classroom.level,
    };
  });
  return {
    props: {
      classrooms,
    },
  };
};
