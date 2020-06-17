const fs = require('fs').promises;

const parser = ({ ...options }) => {
  fs.readFile(options.dataPath, 'utf8')
    .then((data) => {
      return options.res.send(JSON.parse(data));
    })
    .catch(() =>
      options.res
        .status(500)
        .send({ message: 'Ошибка чтения файла или файл не найден' })
    );
};

module.exports = parser;
