import { glob } from 'glob';

glob('db/logs/*.log', (err, files) => {
    if (err) {
        console.log(err);
    } else {
        console.log(files);
    }
});
