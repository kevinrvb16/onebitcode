import Spaceship from '../spaceship'
import SpaceshipEngine from '../spaceshipEngine'

const shopia = new Spaceship("Sophia", 10, 5)
const amsterdam = new Spaceship("Amsterdã", 14, 10);
const dwarfStart = new Spaceship("Estrela-Anã", 20, 4);

const shopiaEngine = new SpaceshipEngine(shopia);
const amsterdamEngine = new SpaceshipEngine(amsterdam);
const dwarfStartEngine = new SpaceshipEngine(dwarfStart);

shopiaEngine.turnOn();
amsterdamEngine.turnOn();
dwarfStartEngine.turnOn();
