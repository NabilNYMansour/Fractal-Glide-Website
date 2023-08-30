import {
  Box,
  Button,
  Card,
  CardContent,
  CssBaseline,
  IconButton,
  ThemeProvider,
  Tooltip,
  Typography,
  createTheme,
} from "@mui/material";
import "./App.css";
import SteamIcon from "./icons/steamIcon";
import Carousel from "./component/Carousel";
import YoutubeEmbed from "./component/YoutubeEmbed";
import BasicCard from "./component/BasicCard";
import BasicCardList from "./component/BasicCardList";
import CollapsiblePaper from "./component/CollapsiblePaper";
import { YouTube } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import CustomIcon from "./icons/customIcon";

const links = {
  email: "mailto:nabilnymansour@gmail.com",
  personalWebsite: "https://nabilmansour.com",
  presskit: "https://pickled-brother-2cc.notion.site/FRACTAL-GLIDE-Presskit-5c5eb7592b5f4ea185dac8ac2d30e176",
  steamPage: "https://store.steampowered.com/app/2565200/Fractal_Glide/",
};

const contacts = [
  {
    link: "https://discord.com/invite/wHvbTvqF",
    title: "Discord",
    icon: (
      <CustomIcon
        size="medium"
        path="M18.854 6.2884a15.8724 15.8724 90 00-3.9084-1.2132.06.06 90 00-.0624.03c-.1692.3-.3564.6924-.4872.9996a14.628 14.628 90 00-4.3896 0 9.9096 9.9096 90 00-.4944-.9996.0612.0612 90 00-.0624-.03c-1.35.2328-2.664.6408-3.9084 1.2132a.0492.0492 90 00-.0252.0216C3.0272 10.0288 2.3444 13.6564 2.6792 17.2384c.0012.0168.012.0336.0252.0444a15.9312 15.9312 90 004.794 2.424.06.06 90 00.0672-.0228c.3696-.504.6984-1.0356.9816-1.5948a.06.06 90 00-.012-.0708.0612.0612 90 00-.0216-.0132 10.65 10.65 90 01-1.4976-.714.06.06 90 01-.024-.0792.0612.0612 90 01.018-.0228c.1008-.0756.2016-.1548.2976-.234a.06.06 90 01.0612-.0084c3.1428 1.4352 6.5448 1.4352 9.6492 0a.0624.0624 90 01.0636.0084c.096.0792.1968.1584.2976.234a.0612.0612 90 01-.0048.102 9.9048 9.9048 90 01-1.4988.7128.06.06 90 00-.036.036.0624.0624 90 00.0036.0492c.288.558.618 1.0908.9804 1.5948a.06.06 90 00.0672.0228 15.882 15.882 90 004.8012-2.424.0588.0588 90 00.0252-.0444c.4008-4.1412-.6708-7.7388-2.8392-10.9272a.0408.0408 90 00-.024-.0228Zm-9.8376 8.7684c-.9468 0-1.7256-.8688-1.7256-1.9344 0-1.0668.7644-1.9356 1.7256-1.9356.9684 0 1.74.876 1.7256 1.9356 0 1.0656-.7644 1.9344-1.7256 1.9344Zm6.3792 0c-.9456 0-1.7256-.8688-1.7256-1.9344 0-1.0668.7644-1.9356 1.7256-1.9356.9684 0 1.7412.876 1.7256 1.9356 0 1.0656-.7572 1.9344-1.7256 1.9344Z"
      />
    ),
  },
  {
    link: "https://www.youtube.com/@nabilnymansour",
    title: "Youtube",
    icon: <YouTube />,
  },
  {
    link: links.email,
    title: "Email",
    icon: <EmailIcon />,
  },
  {
    link: "https://www.tiktok.com/@nabilnymansour",
    title: "Tiktok",
    icon: (
      <CustomIcon
        size="medium"
        path="M13 4h1.98c.144.715.54 1.617 1.235 2.512C16.895 7.389 17.797 8 19 8v2c-1.753 0-3.07-.814-4-1.829V15a5 5 0 11-5-5v2a3 3 0 103 3V5Z"
      />
    ),
  },
];

// Augment the palette to include an slightgray color
declare module "@mui/material/styles" {
  interface Palette {
    slightgray: Palette["primary"];
  }

  interface PaletteOptions {
    slightgray?: PaletteOptions["primary"];
  }
}

// Update the Button's color options to include an slightgray option
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    slightgray: true;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: "Caviar-Dreams",
    fontSize: 32,
  },
  palette: {
    mode: "dark",
    slightgray: {
      main: "#fefefe",
      light: "#ffffff",
      dark: "#999999",
      contrastText: "#000000",
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* Presskit button */}
        <Button
          color="slightgray"
          variant="text"
          style={{ textTransform: "none" }}
          href={links.presskit}
          target="_blank"
          rel="noreferrer"
        >
          Presskit
        </Button>
        <div className="main">
          <div className="fixed-background" />
          <div className="title">FRACTAL GLIDE</div>
          {/* Wishlist button */}
          <Button
            color="slightgray"
            variant="text"
            href={links.steamPage}
            target="_blank"
            rel="noreferrer"
          >
            Wishlist on&nbsp;
            <SteamIcon />
            &nbsp;Steam
          </Button>
          {/* Contacts */}
          <div className="desc-container">
            <Box
              sx={{
                flexGrow: 1,
              }}
            >
              {contacts.map((contact, i) => (
                <Tooltip key={i} title={contact.title} arrow={true}>
                  <IconButton
                    href={contact.link}
                    target="_blank"
                    rel="noreferrer"
                    sx={{
                      my: 2,
                      color: "inherit",
                    }}
                    // onClick={handleCloseNavMenu}
                    aria-label={contact.title}
                  >
                    {contact.icon}
                  </IconButton>
                </Tooltip>
              ))}
            </Box>
          </div>
          {/* SCREENSHOTS */}
          <div className="image-desc-container">
            <Card>
              <CardContent>
                <Typography textAlign="center">Screenshots</Typography>
                <Carousel />
              </CardContent>
            </Card>
          </div>
          {/* Trailer */}
          <YoutubeEmbed embedId="Ng7I_fqYkqo" />
          {/* Description */}
          <div className="desc-container">
            <BasicCard
              title="Description"
              description="Experience the mesmerizing world of fractals as you glide through
                           meticulously repeating landscapes. Immerse yourself in a tranquil
                           journey, finding awe in the beauty of math. Embark on an adventure
                           where the goal is exploration and the discovery of infinite art
                           through the wonders of fractals."
            />
          </div>
          {/* Features */}
          <div className="desc-container">
            <BasicCardList
              title="Features"
              entries={[
                "Diverse Fractal Worlds: Immerse yourself in a variety of stunning fractal environments, each with its unique character and challenges.",
                "Points and Progression: Collect points as you explore, allowing you to unlock new areas and new robots and delve deeper into the fractal cosmos.",
                "Art and Exploration: Fractal Glide is more than a game; it's an artistic experience. Every fractal landscape is a work of art, waiting for you to uncover its secrets.",
                "Discovery: With a growing collection of fractal patterns, each playthrough offers a new chance to explore the infinite.",
              ]}
            />
          </div>
          {/* FAQ */}
          <div className="desc-container">
            <Card>
              <CardContent>
                <Typography textAlign="center">FAQs</Typography>
                <CollapsiblePaper
                  title="How big is your team?"
                  description="I am a solo developer. I started working on Fractal Glide in summer 2023 as a side project after expanding on 
                  some of the graphics demos I had made for my computer graphics class. I do all the art, assets, programming, but try to get help
                  when it comes to music and sound effects. If you are a sound designer or composer and are interested in working on Fractal Glide, please
                  reach out to me through the contacts above."
                />
                <CollapsiblePaper
                  title="What technology is used to make Fractal Glide?"
                  description="The main game engine is Unity. Blender is used for some of the polyonal models. 
                  However, the fractal landscapes are generated using a custom fractal (conemarching) engine written through computer shaders as an aftereffect to the standard unity rendering pipeline."
                />
                <CollapsiblePaper
                  title="What exactly do I do in this game?"
                  description="The main goal of the game is to explore the fractal landscapes. 
                  There are no enemies or time limits. The experience is meant to let you enter zen and relax as you glide.
                  The points are there for progression and to give you a sense of accomplishment as you explore the fractal worlds."
                />
                <CollapsiblePaper
                  title="Can this run on my phone?"
                  description="Raymarching and conemarching are very computationally expensive. Right now, the focus is on making the game for PC, But I don't know what the future holds.
                  However, it is very unlikely that a phone can run this game at a playable framerate so it's not on my radar."
                />
                <CollapsiblePaper
                  title="Where can I see the latest news for this game?"
                  description="You can join the discord server to get the latest news and updates. I will also be posting updates and devlogs on my youtube channel. You can find both of them in the contacts above."
                />
              </CardContent>
            </Card>
          </div>

          <footer
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* Footer links */}
            <div>
              <Button
                color="slightgray"
                href={links.email}
                target="_blank"
                rel="noreferrer"
              >
                Contact
              </Button>{" "}
              |&nbsp;
              <Button
                color="slightgray"
                href={links.personalWebsite}
                target="_blank"
                rel="noreferrer"
              >
                DEVELOPER
              </Button>{" "}
              |&nbsp;
              <Button
                color="slightgray"
                href={links.presskit}
                target="_blank"
                rel="noreferrer"
              >
                Presskit
              </Button>
            </div>
            <div style={{ fontSize: "0.5em" }}>©2023 Nabil NY Mansour</div>
            <div style={{ fontSize: "0.5em" }}>
              Website made in ReactJS and MUI
            </div>
          </footer>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
