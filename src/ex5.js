//Rescatando el enunciado del ex1, vamos realizar el mismo juego pero con mas iteraciones 

const greenLight = 'greenLight';
const redLight = 'redLight';

const lights = ['greenLight','redLight','greenLight','greenLight','redLight','greenLight','redLight','redLight','greenLight','greenLight'];

lights.map((light) => {
    console.log('Light selected is:' + light);

   if (light === redLight) {
        console.log('STOP!');
    } else if (greenLight) {
        console.log('RUN!');
    }
    
})

/*output: 
Light selected is:greenLight
RUN!
Light selected is:redLight
STOP!
Light selected is:greenLight
RUN!
Light selected is:greenLight
RUN!
Light selected is:redLight
STOP!
Light selected is:greenLight
RUN!
Light selected is:redLight
STOP!
Light selected is:redLight
STOP!
Light selected is:greenLight
RUN!
Light selected is:greenLight
RUN!*/