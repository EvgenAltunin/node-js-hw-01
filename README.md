1. Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js --action="list"
https://monosnap.com/file/CLmSDaueNdHj8bZ6cF6qwkz8DcMtkh

2. # Отримуємо контакт по id
node index.js --action="get" --id=5
https://monosnap.com/file/PGoJz4TYxPjwNFEkMbwOaFJ2QlaSRS

3. # Додаємо контакт
node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22"
https://monosnap.com/file/iXiRc6KEicS5ie1VeiKhTETKXZqo12

4. # Видаляємо контакт
node index.js --action="remove" --id=3
https://monosnap.com/file/bNLtnQce8V9oC7lJJucLcDbfnDkqth
