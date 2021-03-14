import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { API_URL } from '../../config';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    display: 'block',
    overflow: 'hidden',
    width: '100%',
  },
}));

export default function Home() {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const [banners, setbanners] = React.useState([]);
    const [maxSteps, setMaxSteps] = React.useState(0);
    const [categories, setCategories] = React.useState([]);

    React.useEffect(() => {
        fetch(API_URL+'/banners.json')
            .then(response => response.json())
            .then(response => {
                let data = []
                for (let id in response) {
                    response.id = id;
                    data.push(response[id]);
                }
                setbanners(data);
                setMaxSteps(data.length);
            })
        fetch(API_URL+'/categories.json')
            .then(response => response.json())
            .then(response => {
                let data = []
                for (let id in response) {
                    response.id = id;
                    data.push(response[id]);
                }
                setCategories(data);
            })
    },[]);

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

  return banners.length === 0 ? <div>Carregando...</div> : (
    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {banners.map((step, index) => (
          <div key={step.id}>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.image} alt={step.description} />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        style={{flexDirection: 'column'}}
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={false}
        backButton={false}
      />

      <hr style={{marginTop: 40, marginBottom: 40}}/>

    {categories.map(cat => (
        <div>
            <Button fullWidth variant={"outlined"} color={"secondary"}>
                {cat.name}
            </Button>
        </div>
    ))}

    </div>
  );
}