const { getContactById } = require("./contacts");

const showContacts = async () => {
    try {
        const contactById = await getContactById(1);
        console.log(contactById)

    } catch (error) {
        console.log(error)
    }
};

showContacts()