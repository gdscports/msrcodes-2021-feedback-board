import {Step, StepLabel, Stepper} from '@material-ui/core';
import {Box, Button, TextField, Typography} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {useEffect, useState} from 'react';

import HeroSection from '../components/Hero';
import SentimentRating from '../components/SentimentRating';

interface Question {
  label: string;
  text: string;
  type: 'sentiment' | 'freetext';
}

const questions: Question[] = [
  {
    label: 'Enjoyment',
    text: 'How much did you enjoy this event?',
    type: 'sentiment',
  },
  {
    label: 'Learning',
    text: 'How much did you learn from this event?',
    type: 'sentiment',
  },
  {
    label: 'Question',
    text: 'Based on this event, what question would you like to ask?',
    type: 'freetext',
  },
];

interface Responses {
  [k: string]: string;
}

const Homepage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState<Question>(
    questions[activeStep]
  );

  const [sentimentValue, setSentimentValue] = useState<number>(null);
  const [freetextValue, setFreetextValue] = useState<string>(null);

  const [responses, setResponses] = useState<Responses>({});

  // TODO: get user id
  // TODO: submit to firebase database
  // TODO: redirect to results page on final submission
  if (Object.keys(responses).length === questions.length) {
    console.log(responses);
  }

  useEffect(() => {
    setActiveQuestion(questions[activeStep]);
  }, [activeStep]);

  return (
    <main>
      <HeroSection>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Make Your Voice Heard!
        </Typography>
        <Typography
          component="p"
          align="center"
          color="text.primary"
          gutterBottom
        >
          We value your courage, openness and respect.
        </Typography>
        <Box
          sx={{
            mx: 'auto',
            my: 8,
            display: 'flex',
            flexDirection: 'column',
            border: '2px solid grey',
            p: 4,
          }}
        >
          <Stepper activeStep={activeStep} alternativeLabel sx={{mb: 8}}>
            {questions.map(({label}) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep >= questions.length ? (
            <>
              <CheckCircleIcon
                color="success"
                fontSize="large"
                sx={{mx: 'auto'}}
              />
              <Typography align="center" sx={{my: 4}}>
                All done! Thank you for your feedback.
              </Typography>
            </>
          ) : (
            <>
              <Typography
                component="h2"
                variant="h5"
                color="text.primary"
                align="center"
                gutterBottom
                sx={{my: 4}}
              >
                {activeQuestion.text}
              </Typography>
              <Box sx={{display: 'flex', flexDirection: 'column'}}>
                {activeQuestion.type === 'freetext' && (
                  <TextField
                    key={activeQuestion.label + '-textfield'}
                    onChange={e => setFreetextValue(e.target.value)}
                    label="Your Thoughts"
                    variant="outlined"
                    multiline
                    maxRows={4}
                    required
                  />
                )}
                {activeQuestion.type === 'sentiment' && (
                  <SentimentRating
                    key={activeQuestion.label + '-sentiment'}
                    onChange={val => {
                      setSentimentValue(val);
                    }}
                  />
                )}
              </Box>
              <Box sx={{display: 'flex', my: 4}}>
                <Button
                  onClick={() => {
                    setActiveStep(activeStep + 1);

                    switch (activeQuestion.type) {
                      case 'sentiment':
                        setResponses({
                          [activeQuestion.text]: String(sentimentValue),
                          ...responses,
                        });
                        break;
                      case 'freetext':
                        setResponses({
                          [activeQuestion.text]: String(freetextValue),
                          ...responses,
                        });
                        break;
                    }
                  }}
                  variant="contained"
                  sx={{mx: 'auto'}}
                  disabled={sentimentValue === null}
                >
                  {activeStep === questions.length - 1 ? 'Complete' : 'Next'}
                </Button>
              </Box>
            </>
          )}
        </Box>
      </HeroSection>
    </main>
  );
};

export default Homepage;
