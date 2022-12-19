import Head from "next/head";
import {
  Button,
  Flex,
  Header,
  Title,
  Text,
  Box,
  Container,
  useMantineTheme,
  Center,
  Stack,
  Paper,
  Avatar,
  Divider,
  Grid,
  Image as MantineImage,
} from "@mantine/core";
import Image from "next/image";
import logoImage from "../public/images/logo.png";
import heroImage from "../public/images/hero.jpg";
import gordonImage from "../public/images/employees/gordon.jpg";
import lisaImage from "../public/images/employees/lisa.jpg";
import discoveryImage from "../public/images/payments/discovery.svg";
import mastercardImage from "../public/images/payments/mastercard.svg";
import visaImage from "../public/images/payments/visa.svg";
import foot1Image from "../public/images/feet/foot-1.jpg";
import foot2Image from "../public/images/feet/foot-2.jpg";
import foot3Image from "../public/images/feet/foot-3.jpg";
import foot4Image from "../public/images/feet/foot-4.jpg";
import foot5Image from "../public/images/feet/foot-5.jpg";
import foot6Image from "../public/images/feet/foot-6.jpg";
import hpcImage from "../public/images/other/hpc.webp";
import {
  IconMail,
  IconPhone,
  IconMapPins,
  IconClock,
  IconCashBanknote,
  IconCurrencyPound,
  IconPhysotherapist,
} from "@tabler/icons";
import { Carousel } from "@mantine/carousel";

const AppHeader = () => {
  return (
    <Header height="75px" py="xs">
      <Container>
        <Flex gap="md" justify="space-between" align="center">
          <Flex gap="sm" align="center">
            <Image src={logoImage} alt="logo" priority width={62} height={55} />
            <Text fz="xl" fw="bold">
              G.T. Watson
            </Text>
          </Flex>
          <Button
            onClick={() => {
              window!
                .document!.getElementById("contact")!
                .scrollIntoView({ behavior: "smooth" });
            }}
          >
            Get in touch
          </Button>
        </Flex>
      </Container>
    </Header>
  );
};

const Hero = () => {
  const theme = useMantineTheme();

  return (
    <Box
      sx={{
        position: "relative",
        height: "calc(100vh - 75px)",
        width: "100vw",
      }}
    >
      <Box
        component={Image}
        src={heroImage}
        alt="Premises"
        fill
        priority
        sx={{
          objectPosition: "center",
          objectFit: "cover",
          zIndex: -1,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.8)",
        }}
      >
        <Center sx={{ width: "100%", height: "100%" }} p="md">
          <Stack
            sx={{
              color: theme.white,
              textAlign: "center",
            }}
          >
            <Title
              order={1}
              sx={{
                fontSize: 50,
              }}
            >
              G.T. Watson Chiropody
            </Title>
            <Title order={2}>
              Chiropody and Podiatry tailored to your needs
            </Title>
            <Text>
              Leicester, Markfield, Groby, Glenfield, Anstey and areas west of
              Leicester
            </Text>
            <Flex gap="sm" justify="center">
              <Button
                component="a"
                href="tel:07908 067799"
                leftIcon={<IconPhone size={14} />}
              >
                Phone us
              </Button>
              <Button
                component="a"
                href="mailto:info@chiropodisttamworth.co.uk"
                leftIcon={<IconMail size={14} />}
              >
                Email us
              </Button>
            </Flex>
          </Stack>
        </Center>
      </Box>
    </Box>
  );
};

const MeetTheTeam = () => {
  return (
    <Box>
      <Title order={2}>Meet the team</Title>
      <Divider my="lg" />
      <Text pb="lg">
        The visiting practice is centered around Coalville, Loughborough,
        Anstey, Glenfield, Braunstone Frith, Botcheson and Markfield. Owned and
        operated by Gordon and Lisa Watson for 10 years. The practice aims to
        provide the highest quality footcare at competitive prices in your home.
        Gordon has been practicing for 35 years.
      </Text>
      <Grid justify="center">
        <Grid.Col md={4} sm={6} xs={8} sx={{ textAlign: "center" }}>
          <Paper radius="md" withBorder p="lg" h="100%">
            <Avatar
              src={gordonImage.src}
              size={120}
              radius={120}
              mx="auto"
              alt="Gordon Watson"
            />
            <Text mt="md" align="center">
              Gordon Watson
            </Text>
            <Text c="dimmed">Owner • Chiropodist</Text>
            <Text c="dimmed">BSc (Hons), F.S.S.Ch.,M.B.Ch.A</Text>
          </Paper>
        </Grid.Col>
        <Grid.Col md={4} sm={4} xs={8} sx={{ textAlign: "center" }}>
          <Paper radius="md" withBorder p="lg" h="100%">
            <Avatar
              src={lisaImage.src}
              size={120}
              radius={120}
              mx="auto"
              alt="Lisa Watson"
            />
            <Text mt="md" align="center">
              Lisa Watson
            </Text>
            <Text c="dimmed">Owner • Foot care specialist</Text>
          </Paper>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

const Services = () => {
  return (
    <Box>
      <Title order={2}>Services</Title>
      <Divider my="lg" />
      <Grid>
        <Grid.Col sm={6} xs={12}>
          <Flex gap="xs">
            <Box my="xs">
              <IconCurrencyPound size={24} />
            </Box>
            <Box component="dl" my="xs">
              <Text component="dt" c="dimmed">
                Pricing
              </Text>
              <Text component="dd" m={0}>
                <Stack spacing="xs">
                  <Text>Home visit (1 person) • £33.00</Text>
                  <Text>Home visit (2 person) • £60.00</Text>
                </Stack>
              </Text>
              <Text fw="bold" italic>
                Missed appointments will incur full fee
              </Text>
            </Box>
          </Flex>
        </Grid.Col>
        <Grid.Col sm={6} xs={12}>
          <Flex gap="xs">
            <Box my="xs">
              <IconClock size={24} />
            </Box>
            <Box component="dl" my="xs">
              <Text component="dt" c="dimmed">
                Visiting hours
              </Text>
              <Text component="dd" m={0}>
                Monday - Thursday: 9:00am - 4:00pm
              </Text>
            </Box>
          </Flex>
          <Flex gap="xs">
            <Box my="xs">
              <IconMapPins size={24} />
            </Box>
            <Box component="dl" my="xs">
              <Text component="dt" c="dimmed">
                Home visit areas
              </Text>
              <Text component="dd" m={0}>
                Markfield, Groby, Glenfield, Anstey and areas to the west of
                Leicester.
              </Text>
            </Box>
          </Flex>
          <Flex gap="xs">
            <Box my="xs">
              <IconCashBanknote size={24} />
            </Box>
            <Box component="dl" my="xs">
              <Text component="dt" c="dimmed">
                Accepted cards
              </Text>
              <Text component="dd" m={0}>
                <Flex gap="sm">
                  <Image src={visaImage} alt="Visa" width={40} height={40} />
                  <Image
                    src={mastercardImage}
                    alt="Mastercard"
                    width={40}
                    height={40}
                  />
                  <Image
                    src={discoveryImage}
                    alt="Discovery"
                    width={40}
                    height={40}
                  />
                </Flex>
              </Text>
            </Box>
          </Flex>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

const Treatments = () => {
  return (
    <Box>
      <Title order={2}>Treatments</Title>
      <Divider my="lg" />
      <Grid>
        <Grid.Col sm={6} xs={12}>
          <Flex gap="xs">
            <Box my="xs">
              <IconPhysotherapist size={24} />
            </Box>
            <Box component="dl" my="xs">
              <Text component="dt" c="dimmed">
                Available treatments
              </Text>
              <Text component="dd" m={0}>
                <Stack spacing="xs">
                  <Text>Corns, Callouses & Hard Skin</Text>
                  <Text>In growing and problem nails</Text>
                  <Text>Diabetic foot care</Text>
                  <Text>Off the shelf insoles</Text>
                  <Text>
                    Bio Mechanical examination for foot and lower limb and foot
                    pain
                  </Text>
                  <Text>Advice</Text>
                </Stack>
              </Text>
            </Box>
          </Flex>
        </Grid.Col>
        <Grid.Col sm={6} xs={12}>
          <Paper radius="md" bg="gray.2">
            <Carousel loop withIndicators withControls={false}>
              {[
                foot1Image,
                foot2Image,
                foot3Image,
                foot4Image,
                foot5Image,
                foot6Image,
              ].map((image) => (
                <Carousel.Slide key={image.src}>
                  <MantineImage
                    src={image.src}
                    alt="Foot image"
                    height={300}
                    fit="contain"
                  />
                </Carousel.Slide>
              ))}
            </Carousel>
          </Paper>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

const Contact = () => {
  return (
    <Box id="contact">
      <Title order={2}>Contact us</Title>
      <Divider my="lg" />
      <Grid align="start">
        <Grid.Col md={8} sm={6} xs={12}>
          <Box h={300}>
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d117678.4100450505!2d-1.2265194154731445!3d52.674621072206484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1561418709586!5m2!1sen!2suk"
            />
          </Box>
        </Grid.Col>
        <Grid.Col md={4} sm={6} xs={12}>
          <Flex gap="xs">
            <Box my="xs">
              <IconPhone size={24} />
            </Box>
            <Box component="dl" my="xs">
              <Text component="dt" c="dimmed">
                Telephone
              </Text>
              <Text component="dd" m={0}>
                <Text
                  component="a"
                  href="tel:07908 067799"
                  sx={{
                    ":hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  07908 067799
                </Text>
              </Text>
            </Box>
          </Flex>
          <Flex gap="xs">
            <Box my="xs">
              <IconMail size={24} />
            </Box>
            <Box component="dl" my="xs">
              <Text component="dt" c="dimmed">
                Email
              </Text>
              <Text component="dd" m={0}>
                <Text
                  component="a"
                  href="mailto:info@chiropodistleicester.co.uk"
                  sx={{
                    ":hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  info@chiropodistleicester.co.uk
                </Text>
              </Text>
            </Box>
          </Flex>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

const Footer = () => {
  return (
    <>
      <Divider mt="lg" />
      <Box py="xl">
        <Container>
          <Flex justify="space-between">
            <Box>
              <Text>H.P.C. registered No. CH17007 • Insured • CRB Checked</Text>
              <Text>Copyright © {new Date().getFullYear()} G.T. Watson</Text>
            </Box>
            <Image src={hpcImage} alt="HPC logo" height={50} />
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>G.T. Watson Chiropody and Podiatry</title>
        <meta
          name="description"
          content="Chiropody and Podiatry for Tamworth, Polesworth, Whittington & Lichfield"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppHeader />
      <main>
        <Hero />
        <Container py="lg">
          <Stack spacing="xl">
            <MeetTheTeam />
            <Services />
            <Treatments />
            <Contact />
          </Stack>
        </Container>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
