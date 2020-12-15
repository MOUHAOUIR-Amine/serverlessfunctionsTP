const express = require('express');

const app = express();

app.use(express.static('./dist/my-dream-app'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/my-dream-app/'}),
);

app.listen(process.env.PORT || 8080);