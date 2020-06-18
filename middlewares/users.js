const fs = require('fs').promises;

const users = ({ ...options }) => {
  fs.readFile(options.dataPath, 'utf8')
    .then((data) => {
      if (!options.req) {
        return options.res.send(JSON.parse(data));
      }
      const parsedData = JSON.parse(data);

      const userId = (id) => parsedData.find((user) => id === user._id);
      const user = userId(options.req.params.id);
      if (user) {
        return options.res.send(user);
      }
      return options.res.status(404).send({
        message: 'Нет пользователя с таким id',
      });
    })
    .catch(() =>
      options.res
        .status(500)
        .send({ message: 'Ошибка чтения файла или файл не найден' })
    );
};

module.exports = users;
