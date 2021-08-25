import Image from 'next/image';

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
  Stack,
  Typography,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

import HeroSection from '../components/Hero';
import {NextLinkComposed} from '../components/Link';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Homepage = () => (
  <main>
    <HeroSection>
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Next.js Boilerplate!
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        Use this to kickstart your Next.js projects. Check out the{' '}
        <Link href="https://next.material-ui.com/">
          Material UI component library docs
        </Link>
        .
      </Typography>
      <Stack sx={{pt: 4}} direction="row" spacing={2} justifyContent="center">
        <Button
          component={NextLinkComposed}
          variant="contained"
          to="https://github.com/gdscports/admins-2021-boilerplate-next-BNXT"
          endIcon={<GitHubIcon />}
        >
          Clone on GitHub
        </Button>
        <Button
          component={NextLinkComposed}
          variant="outlined"
          to="https://github.com/gdscports/admins-2021-docs#-gdsc-university-of-portsmouth-engineering-documentation"
          endIcon={<LibraryBooksIcon />}
        >
          Read the Docs
        </Button>
      </Stack>
    </HeroSection>
    <Container sx={{py: 8}} maxWidth="md">
      <Grid container spacing={4}>
        {cards.map(card => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardMedia>
                <Image
                  src="1508789733592-e934906d39cd"
                  loader={({width, src, quality}) =>
                    `https://images.unsplash.com/photo-${src}?auto-format&fit=crop&w=${width}&q=${quality}`
                  }
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII="
                  width={1920}
                  height={1080}
                />
              </CardMedia>
              <CardContent sx={{flexGrow: 1}}>
                <Typography gutterBottom variant="h5" component="h2">
                  Heading
                </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the
                  content.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View</Button>
                <Button size="small">Edit</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  </main>
);

export default Homepage;
