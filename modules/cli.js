import Server from './server';
import 'babel-register';

Server(`${process.cwd()}/${process.argv[2]}`);
